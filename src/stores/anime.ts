import { Anime } from '@/interfaces/anime'
import { defineStore } from 'pinia'


interface mainStore {
    anime?: Anime,
    isLoading: boolean
}

const INITIAL_STATE: mainStore = {
    anime: undefined,
    isLoading: false
}

export const useAnimeStore = defineStore('main', {
    state: () => INITIAL_STATE,
    actions: {
        setAnime( anime:Anime ) {
            this.anime = anime;
        },
        setLoader(state:boolean) {
            this.isLoading = state;
        }
    },
})