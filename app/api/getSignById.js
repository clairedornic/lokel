import { doc, getDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../config/firebase'

export async function getSignById(signId) {
    try {
      const documentRef = doc(FIRESTORE_DB, 'signs', signId);
      const documentSnapshot = await getDoc(documentRef);

      if (documentSnapshot.exists()) {
        const documentData = documentSnapshot.data();
        const signDataWithId = { id: documentSnapshot.id, ...documentData };
        return signDataWithId;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération du document :', error);
    }
}