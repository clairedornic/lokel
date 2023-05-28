import { StyleSheet } from "react-native";
import { Text } from 'react-native-paper';

const LessonItem = ({lesson}) => {
    
    return (
        <>
            <Text>{lesson.title}</Text>
        </>
    )
}

export default LessonItem;