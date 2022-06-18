<template>
    <AnimeCard v-if="store.anime" />
    <Loading v-model:active="store.isLoading" :is-full-page="true"/>
</template>

<script setup lang="ts">
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import AnimeCard from '../components/AnimeCard.vue';
import { useAnime } from '../composables/useAnime';
import { useAnimeStore } from '../stores/anime';
import { useGuess } from '../composables/useGuess';

const store = useAnimeStore();
const { getNextRandomAnime } = useAnime();
getNextRandomAnime();

</script>
