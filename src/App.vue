<template>
    <div
        class="w-full h-full relative overflow-hidden"
        :class="{
            dark: theme === 'dark',
        }"
    >
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { RouterView } from "vue-router";
import { useStore } from "./stores/index";

const store = useStore();

const { theme } = storeToRefs(store);
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
    font-family: "Gilroy";
    src: url("assets/fonts/Gilroy-Bold.otf");
    font-display: block;
    font-weight: 700;
}

@font-face {
    font-family: "Gilroy";
    src: url("assets/fonts/Gilroy-SemiBold.otf");
    font-display: block;
    font-weight: 600;
}

@font-face {
    font-family: "Gilroy";
    src: url("assets/fonts/Gilroy-Medium.otf");
    font-display: block;
    font-weight: 500;
}

@font-face {
    font-family: "Gilroy";
    src: url("assets/fonts/Gilroy-Regular.otf");
    font-display: block;
    font-weight: 400;
}

@font-face {
    font-family: "Gilroy";
    src: url("assets/fonts/Gilroy-Light.otf");
    font-display: block;
    font-weight: 300;
}
html,
body,
#app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
html,
body,
button,
input,
textarea {
    font-size: 16px;
    font-family: Gilroy;
    font-weight: normal;
}
input,
textarea,
button,
select,
a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
*,
input::placeholder,
textarea::placeholder {
    transition-property: color, opacity, background-color, box-shadow, fill,
        border-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
