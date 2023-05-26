import React, {useContext} from 'react';
import { View, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Text, Button } from 'react-native-paper';
import { FIREBASE_APP } from '../config/firebase'
import { getAuth, signOut } from "firebase/auth";
import { LogInContext } from '../contexts/LogInContext'
import theme from '../../theme-design';

const ProfilScreen = () => {
    const { setIsUserLoggedIn } = useContext(LogInContext);

    const auth = getAuth(FIREBASE_APP);
    const navigation = useNavigation();

    const handleLogOut = async () => {

        signOut(auth)
        .then(() => {
            setIsUserLoggedIn(false);
        }).catch((error) => {
            alert('Une erreur est survenue au moment de la déconnexion : ' + error);
        });
    }

    return (
        <View style={styles.container}>
           <Button mode="contained"
                buttonColor={theme.colors.violet}
                textColor={theme.colors.white}
                labelStyle={styles.labelButton}
                style={styles.button} 
                onPress={handleLogOut}>Déconnexion</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.size.full,
        paddingHorizontal: 24,
        paddingTop: 30,
    },
    labelButton: {
        color: theme.colors.white,
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        paddingVertical: 6,
        width: theme.size.full,
    },
    button: {
        borderRadius: 50,
        marginTop: 38,
        marginBottom: 28,
        marginHorizontal: 15,
    },
});

export default ProfilScreen;