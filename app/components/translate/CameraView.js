import { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native"
import { Text, Button } from 'react-native-paper';
import { Camera, CameraType } from 'expo-camera';

const CameraView = () => {
    const [camera, setCamera] = useState(null);
    const [type, setType] = useState(CameraType.back);
    
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <View style={{flex:1}}>
            <View style={styles.cameraContainer}>
                    <Camera 
                        ref={ref => setCamera(ref)}
                        type={type}
                        style={{flex: 1}}
                        ratio={'16:9'}
                    >
                <View>
                    <Button 
                        mode="contained"
                        onPress={toggleCameraType}>
                        Flip Camera
                    </Button>
                </View>
                </Camera>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    },
});

export default CameraView;