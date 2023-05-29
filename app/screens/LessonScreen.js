import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import { Text } from 'react-native-paper';
import { getExerciseById } from '../api/getExerciseById';
import theme from '../../theme-design';

const LessonScreen = ({route, navigation}) => {
    const { exercices } = route.params;
    const [allExercises, setAllExercises] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            for (const exerciceId of exercices) {
                const exo = await getExerciseById(exerciceId);
                // console.log(exo);
            }
        };
    
        fetchExercises();
    }, []);

    return (
        <>
            <TouchableHighlight 
                style={styles.iconContainer}
                onPress={() => navigation.goBack()}
            >
                <Image 
                    style={styles.icon}
                    source={require('../assets/img/arrow-back.png')}
                ></Image>
            </TouchableHighlight >
            <Text>EXO</Text>
        </>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.gray,
        height: 45,
        width: 45,
        borderRadius: 100
    },
    icon:{
        height: 17,
        resizeMode: 'contain',
        marginLeft: 3
    }
});

export default LessonScreen;