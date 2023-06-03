import { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import { Text, Button } from 'react-native-paper';
import theme from '../../theme-design';

const EndLessonScreen = ({route, navigation}) => {
    
    const { exerciseSuccesses } = route.params;
    const isLessonFailed = exerciseSuccesses.includes(false);

    return(
        <>
            <Text>Fin de leçon</Text>
            {isLessonFailed ? <Text>Bilan de la leçon : raté</Text> : <Text>Bilan de la leçon : réussie</Text>}
        </>
    )
}

export default EndLessonScreen;