import { useAnimeStore } from "../stores/anime"
import { AnimeResponse } from "@/interfaces/anime";
import axios from "axios";


export const useAnime = () => {

    const getNextRandomAnime = async () => {
        const store = useAnimeStore();
        const { setLoader, resetGame, setAnime, stopTimer, startTimer } = store;
        stopTimer();
        resetGame();

        setLoader(true);

        try {
            
            const { data:body } = await axios.get<AnimeResponse>('https://api.jikan.moe/v4/random/anime');
            setAnime(body.data);
            
        } catch (error) {
            console.error(error);
        } finally {
            setLoader(false);
            startTimer();
        }
    }

    return {
        /// Methods
        getNextRandomAnime
    }
}