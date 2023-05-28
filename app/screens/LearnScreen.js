import { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from 'react-native-paper';
import { FIREBASE_APP, FIRESTORE_DB } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore';
import ChaptersList from '../components/learn/ChaptersList';
import theme from '../../theme-design';

const LearnScreen = ({ navigation }) => {
    const [chapters, setChapters] = useState([]);
    
    async function getChapters() {
        try {
            const chaptersCollectionRef = collection(FIRESTORE_DB, 'chapters');
            const querySnapshot = await getDocs(chaptersCollectionRef);
            
            querySnapshot.forEach((chapter) => {
                let newChapter = {
                    id: chapter.id,
                    data: chapter.data()
                }
                setChapters((currentChapters) => [ ...currentChapters, newChapter]);
                
            });
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des leçons :', error);
        }
    }

    useEffect(() => {
        getChapters();
    }, []);

    return (
        <ChaptersList chapters={chapters} navigation={navigation}></ChaptersList>
    )
}

export default LearnScreen;