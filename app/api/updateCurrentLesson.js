import { doc, collection, getDoc, getDocs, updateDoc, query, where } from 'firebase/firestore';
import { FIRESTORE_DB } from '../config/firebase'

export async function updateCurrentLesson(userId, currentLesson, currentLessonState) {

    try {
      const documentRef = doc(FIRESTORE_DB, 'users', userId);
      const documentSnapshot = await getDoc(documentRef);

      if (documentSnapshot.exists()) {
        if (currentLessonState === 2) {
          await updateDoc(documentRef, {
              status_current_lesson: 2,
          });

          return { status: 2, currentLesson: null };
          
        } else {
          const collectionLessons = collection(FIRESTORE_DB, 'lessons');
          const queryLessonByNumber = query(collectionLessons, where("number", "==", currentLesson.number + 1));
          
          const nextLessonPromise = new Promise(async (resolve, reject) => {
            try {
              const lessonsRef = await getDocs(queryLessonByNumber);
              const nextLesson = [];
  
              lessonsRef.forEach(lesson => {
                nextLesson.push({
                  id: lesson.id, 
                  ...lesson.data()
                });
              });
  
              await updateDoc(documentRef, {
                current_lesson: nextLesson[0].id,
                status_current_lesson: 1,
              });
  
              resolve(nextLesson);
            } catch (error) {
              reject(error);
            }
          });
    
          return { status: 1, currentLesson: await nextLessonPromise.then(nextLesson => nextLesson[0].id) };
        }
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération du document :', error);
    }
}