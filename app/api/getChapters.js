import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../config/firebase'

export async function getChapters() {
    try {
        const chaptersCollectionRef = collection(FIRESTORE_DB, 'chapters');
        const querySnapshot = await getDocs(chaptersCollectionRef);
        
        console.log('chaptersCollectionRef');
        console.log(chaptersCollectionRef);
        console.log('querySnapshot');
        console.log(querySnapshot);

        if (!querySnapshot.empty) {
            return querySnapshot;
        } else {
            return null;
        }

    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des leçons :', error);
    }
}