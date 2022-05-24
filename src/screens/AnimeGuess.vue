<template>
    <AnimeCard v-if="anime" :item="anime" />
    <Loading v-model:active="isLoading" :is-full-page="true"/>
</template>

<script setup lang="ts">
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import AnimeCard from '../components/AnimeCard.vue';
import { useAnime } from '../composables/useAnime';

const { anime, isLoading, getNextRandomAnime } = useAnime();

getNextRandomAnime();

</script>
