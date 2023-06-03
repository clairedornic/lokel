import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import { Text, Button } from 'react-native-paper';
import HeaderLesson from '../components/learn/HeaderLesson';
import CardEndLesson from '../components/learn/CardEndLesson';
import theme from '../../theme-design';

const EndLessonScreen = ({route, navigation}) => {
    
    const { exerciseSuccesses, lesson } = route.params;
    const isLessonSuccess = Object.values(exerciseSuccesses).every(item => item === true);

    return(
        <View style={styles.container}>
            <View style={styles.containerContent}>
                <TouchableHighlight 
                    style={styles.iconBackContainer}
                    onPress={() => {
                        navigation.navigate('LearnScreen');
                    }}
                    
                >
                    <Image 
                        style={styles.iconBack}
                        source={require('../assets/img/arrow-back.png')}
                    ></Image>
                </TouchableHighlight>
                <View style={styles.containerHeader}>
                    <HeaderLesson lesson={lesson}></HeaderLesson>
                </View>
                <CardEndLesson isLessonSuccess={isLessonSuccess}></CardEndLesson>
            </View>
            <View style={styles.lessonFooter}>
                <Button 
                    mode="contained"
                    buttonColor={theme.colors.violet}
                    textColor={theme.colors.white}
                    labelStyle={styles.labelButton}
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('ExercisesScreen', {
                            lesson: lesson,
                            exercises: lesson.associed_exercices,
                        });
                    }}
                    >
                    {isLessonSuccess ? 'Passer à la leçon suivante' : 'Recommencer la leçon'}
                </Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        height: '100%',
        paddingTop: 45,
        paddingBottom: 11,
    },
    containerContent: {
        display: 'flex',
        width: '100%'
    },
    containerHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -15,
    },
    iconBackContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightGray,
        height: 45,
        width: 45,
        borderRadius: 100
    },
    iconBack:{
        width: 18,
        resizeMode: 'contain',
        marginLeft: 3
    },
    lessonIconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lila,
        height: 85,
        width: 85,
        borderRadius: 100
    }, 
    iconlesson: {
        width: 36,
        height: 36,
        resizeMode: 'contain',
    },
    lessonHeader: {
        display: 'flex',
        alignItems: 'center',
        width: theme.size.full,
        marginVertical: 20,
    },
    lessonNumber: {
        fontFamily: 'Poppins',
        fontSize: 18,
        color: theme.colors.black,
    },
    divider: {
        display: 'flex',
        backgroundColor: theme.colors.black, 
        width: 85,
        borderWidth: 0.4,
        marginVertical: 8,
    },
    lessonTitle:{
        fontFamily: 'Husansans-Bold',
        fontSize: 25,
        color: theme.colors.black,
        letterSpacing: 0.2,
        textAlign: 'center'
    },
    lessonContent: {
        maxHeight: 200,
        borderRadius: 14,
        backgroundColor: theme.colors.lila,
        padding: 18,
        elevation: 2,
        shadowColor: '#000000',
    },
    labelButton: {
        display: 'flex',
        alignSelf: 'center',
        color: theme.colors.white,
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        paddingTop: 5,
        width: theme.size.full,
    },
    button: {
        borderRadius: 50,
        marginTop: 38,
        marginBottom: 28,
        marginHorizontal: 15,
        elevation: 2
    },
});

export default EndLessonScreen;