import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import { Text } from 'react-native-paper';
import { getExerciseById } from '../api/getExerciseById';
import theme from '../../theme-design';

const ExercisesScreen = () => {

    const [allExercises, setAllExercises] = useState([]);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

    const handleExerciseComplete = () => {
        if (currentExerciseIndex < allExercises.length - 1) {
            setCurrentExerciseIndex(currentExerciseIndex + 1);
        } else {
            console.log("Leçon terminée!");
            // Tous les exercices sont terminés
        }
    };
    
    const fetchExercises = async () => {
        const exercisesData = [];
        for (const exerciceId of lesson.associed_exercices) {
            const exo = await getExerciseById(exerciceId);
            exercisesData.push(exo);
        }
        setAllExercises(exercisesData);
    };

    useEffect(() => {
        fetchExercises();
    }, []);


    return (
        <>
            <Text>EXOS</Text>
        </>
    )
}

export default ExercisesScreen;