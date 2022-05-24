import { watch } from "vue";
import { useTimer } from 'vue-timer-hook';
import { useAnimeStore } from "../stores/anime";
import { storeToRefs } from "pinia";

export const useGuess = () => {

    const time = new Date();
    const store = useAnimeStore(),
        { setHint } = store,
        { animeTitle } = storeToRefs(store);

    time.setSeconds(time.getSeconds() + 60); // 10 minutes timer
    // @ts-ignore
    const timer = useTimer(time);

    watch(timer.seconds, (value) => {
        let number = value / 5;
        console.log(number);
        if (Number.isInteger(number)) {
            setHint();
        }
    });

    return {
        animeTitle,
        timer
    }
}