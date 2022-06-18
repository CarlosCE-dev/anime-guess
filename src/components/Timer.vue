<template>
    <div class="ml-auto timer">
        <span v-if="timer.minutes !== 0">
            {{ timer.minutes }}:
        </span>
        {{ timer.seconds }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAnimeStore } from '../stores/anime';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const store = useAnimeStore();

        const { timer } = storeToRefs(store);

        return {
            timer,
        }        
    }
});
</script>

<style scoped>
.timer {
    font-size: 48px;
    color: "gray";
}
</style>