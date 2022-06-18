import { watch } from "vue";
import { useAnimeStore } from "../stores/anime";
import { storeToRefs } from "pinia";

export const useGuess = () => {

    const store = useAnimeStore(),
        { setHint } = store,
        { timer } = storeToRefs(store);
    
    watch(timer.value, (value) => {
        let number = value.seconds / 5;
        if (Number.isInteger(number)) {
            setHint();
        }
    });
}