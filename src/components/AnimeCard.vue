<template>
    <div class="card m-5" style="width: 500px;" v-if="anime">
        <img :src="anime.images.jpg.large_image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title anime__title">
                <span v-for="(anime, index) in animeTitle" :key="index">
                {{ getText(anime) }}</span>
            </h5>
            <div class="d-flex justify-content-end">
                <Timer />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useAnimeStore } from '../stores/anime';
import { storeToRefs } from 'pinia';

import { TextCharacter } from '../model/textCharacter';

import Footer from './Footer.vue';
import Timer from './Timer.vue';

export default defineComponent({
    setup() {
        const store = useAnimeStore();
        const { anime, timer, animeTitle } = storeToRefs(store);
        const getText = (item: TextCharacter) => {
            if (item.isBlankSpace) {
                return " ";
            }
            else if (item.hidden) {
                return "_";
            }
            else {
                return item.text;
            }
        };
        return {
            anime,
            animeTitle,
            timer,
            /// Methods
            getText
        };
    },
    components: { Footer, Timer }
});
</script>

<style scoped>
.anime__title {
    letter-spacing: 6px;
    font-size: 2rem;
}
</style>