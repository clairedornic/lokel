import React from 'react';
import { useState } from 'react';
import { View, Image } from "react-native";
import { Divider, Text, Button, TextInput, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_APP } from '../config/firebase'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({route}) => {
    const { handleUpdateLoggedInState } = route.params;

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
            console.log('User added to the DB')
            const user = userCredidentials.user;
            sendEmailVerification(auth.currentUser)

            .then(() => {
                console.log('Verification Email send')
            })
            .catch(err => {
                console.log('Email Verification');
                console.log(err);
                alert("Un problème est survenu : " + err)
            })
            .then(() => {
                const currentUser = auth.currentUser;

                setDoc( doc( db, 'users', currentUser.uid ), {
                    email: currentUser.email,
                    lastName: lastName,
                    firstName: firstName,
                })

                handleUpdateLoggedInState(true);
                navigation.navigate('HomeScreen');
            })
            .catch(err => {
                console.log('Error to add profil info');
                console.log(err);
                alert("Un problème est survenu : " + err);
            })
        })
        .catch(err => {
            console.log(err);
            alert("Un problème est survenu au moment de l'incription");
        });
    }

    return (
        <View>
        <View>
            <Text>Bienvenue !</Text>
            <Divider></Divider>
            <Text>Vous avez déjà un compte ?</Text>
            <Button onPress={() => {
                navigation.navigate('LoginScreen');
            }}>Connectez-vous !</Button>
        </View>
        <View>
            <View>
                <TextInput
                    mode="outlined"
                    label="Votre prénom"
                    placeholder="Catherine"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                />
            </View>
            <View>
                <TextInput
                    mode="outlined"
                    label="Votre nom"
                    placeholder="Le Roux"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                />
            </View>
            <View>
                <TextInput
                    mode="outlined"
                    label="Votre adresse email"
                    placeholder="exemple@gmail.com"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                </View>
            <View>
                <TextInput
                    mode="outlined"
                    label="Votre mot de passe"
                    placeholder="********"
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <View>
                <Checkbox
                    status={conditionsChecked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setConditionsChecked(!conditionsChecked);
                    }}
                />
                <Text>J'accepte les Termes & Conditions et la Politique de confidentialité</Text>
            </View>
        </View>
        <Button onPress={handleRegister}>S'inscrire</Button>
    </View>
    )
}

export default RegisterScreen;