import { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { getSignById } from '../../../api/getSignById';
import SignLesson from '../SignLesson';
import theme from '../../../../theme-design';

const RecognizeSignExercise = ({onExerciseComplete, exercice, currentExerciseIndex}) => {
    const [exerciseSuccess, setExerciseSuccess] = useState(true);
    const [signLinks, setSignLinks] = useState([]);
    const [activeSign, setActiveSign] = useState(null);
    const [stateButton, setStateButton] = useState('blocked');;

    const fetchSigns = async () => {
        const links = await Promise.all(
            exercice.associed_signs.map((sign) => getSignById(sign))
        );

        setSignLinks(links);
    };

    const handleSignPress = (selectedSign) => {
        setActiveSign(selectedSign);
        setStateButton('active');
    }

    const handleVerificationSign = () => {
        if (activeSign === exercice.sign_to_find ) {
            setStateButton('correct');
        } else if (activeSign !== exercice.sign_to_find && exerciseSuccess === true) {
            
            setExerciseSuccess(false);
            setStateButton('incorrect');
        } else {
            setStateButton('incorrect');
        }
    }

    const handleComplete = () => {
        onExerciseComplete(exerciseSuccess);
    };

    useEffect(() => {
        fetchSigns();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            await fetchSigns();
            setActiveSign(null);
            setStateButton('blocked');
        };
    
        fetchData();
    }, [currentExerciseIndex]);

    return (
        <>
            <View style={styles.signsGrid}>
            {signLinks.map((sign) => (
                <SignLesson 
                    key={sign.name}
                    sign={sign}
                    handleSignPress={handleSignPress}
                    setStateButton={setStateButton}
                    stateButton={stateButton}
                />
            ))}
            </View>
            <View style={styles.exerciseFooter}>
            <Button
                mode="contained"
                buttonColor={theme.colors.violet}
                textColor={theme.colors.white}
                labelStyle={styles.labelButton}
                style={[
                    styles.button,
                    stateButton === 'blocked' && { backgroundColor: theme.colors.gray },
                    stateButton === 'active' && { backgroundColor: theme.colors.violet },
                    stateButton === 'correct' && { backgroundColor: theme.colors.green },
                    stateButton === 'incorrect' && { backgroundColor: theme.colors.orange }
                ]}
                onPress={stateButton === 'correct' || stateButton === 'incorrect' ? handleComplete : handleVerificationSign}
            >
            {stateButton === 'correct' || stateButton === 'incorrect' ? 'Continuer' : 'Valider'}
            </Button>
            </View>
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
    labelButton: {
        color: theme.colors.white,
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        paddingTop: 8,
        paddingBottom: 2,
        width: theme.size.full,
    },
    button: {
        borderRadius: 50,
        marginTop: 23,
    },
});

export default RecognizeSignExercise;