import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import { Text } from 'react-native-paper';
import { doc, getDoc, collection } from 'firebase/firestore';
import { FIRESTORE_DB } from '../config/firebase'
import theme from '../../theme-design';

const LessonScreen = ({route, navigation}) => {
    const { exercices } = route.params;

    async function getExerciceById(exerciceId) {
        try {
          const documentRef = doc(FIRESTORE_DB, 'exercises', exerciceId);
          const documentSnapshot = await getDoc(documentRef);
          console.log('documentSnapshot');
          console.log(documentSnapshot.exists());

          if (documentSnapshot.exists()) {
            const documentData = documentSnapshot.data();
            return documentData;
          } else {
            return null;
          }
        } catch (error) {
          console.error('Une erreur s\'est produite lors de la récupération du document :', error);
        }
    }

    useEffect(() => {
        exercices.forEach(exercice => {
            const data = getExerciceById(exercice);
            console.log(data);
         });
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