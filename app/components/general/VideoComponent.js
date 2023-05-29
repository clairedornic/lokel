import { useState, useRef,useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import theme from '../../../theme-design';

const VideoComponent = ({link, width, height}) => {
    const videoRef = useRef(null);
    const [status, setStatus] = useState({});

    useEffect(() => {
        (async () => {
            if (videoRef.current) {
                await videoRef.current.loadAsync();
                await videoRef.current.playAsync();
            }
        })();
    }, []);

    return (
      <View style={styles.container}>
        {/* TO FIX :  DISPLAY VIDEO CORRECTLY*/}
        <Video
          ref={videoRef}
          style={styles.video}
          source={{
            uri: link,
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping={true}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    video: {
      alignSelf: 'center',
      width: 35,
      height: 35,
      borderRadius: 14

    },
});

export default VideoComponent;