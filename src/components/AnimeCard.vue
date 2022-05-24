<template>
    <div class="card m-5" style="width: 500px;" v-if="item">
        <img :src="item.images.jpg.large_image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title anime__title">
                <span v-for="(item, index) in animeTitle" :key="index">
                {{ getText(item) }}</span>
            </h5>
            <div class="d-flex justify-content-end">
                <Timer :timer="timer"/>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { Anime } from '../interfaces/anime';
import { useGuess } from '../composables/useGuess';

// Components
import Footer from './Footer.vue';
import Timer from './Timer.vue';
import { TextCharacter } from '../model/textCharacter';

const { item } = defineProps<{
    item: Anime
}>();

const { animeTitle, timer } = useGuess();

// in component
const getText = (item:TextCharacter) => {
    if (item.isBlankSpace) {
        return " ";
    } else if (item.hidden) {
        return "_";
    } else {
        return item.text;
    }
}

</script>

<style scoped>
.anime__title {
    letter-spacing: 6px;
    font-size: 2rem;
}
</style>