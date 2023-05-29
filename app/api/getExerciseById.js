import { doc, getDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../config/firebase'

export async function getExerciseById(exerciceId) {
    try {
      const documentRef = doc(FIRESTORE_DB, 'exercises', exerciceId);
      const documentSnapshot = await getDoc(documentRef);

      if (documentSnapshot.exists()) {
        const documentData = documentSnapshot.data();
        return documentData;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération du document :', error);
    }
}