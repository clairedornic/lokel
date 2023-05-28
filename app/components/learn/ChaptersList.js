import { FlatList, StyleSheet, SafeAreaView } from "react-native";

import LessonsList from './LessonsList';

const ChaptersList = ({ chapters }) => {

    const renderItem = ({ item }) => <LessonsList chapter={item} />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={chapters}
                renderItem={renderItem}
                keyExtractor={chapter => chapter.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default ChaptersList;