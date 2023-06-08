import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { Text } from 'react-native-paper';
import theme from '../../../../theme-design';

const BlockedLesson = ({lesson, navigation}) => {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.titleLesson}>{lesson.title}</Text>
                </View>
                <View style={styles.link}>
                    <View style={styles.iconContainer}>
                        <Image 
                        style={styles.icon}
                        source={require('../../../assets/img/blocked.png')}
                        ></Image>
                    </View>
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
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: theme.colors.lightGray,
      borderRadius: 14,
      elevation: 2,
      shadowColor: '#000000',
    },
    cardContent: {
        flexDirection: 'column',
        justifyContent: 'center',
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
        backgroundColor: theme.colors.gray,
        height: 40,
        width: 40,
        borderRadius: 100
    },
    titleLesson: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: theme.colors.gray,
        maxWidth: 153
    },
    icon:{
        height: 16,
        resizeMode: 'contain',
    }
});

export default BlockedLesson;