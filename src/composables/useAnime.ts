import { useAnimeStore } from "../stores/anime"
import { storeToRefs } from "pinia";
import { AnimeResponse } from "@/interfaces/anime";
import axios from "axios";


export const useAnime = () => {
    const store = useAnimeStore(),
        { anime, isLoading } = storeToRefs(store);

    const getNextRandomAnime = async () => {
        const store = useAnimeStore();
        store.setLoader(true);
        try {
            
            const { data:body } = await axios.get<AnimeResponse>('https://api.jikan.moe/v4/random/anime');
            
            store.setAnime(body.data);
            
        } catch (error) {
            console.error(error);
        } finally {
            store.setLoader(false);
        }
    }

    return {
        anime,
        isLoading,
        /// Methods
        getNextRandomAnime
    }
}