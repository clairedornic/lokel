import { useState, useRef,useEffect } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import theme from '../../../theme-design';

const Sign = ({link, width, height}) => {
  
    return (
      <View style={styles.container}>
        <Image
          style={styles.sign}
          source={{uri: link}} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      overflow: "hidden",
      marginBottom: 25,
    },
    sign: {
      alignSelf: 'center',
      width: 137,
      height: 137,
      borderRadius: 14,
    },
});

export default Sign;