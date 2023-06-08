import { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Image, Alert } from "react-native";
import { Button } from 'react-native-paper';
import { LogInContext } from '../contexts/LogInContext';
import HeaderLesson from '../components/learn/HeaderLesson';
import CardEndLesson from '../components/learn/CardEndLesson';
import theme from '../../theme-design';
import { updateCurrentLesson } from '../api/updateCurrentLesson';

const EndLessonScreen = ({route, navigation}) => {
    
    const { exerciseSuccesses, lesson } = route.params;
    const { userLoggedInId, setCurrentLessonUser, setCurrentStateLessonUser } = useContext(LogInContext);
    const isLessonSuccess = Object.values(exerciseSuccesses).every(item => item === true);

    useEffect(() => {
        const updateInfosCurrentLesson = async () => {
            try {
                const currentLessonInfos = await updateCurrentLesson(userLoggedInId, lesson, isLessonSuccess ? 1 : 2);
                const { status, currentLesson } = currentLessonInfos;
    
                if (currentLesson != null) {
                    setCurrentLessonUser(currentLesson);
                    setCurrentStateLessonUser(status);
                } else {
                    setCurrentStateLessonUser(status);
                }

            } catch (error) {
                console.error('Une erreur s\'est produite lors de la mise à jour de la leçon actuelle :', error);
            }
        };

        updateInfosCurrentLesson();
    }, []);

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
                        Alert.alert("La leçon est indisponible");
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
        borderRadius: theme.radius.full,
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
        borderRadius: theme.radius.full,
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
        borderRadius: theme.radius.small,
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