import { Anime } from '@/interfaces/anime'
import { defineStore } from 'pinia'
import { TextCharacter } from '../model/textCharacter';


interface mainStore {
    anime?: Anime,
    isLoading: boolean,
    animeTitle?: TextCharacter[]
}

const INITIAL_STATE: mainStore = {
    anime: undefined,
    isLoading: false,
    animeTitle: undefined
}

export const useAnimeStore = defineStore('main', {
    state: () => INITIAL_STATE,
    actions: {
        setAnime(anime:Anime) {
            this.anime = anime;
            this.animeTitle = Array.from(anime.title.trim()).map(m => new TextCharacter(m));
        },
        setLoader(state:boolean) {
            this.isLoading = state;
        },
        setHint() {
            if (!this.animeTitle) return;
            const items = [...this.animeTitle].filter(x => !x.isBlankSpace && x.hidden);
            const index = Math.floor(Math.random() * items.length);
            const item = items[index];

            for (let title of this.animeTitle) {
                if (title.id === item.id) {
                    title.hidden = false;
                    break;
                }
            }
        }
    },
})