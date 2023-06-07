import { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native"
import { Button } from 'react-native-paper';
import { Camera, CameraType } from 'expo-camera';

const HomeScreen = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [type, setType] = useState(CameraType.back);
      
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);
      
    if( hasCameraPermission === false ) {
        alert("Nous n'avons pas accès à votre caméra");
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
                    style={styles.button}
                    mode="contained"
                    onPress={toggleCameraType}>Flip Camera</Button>
                </View>
                </Camera>
            </View>
        </View>
    );
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
    button: {
        marginTop: 45,
        marginHorizontal: 45
    }
});

export default HomeScreen;