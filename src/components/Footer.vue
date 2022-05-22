<template>
    <div class="card-footer">
        <button class="btn btn-primary"
            @click="getNextRandomAnime">
            Next
        </button>
    </div>
</template>

<script setup lang="ts">
import { useAnime } from '../composables/useAnime';
const { getNextRandomAnime } = useAnime();
</script>

<style lang="scss" scoped>

</style>