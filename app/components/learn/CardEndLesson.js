import { View, StyleSheet, Image } from "react-native";
import { Text } from 'react-native-paper';
import theme from '../../../theme-design';

const CardEndLesson = ({isLessonSuccess}) => {

    return(
       <View 
       style={[
            styles.containerCard,
            isLessonSuccess === true && { backgroundColor: theme.colors.lightGreen },
            isLessonSuccess === false && { backgroundColor: theme.colors.lightYellow },
       ]}
    >
        
            <Text style={styles.text}>{isLessonSuccess ? 'Bravo tu as acquis toutes les notions !' : 'Tu as encore des notions à apprendre !'}</Text>
            <View 
            style={[
                styles.containerImage,
                isLessonSuccess === true && { width: 132 },
                isLessonSuccess === false && { width: 90 },
            ]}
            >
                <Image 
                style={[
                    styles.image,
                    isLessonSuccess === true && { height: 183 },
                    isLessonSuccess === false && { height: 147 },
                ]}
                source={isLessonSuccess ? require('../../assets/img/lesson_successful_fellow.png') : require('../../assets/img/lesson_failed_fellow.png')} />
            </View>
       </View> 
    )
}

const styles = StyleSheet.create({
    containerCard: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        marginTop: 50,
        paddingVertical: 25,
        paddingLeft: 18,
        paddingRight: 22,
        width: '100%',
        borderRadius: theme.radius.small
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        color: theme.colors.black,
        textAlign: 'left',
        lineHeight: 28,
        width: '60%',
    },
    containerImage: {
        position: 'absolute',
        bottom: 0,
        right: 22,
    },
    image: {
        resizeMode: 'contain',
        width: '100%'
    }
});

export default CardEndLesson;