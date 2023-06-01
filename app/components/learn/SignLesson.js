import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, Button } from 'react-native-paper';
import Sign from '../general/Sign'
import theme from '../../../theme-design';

const SignLesson = ({sign, handleSignPress, setStateButton, stateButton}) => {
    const [isActive, setIsActive] = useState(false);

    const handlePress = (signId) => {
        if (stateButton === 'blocked') {
            setIsActive(true);
            setStateButton('active');
            handleSignPress(signId);
        }
    };

    useEffect(() => {
        if (stateButton === 'blocked') {
            setIsActive(false);
        }
    }, [stateButton]);
      
    return (
        <TouchableOpacity onPress={() => handlePress(sign.id)}>
             <View style={[styles.signButton, isActive && styles.activeButton]}>
                <Sign width={137} height={137} link={sign.url} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    signButton: {
        marginBottom: 25,
    },
    activeButton: {
        marginBottom: 25,
        borderRadius: 17,
        borderWidth: 3,
        borderColor: theme.colors.blue,
    },
});

export default SignLesson;