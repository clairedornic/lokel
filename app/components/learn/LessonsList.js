import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Text } from 'react-native-paper';
import { getLessonById } from '../../api/getLessonById';
import LessonItem from './LessonItem';

const LessonsList = ({ chapter, navigation }) => {

    const [lessons, setLessons] = useState([]);
    const renderItem = ({ item }) => <LessonItem lesson={item} navigation={navigation}/>;

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