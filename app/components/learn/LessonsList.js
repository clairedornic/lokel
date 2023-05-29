import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView, View } from "react-native";
import { Text } from 'react-native-paper';
import { getLessonById } from '../../api/getLessonById';
import LessonItem from './LessonItem';
import theme from '../../../theme-design';

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
      <>
        <View style={styles.chapterHeader}>
          <Text style={styles.chapterTitle}>{chapter.data.title}</Text>
          <Text style={styles.lessonsCount}>{lessons.length} leçons</Text>
        </View>
        <SafeAreaView style={styles.container}>
            <FlatList
                data={lessons}
                renderItem={renderItem}
                keyExtractor={lesson => lesson.number}
                style={styles.lessonsList}
            />
        </SafeAreaView>
      </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chapterHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chapterTitle: {
    fontFamily: 'Husansans-Bold',
    fontSize: 25,
    color: theme.colors.black,
  },
  lessonsCount: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: theme.colors.black,
  },
  lessonsList: {
    alignItems: 'baseline',
  }
});

export default LessonsList;