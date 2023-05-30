import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, Button } from 'react-native-paper';
import Sign from '../general/Sign'
import theme from '../../../theme-design';

const SignLesson = ({sign, handleSignPress}) => {

    return (
        <TouchableOpacity onPress={() => handleSignPress(sign.name)}>
            <Sign width={137} height={137} link={sign.url}></Sign>
        </TouchableOpacity>
    )
}

export default SignLesson;