<template>
    <AnimeCard v-if="anime" :item="anime" />

    <loading v-model:active="isLoading" :is-full-page="true"/>

</template>

<script setup lang="ts">
import AnimeCard from '../components/AnimeCard.vue';
import { useAnime } from '../composables/useAnime';

const { anime, isLoading, getNextRandomAnime } = useAnime();

getNextRandomAnime();

</script>
