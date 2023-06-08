import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { Text } from 'react-native-paper';
import theme from '../../../../theme-design';

const EndLesson = ({lesson, navigation}) => {    
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.titleLesson}>{lesson.title}</Text>
                </View>
                <View style={styles.link}>
                    <TouchableHighlight 
                        style={styles.iconContainer}
                        onPress={() => {
                            navigation.navigate('LessonScreen', {
                                lesson: lesson,
                            });
                        }}
                    >
                        <Image 
                        style={styles.icon}
                        source={require('../../../assets/img/over.png')}
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
        paddingTop: 45,
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 17,
      paddingVertical: 15,
      backgroundColor: theme.colors.lightGreen,
      borderRadius: theme.radius.small,
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
        backgroundColor: theme.colors.green,
        height: 45,
        width: 45,
        borderRadius: theme.radius.full,
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
        marginLeft: 0
    }
});

export default EndLesson;