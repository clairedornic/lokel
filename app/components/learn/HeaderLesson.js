import { View, Image, StyleSheet } from "react-native";
import { Divider, Text } from 'react-native-paper';
import theme from '../../../theme-design';

const HeaderLesson = ({lesson}) => {
    return (
        <>
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
    </>
    )
}

const styles = StyleSheet.create({
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
});

export default HeaderLesson;