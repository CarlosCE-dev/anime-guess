<template>
    <div class="ml-auto timer">
        <span v-if="timer.minutes.value !== 0">{{ timer.minutes }}:</span>{{ timer.seconds }}
    </div>
</template>

<script setup lang="ts">
import { UseTimer } from 'vue-timer-hook';

const { timer } = defineProps<{
    timer: UseTimer
}>();
</script>

<style scoped>
.timer {
    font-size: 48px;
    color: "gray";
}
</style>