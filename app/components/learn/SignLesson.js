import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, Button } from 'react-native-paper';
import VideoComponent from '../general/VideoComponent'
import theme from '../../../theme-design';

const SignLesson = ({sign, handleSignPress}) => {

    return (
        <TouchableOpacity onPress={() => handleSignPress(sign.name)}>
            <VideoComponent width={137} height={137} link={sign.url}></VideoComponent>
        </TouchableOpacity>
    )
}

export default SignLesson;