import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import LessonsList from './LessonsList';

const ChaptersList = ({ chapters, navigation }) => {

    const renderItem = ({ item }) => <LessonsList chapter={item} navigation={navigation}/>;

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
      paddingHorizontal: 15,
      paddingTop: 50
    },
});

export default ChaptersList;