import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import { Divider, Text } from 'react-native-paper';
import { getExerciseById } from '../api/getExerciseById';
import RecognizeSignExercise from '../components/learn/types_exercises/RecognizeSignExercise';
import theme from '../../theme-design';

const ExercisesScreen = ({route, navigation}) => {
    const { lesson, exercises } = route.params;
    const [exerciseSuccesses, setExerciseSuccesses] = useState([]);    
    const [allExercises, setAllExercises] = useState([]);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

    const handleExerciseComplete = (exerciseSuccess) => {
        setExerciseSuccesses([...exerciseSuccesses, exerciseSuccess]);
    };

    const fetchExercises = async () => {
        const exercisesData = [];
        for (const exerciceId of exercises) {
            const exo = await getExerciseById(exerciceId);
            exercisesData.push(exo);
        }
        setAllExercises(exercisesData);
    };

    useEffect(() => {
        fetchExercises(exercises);
    }, []);

    useEffect(() => {
        if (exerciseSuccesses.length > 0 && currentExerciseIndex >= allExercises.length - 1) {
          
          navigation.navigate('EndLessonScreen', {
            exerciseSuccesses: exerciseSuccesses,
            lesson: lesson
          });
        } else if (exerciseSuccesses.length > 0 ) {
            setCurrentExerciseIndex(currentExerciseIndex + 1);
        }
      }, [exerciseSuccesses]);

    return (
        <View style={styles.container}>
            <View style={styles.exerciseHeader}>
                <TouchableHighlight 
                    style={styles.iconBackContainer}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        style={styles.iconBack}
                        source={require('../assets/img/arrow-back.png')}
                    ></Image>
                </TouchableHighlight>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Divider style={styles.divider}></Divider>
            </View>
            <View style={styles.exerciseContent}>
                {currentExerciseIndex < allExercises.length ? (
                    <>
                        <Text style={styles.exerciseInstruction}>{allExercises[currentExerciseIndex].instruction}</Text>
                        <RecognizeSignExercise 
                            onExerciseComplete={handleExerciseComplete} 
                            exercice={allExercises[currentExerciseIndex]}
                            currentExerciseIndex={currentExerciseIndex}
                        ></RecognizeSignExercise>
                    </>
                ) : (
                    
                    <Text>Tous les exercices sont terminés.</Text>
                )}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingHorizontal: 24,
        paddingTop: 45,
        paddingBottom: 11,
    },
    exerciseHeader: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: theme.size.full,
    },
    iconBackContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightGray,
        height: 45,
        width: 45,
        borderRadius: theme.radius.full,
    },
    iconBack:{
        width: 18,
        resizeMode: 'contain',
        marginLeft: 3
    },
    lessonTitle: {
        fontFamily: 'Husansans-Bold',
        fontSize: 20,
        marginLeft: 15,
        color: theme.colors.black,
        letterSpacing: 0.2,
        textAlign: 'left',
        paddingRight: 45,
    },
    divider: {
        display: 'flex',
        backgroundColor: theme.colors.black, 
        width: theme.size.full,
        borderWidth: 0.4,
        marginTop: 35,
    },
    exerciseInstruction: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: theme.colors.black,
        letterSpacing: 0.2,
        textAlign: 'left',
        paddingRight: 45,
        marginBottom: 10,
    },
});
export default ExercisesScreen;