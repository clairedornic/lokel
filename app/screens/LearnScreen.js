import { useState, useEffect } from 'react';
import { getChapters } from '../api/getChapters';
import ChaptersList from '../components/learn/ChaptersList';

const LearnScreen = ({ navigation }) => {
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        const fetchChapters = async () => {
            try {
                const newChapters = await getChapters();
                newChapters.forEach((chapter) => {
                    let newChapter = {
                        id: chapter.id,
                        data: chapter.data()
                    }
                    setChapters((currentChapters) => [...currentChapters, newChapter]);
                });
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des chapitres :', error);
            }
        };
    
        fetchChapters();    
    }, []);

    return (

        <ChaptersList chapters={chapters} navigation={navigation}></ChaptersList>
    )
}

export default LearnScreen;