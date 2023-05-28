import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { doc, getDoc, collection } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../config/firebase'
import { Text } from 'react-native-paper';
import LessonItem from './LessonItem';

const LessonsList = ({ chapter }) => {
    console.log('chapter');
    console.log(chapter);

    const [lessons, setLessons] = useState([]);
    const renderItem = ({ item }) => <LessonItem lesson={item} />;

    async function getLessonById(lessonId) {
        try {
          const documentRef = doc(FIRESTORE_DB, 'lessons', lessonId); // Remplacez 'collectionName' par le nom de votre collection
          const documentSnapshot = await getDoc(documentRef);
          
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

    async function getLessons() {
        const newLessons = [];
      
        for (const lessonId of chapter.data.associated_lessons) {
          const lessonData = await getLessonById(lessonId);
      
          if (lessonData !== null) {
            newLessons.push(lessonData);
          }
        }

        setLessons(newLessons);
    }

    useEffect(() => {
        getLessons();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <Text>{chapter.data.title}</Text>
            <FlatList
                data={lessons}
                renderItem={renderItem}
                keyExtractor={lesson => lesson.number}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default LessonsList;