import React, {useContext} from 'react';
import { useState } from 'react';
import { View, StyleSheet } from "react-native";
import { Divider, Text, Button, TextInput, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_APP } from '../config/firebase'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import theme from '../../theme-design';

const RegisterScreen = () => {
    const { setIsUserLoggedIn } = useContext(LogInContext);

    const [conditionsChecked, setConditionsChecked] = useState(false);
    const [firstName, setFirstName ] = useState('');
    const [lastName, setLastName ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    
    const auth = getAuth(FIREBASE_APP);
    const db = getFirestore(FIREBASE_APP);
    const navigation = useNavigation();

    const handleRegister = async () => {

        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredidentials => {
            const user = userCredidentials.user;
            sendEmailVerification(auth.currentUser)

            .then(() => {
                console.log('Verification Email send')
            })
            .catch(err => {
                alert("Un problème est survenu : " + err)
            })
            .then(() => {
                const currentUser = auth.currentUser;

                setDoc( doc( db, 'users', currentUser.uid ), {
                    email: currentUser.email,
                    lastName: lastName,
                    firstName: firstName,
                })

                setIsUserLoggedIn(true);
                navigation.navigate('HomeScreen');
            })
            .catch(err => {
                alert("Un problème est survenu : " + err);
            })
        })
        .catch(err => {
            alert("Un problème est survenu au moment de l'incription");
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Bienvenue !</Text>
                <Divider style={styles.divider}></Divider>
                <Text style={styles.subtitle}>Vous avez déjà un compte ?</Text>
                <Button labelStyle={styles.subtitleButton} onPress={() => {
                    navigation.navigate('LoginScreen');
                }}>Connectez-vous !</Button>
            </View>
            <View style={styles.containerForm}>
                <View style={styles.inputContainer}>
                    <TextInput
                        mode="flat"
                        label="Votre prénom"
                        placeholder="Catherine"
                        value={firstName}
                        onChangeText={text => setFirstName(text)}
                        underlineColor='#FFFFFF00'
                        style={styles.input}
                        underlineStyle={styles.inputBorder}
                        contentStyle={styles.inputContent}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        mode="flat"
                        label="Votre nom"
                        placeholder="Le Roux"
                        value={lastName}
                        onChangeText={text => setLastName(text)}
                        underlineColor='#FFFFFF00'
                        style={styles.input}
                        underlineStyle={styles.inputBorder}
                        contentStyle={styles.inputContent}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        mode="flat"
                        label="Votre adresse email"
                        placeholder="exemple@gmail.com"
                        value={email}
                        onChangeText={text => setEmail(text)}
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
                        onChangeText={text => setPassword(text)}
                        underlineColor='#FFFFFF00'
                        style={styles.input}
                        underlineStyle={styles.inputBorder}
                        contentStyle={styles.inputContent}
                    />
                </View>
                <View style={styles.containerCheckbox}>
                    <Checkbox
                        status={conditionsChecked ? 'checked' : 'unchecked'}
                        color={theme.colors.violet}
                        uncheckedColor={theme.colors.violet}
                        onPress={() => {
                            setConditionsChecked(!conditionsChecked);
                        }}
                    />
                    <View style={styles.textWithButtons}>
                        <Text style={styles.textNextToButtons}>J'accepte les </Text>
                        <Button mode="text" labelStyle={styles.subtitleButton} onPress={() => console.log('Pressed')}>
                             Termes & Conditions 
                        </Button> 
                        <Text style={styles.textNextToButtons}> et la </Text>
                        <Button mode="text" labelStyle={styles.subtitleButton} onPress={() => console.log('Pressed')}>
                            Politique de confidentialité
                        </Button>
                    </View>
                </View>
            </View>
            <Button
                mode="contained"
                buttonColor={theme.colors.violet}
                textColor={theme.colors.white}
                labelStyle={styles.labelButton}
                style={styles.button}
                onPress={handleRegister}
            >
                S'inscrire
            </Button>
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
        paddingTop: 30,
    },
    containerDivider: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: theme.size.full,
        paddingHorizontal: 15,
        marginBottom: 28,
    },
    containerCheckbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
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
        paddingBottom: 18
    },
    subtitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        paddingTop: 8,
        textAlign: 'center',
        letterSpacing: 0.2
    },
    subtitleButton : {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: theme.colors.violet,
        textAlign: 'left',
        textDecorationLine: 'underline',
        letterSpacing: 0.2,
        marginVertical: 0,
        marginHorizontal: 0,
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
        borderRadius: 14,
        borderWidth: 0,
    },
    inputContent: {
        backgroundColor: theme.colors.lila,
        borderRadius: 14,
        borderColor: '#FFFFFF00',
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
    },
    textNextToButtons: {
        fontFamily: 'Poppins-Light',
        textAlign: 'left',
        letterSpacing: 0.2,
        fontSize: 14,
        marginBottom: -5
    },
    textWithButtons : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 15,
    }
});

export default RegisterScreen;