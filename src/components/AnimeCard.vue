<template>
    <div class="card m-5" style="width: 500px;" v-if="item">
        <img :src="item.images.jpg.large_image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title anime__title">
                {{ animeTitle.join("") }}
            </h5>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { Anime } from '../interfaces/anime';
import { useGuess } from '../composables/useGuess';

// Components
import Footer from './Footer.vue';

const { item } = defineProps<{
    item: Anime
}>();

const { animeTitle } = useGuess(item);
</script>

<style scoped>
.anime__title {
    letter-spacing: 6px;
    font-size: 2rem;
}
</style>