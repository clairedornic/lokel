import { StyleSheet, View, Image, TouchableHighlight, Alert } from "react-native";
import { Text } from 'react-native-paper';
import theme from '../../../../theme-design';

const CurrentLesson = ({lesson, navigation, isUnavailable}) => {

    const handlePress = () => {
        if (isUnavailable) {
            Alert.alert("La leçon est indisponible");
        } else {
            navigation.navigate('LessonScreen', {
                lesson: lesson,
            });
        }
    };

    return (
        <View style={styles.cardContainer}>
            <Image 
                style={styles.illu}
                source={require('../../../assets/img/lesson-current.png')}
            ></Image>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.numberLesson}>Leçon {lesson.number}</Text>
                    <Text style={styles.titleLesson}>{lesson.title}</Text>
                </View>
                <View style={styles.link}>
                    <TouchableHighlight 
                        style={styles.iconContainer}
                        onPress={handlePress}
                    >
                        <Image 
                        style={styles.icon}
                        source={require('../../../assets/img/play.png')}
                        ></Image>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        minWidth: 258,
        paddingTop: 15,
    },
    illu: {
        display: 'flex',
        alignSelf: 'flex-end',
        height: 55,
        width: 65,
        resizeMode: 'contain',
        marginRight: 25
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 17,
      paddingVertical: 15,
      backgroundColor: theme.colors.lila,
      borderRadius: 14,
      elevation: 2,
      shadowColor: '#000000',
    },
    cardContent: {
        flexDirection: 'column',
        paddingRight: 30
    },
    link:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.violet,
        height: 45,
        width: 45,
        borderRadius: 100
    },
    numberLesson: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: theme.colors.black,
        paddingBottom: 0
    },
    titleLesson: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: theme.colors.black,
        maxWidth: 153
    },
    icon:{
        height: 17,
        resizeMode: 'contain',
        marginLeft: 3
    }
});

export default CurrentLesson;