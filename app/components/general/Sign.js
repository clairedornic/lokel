import { View, StyleSheet, Image } from 'react-native';
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
      borderRadius: theme.radius.small,
      overflow: "hidden",
    },
    sign: {
      alignSelf: 'center',
      width: 137,
      height: 137,
      borderRadius: theme.radius.small,
    },
});

export default Sign;