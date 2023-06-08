import { StyleSheet, View } from "react-native";
import BlockedLesson from "./states_lessons/BlockedLesson";
import InProgressLesson from "./states_lessons/InProgressLesson";
import EndLesson from "./states_lessons/EndLesson";
import CurrentLesson from "./states_lessons/CurrentLesson";
import theme from '../../../theme-design';

const LessonItem = ({lesson, state, navigation, isRightAligned}) => {

    const containerStyle = isRightAligned ? styles.rightAlignedContainer : styles.cardContainer;
    const isUnavailable = lesson.number > 1;

    switch (state) {
        case 0:
            return (
                <View style={containerStyle}>
                    <BlockedLesson lesson={lesson}/>
                </View>
            );
        case 1:
            return (
                <View style={containerStyle}>
                    <CurrentLesson lesson={lesson} navigation={navigation} isUnavailable={isUnavailable}/>
                </View>
            );
        case 2:
            return (
                <View style={containerStyle}>
                    <InProgressLesson lesson={lesson} navigation={navigation} />
                </View>
            );
        case 3:
            return (
                <View style={containerStyle}>
                    <EndLesson lesson={lesson} navigation={navigation}/>
                </View>
            );
        default:
            return null;
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: theme.size.full,
        paddingLeft: 1,
    },
    rightAlignedContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: theme.size.full,
        paddingLeft: 1,
    },
});

export default LessonItem;