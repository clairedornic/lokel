import React, {useContext} from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet } from "react-native";
import { Divider, Text, Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_APP } from '../config/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LogInContext } from '../contexts/LogInContext'
import { getUserById } from '../api/getUserById';
import theme from '../../theme-design';

const LoginScreen = () => {
    const { setIsUserLoggedIn, setCurrentLessonUser, setUserLoggedInId, setCurrentStateLessonUser, currentStateLessonUser } = useContext(LogInContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const auth = getAuth(FIREBASE_APP);
    const navigation = useNavigation();


    const handleGetUserInformations = async (userId) => {
        const userInfos = await getUserById(userId);
        setCurrentLessonUser(userInfos.current_lesson);
        setCurrentStateLessonUser(userInfos.status_current_lesson);
    };

    const handleLogin = async () => {

        signInWithEmailAndPassword(auth, email, password)
        .then(userCredidentials => {
            const user = userCredidentials.user;

            setUserLoggedInId(user.uid);
            handleGetUserInformations(user.uid);
            
            setIsUserLoggedIn(true);
        })
        .catch(err => {
            console.log(err);
            alert("Un problème est survenu");
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Connectez-vous !</Text>
                <Divider style={styles.divider}></Divider>
                <Text style={styles.subtitle}>Vous n’avez pas de compte ?</Text>
                <Button labelStyle={styles.subtitleButton} onPress={() => {
                    navigation.navigate('RegisterScreen');
                }}>Inscrivez-vous !</Button>
            </View>
            <View style={styles.containerForm}>
                <View style={styles.inputContainer}>
                    <TextInput
                        mode="flat"
                        label="Votre adresse email"
                        placeholder="exemple@gmail.com"
                        value={email}
                        onChangeText={email => setEmail(email)}
                        underlineColor='#FFFFFF00'
                        style={styles.input}
                        underlineStyle={styles.inputBorder}
                        contentStyle={styles.inputContent}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        mode="flat"
                        label="Votre mot de passe"
                        placeholder="********"
                        secureTextEntry={true}
                        autoCorrect={false}
                        value={password}
                        onChangeText={password => setPassword(password)}
                        underlineColor='#FFFFFF00'
                        style={styles.input}
                        underlineStyle={styles.inputBorder}
                        contentStyle={styles.inputContent}
                    />
                </View>
                <View style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordContent}>Mot de passe oublié ?</Text>
                </View>
            </View>
            <Button 
                mode="contained"
                buttonColor={theme.colors.violet}
                textColor={theme.colors.white}
                labelStyle={styles.labelButton}
                style={styles.button}
                onPress={handleLogin}>
                    Se connecter
            </Button>
            <View style={styles.containerDivider}>
                <Text>Ou</Text>
            </View>
            <View>
                <Button 
                labelStyle={styles.labelGoogleButton}
                style={styles.buttonGoogle}
                icon={() => (
                    <Image
                    source={require('../assets/img/google.png')}
                    style={{ width: 21, height: 22}}
                    />
                )}
                mode="contained" 
                onPress={() => console.log('Pressed')}>
                Se connecter avec Google
                </Button>
            </View>
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
	},
    containerTitle: {
        display: 'flex',
		flexDirection: 'column',
        alignItems: 'center',
        width: '75%',
    },
    containerForm: {
        width: theme.size.full,
        display: 'flex',
		flexDirection: 'column',
        paddingTop: 50,
    },
    containerDivider: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: theme.size.full,
        paddingHorizontal: 15,
        marginBottom: 28,
    },
    inputContainer: {
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        overflow: 'hidden',
    },
    forgotPasswordContent: {
        display: 'flex',
        textAlign: 'right',
        fontSize: 14,
        color: theme.colors.black,
        textDecorationLine: 'underline',
        letterSpacing: 0.2,
        marginVertical: 0
    },
    title: {
        fontFamily: 'Husansans-Medium',
        fontSize: 25,
        paddingBottom: 18,
        color: theme.colors.black,
    },
    subtitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        paddingTop: 8,
        textAlign: 'center',
        letterSpacing: 0.2,
        color: theme.colors.black,
    },
    subtitleButton : {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: theme.colors.violet,
        textAlign: 'center',
        textDecorationLine: 'underline',
        letterSpacing: 0.2,
        marginVertical: 0
    },
    divider: {
        display: 'flex',
        backgroundColor: theme.colors.gray, 
        width: theme.size.full,
        borderWidth: 0.4
    },
    input: {
        color: theme.colors.gray,
        fontFamily: 'Poppins-Light',
        fontSize: 16,
        letterSpacing: 0.2,
        backgroundColor: theme.colors.white,
        marginBottom: 16,
        borderColor: '#FFFFFF00',
    },
    inputBorder: {
        borderColor: '#FFFFFF00',
        borderRadius: theme.radius.small,
        borderWidth: 0,
    },
    inputContent: {
        backgroundColor: theme.colors.lila,
        borderRadius: theme.radius.small,
        borderColor: '#FFFFFF00',
        color: theme.colors.black,
        borderWidth: 0,
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
    labelGoogleButton: {
        color: theme.colors.black,
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        paddingVertical: 6,
        paddingLeft: 8
    },
    buttonGoogle: {
        borderRadius: 50,
        marginHorizontal: 15,
        backgroundColor: theme.colors.transparent,
        borderColor: theme.colors.lightGray,
        borderWidth: 1,
        width: theme.size.full
    }
});

export default LoginScreen;