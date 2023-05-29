import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Image, FlatList, SafeAreaView } from "react-native";
import { Divider, Text, Button } from 'react-native-paper';
import { getExerciseById } from '../api/getExerciseById';
import theme from '../../theme-design';

const LessonScreen = ({route, navigation}) => {
    const { lesson } = route.params;
    return (
        <View style={styles.container}>
            <TouchableHighlight 
                style={styles.iconBackContainer}
                onPress={() => navigation.goBack()}
            >
                <Image 
                    style={styles.iconBack}
                    source={require('../assets/img/arrow-back.png')}
                ></Image>
            </TouchableHighlight>
            <View style={styles.containerContent}>
                <View style={styles.lessonIconContainer}>
                    <Image 
                        style={styles.iconlesson}
                        source={{
                            uri: lesson.icon
                        }}
                    ></Image>
                </View>
                <View style={styles.lessonHeader}>
                    <Text style={styles.lessonNumber}>Leçon {lesson.number}</Text>
                    <Divider style={styles.divider}></Divider>
                    <Text style={styles.lessonTitle}>{lesson.title}</Text>
                </View>
                <View style={styles.lessonContent}>
                    <Text style={styles.goals}>Objectifs :</Text>
                    <SafeAreaView style={styles.containerList}>
                        <FlatList
                            data={lesson.goals}
                            renderItem={({ item }) => {
                                return (
                                <View style={styles.goalContainer}>
                                    <Image 
                                        style={styles.iconList}
                                        source={require('../assets/img/bullet.png')}
                                    ></Image>
                                    <Text style={styles.goal}>{item}</Text>
                                </View>
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </SafeAreaView>
                </View>
                <View style={styles.lessonFooter}>
                    <Button 
                        mode="contained"
                        buttonColor={theme.colors.violet}
                        textColor={theme.colors.white}
                        labelStyle={styles.labelButton}
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('ExercisesScreen');
                        }}
                        >
                            Commencer
                    </Button>
                </View>
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
    containerContent: {
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
    containerList: {
        display: "flex",
    },
    goalContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    goals: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: theme.colors.black,
        marginBottom: 10
    },
    goal: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: theme.colors.black,
        marginVertical: 5,
        marginLeft: 10
    },
    iconList: {
        width: 7,
        resizeMode: 'contain',
        display: 'flex',
        alignSelf: 'center'
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
    },
});

export default LessonScreen;