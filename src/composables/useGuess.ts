import { Anime } from "@/interfaces/anime";
import { computed } from "vue";

export const useGuess = (anime:Anime) => {
    const animeTitle = computed(() => {
        if (!anime) return [];
        return Array.from(anime.title).map(a => {
            if (a.trim() !== "") return '_';
            return a;
        })
    })

    return {
        animeTitle
    }
}