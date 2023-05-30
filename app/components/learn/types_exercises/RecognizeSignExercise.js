import { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import { Text, Button } from 'react-native-paper';
import { getSignById } from '../../../api/getSignById';
import SignLesson from '../SignLesson';
import theme from '../../../../theme-design';

const RecognizeSignExercise = ({onExerciseComplete, exercice}) => {

    const [isCorrect, setIsCorrect] = useState(false);
    const [signLinks, setSignLinks] = useState([]);

    const handleComplete = () => {
        onExerciseComplete();
    };

    const handleVerificationSign = (selectedSign) => {
        if (selectedSign === exercice.sign_to_find) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    const fetchSigns = async () => {

        const links = await Promise.all(
            exercice.associed_signs.map((sign) => getSignById(sign))
        );

        setSignLinks(links);
    };

    useEffect(() => {
        fetchSigns();
    }, []);

    return (
        <>
            <View style={styles.signsGrid}>
            {signLinks.map((sign) => (
                <SignLesson 
                    sign={sign}
                    handleSignPress={handleVerificationSign}
                />
            ))}
            </View>
            {/* {isCorrect && <Text>Bravo, vous avez trouvé le bon signe !</Text>}
            {!isCorrect && <Text>Ce n'est pas le bon signe, essayez à nouveau.</Text>}
            <Button onPress={handleComplete}>Terminer l'exercice</Button> */}
        </>
    )
}

const styles = StyleSheet.create({
    signsGrid: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: theme.size.full
    },
});

export default RecognizeSignExercise;