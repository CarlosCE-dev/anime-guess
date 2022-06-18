import { Anime } from '@/interfaces/anime'
import { defineStore } from 'pinia'
import { TextCharacter } from '../model/textCharacter';
import { useTimer } from 'vue-timer-hook';
import { ref, watch } from 'vue';

const time = new Date();
    time.setSeconds(time.getSeconds() + 60);

export const useAnimeStore = defineStore('main', () => {
    const anime = ref<Anime>(),
        isLoading = ref(false),
        animeTitle = ref<TextCharacter[]>([]);
    // @ts-ignore
    const timer = ref(useTimer(time));

    const setAnime = (item:Anime) => {
        anime.value = item;
        animeTitle.value = Array.from(item.title.trim()).map(m => new TextCharacter(m));
    }
    
    const setLoader = (state:boolean) => {
        isLoading.value = state;
    }

    const setHint = () => {
        if (animeTitle.value.length === 0) return;
        const items = [...animeTitle.value].filter(x => !x.isBlankSpace && x.hidden),
            index = Math.floor(Math.random() * items.length),
            item = items[index];

        for (let title of animeTitle.value) {
            if (title.id === item.id) {
                title.hidden = false;
                break;
            }
        }
    }
    
    const showAllLetters = () => {
        for (let title of animeTitle.value) {
            title.hidden = false;
        }
    }

    watch(timer.value, (value) => {
        if (timer.value.isExpired) {
            showAllLetters();
            return;
        }
        let number = value.seconds / 5;
        if (Number.isInteger(number)) {
            setHint();
        }
    });
    
    const resetGame = () => {
        timer.value.restart();
    }

    const stopTimer = () => {
        timer.value.pause();
    }

    const startTimer = () => {
        timer.value.start();
    }

    return {
        // State
        anime,
        timer,
        animeTitle,
        isLoading,
        // Methods
        setAnime,
        setLoader,
        setHint,
        resetGame,
        stopTimer,
        startTimer
    }
});
