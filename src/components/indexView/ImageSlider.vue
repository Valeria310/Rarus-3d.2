<template>
    <div
        @touchstart="touchHandler"
        @touchmove="moveHandler"
        @touchend="endHandler"
        class="absolute top-0 bottom-0 left-0 right-0"
    >
        <Transition name="fade">
            <div
                class="absolute top-0 bottom-0 left-0 right-0"
                v-show="theme === 'dark'"
            >
                <img
                    v-for="(img, i) in images.dark"
                    :src="img"
                    :key="`dark${i}`"
                    class="slide__img absolute h-full w-full object-cover"
                    :class="{
                        invisible: i !== imageIndex,
                        rounded: store.isMenuOpen,
                    }"
                    alt=""
                />
                <div
                    class="last-slide fixed dark"
                    :class="{ visible: isLastSlide }"
                >
                    <div class="slide__inner flex flex-col">
                        <div class="slide-info__wrapper">
                            <div class="title__wrapper">
                                <h3
                                    v-for="(title, i) in ProductsInfo[
                                        props.pageNum
                                    ].title"
                                    :key="i"
                                    class="slide__title text-[#FFF]"
                                >
                                    {{ title }}
                                </h3>
                            </div>
                            <div class="text__wrapper flex flex-col mt-4 gap-2">
                                <p
                                    v-for="(text, i) in ProductsInfo[
                                        props.pageNum
                                    ].text"
                                    :key="i"
                                    class="slide__text text-[#FFF]"
                                >
                                    {{ text }}
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://t.me/stsh42/72"
                            class="slide__link flex dark-gray-text"
                            >узнать больше
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.28668 5.90595C7.50857 6.2296 5.95342 6.89946 3.62126 7.91555C3.24256 8.06615 3.04417 8.21348 3.02611 8.35754C2.99559 8.601 3.30047 8.69687 3.71565 8.82741C3.77212 8.84517 3.83064 8.86357 3.89062 8.88307C4.29909 9.01585 4.84855 9.17118 5.13419 9.17735C5.3933 9.18295 5.68249 9.07613 6.00176 8.85689C8.18077 7.386 9.30559 6.64254 9.37621 6.62651C9.42603 6.6152 9.49507 6.60099 9.54184 6.64256C9.58862 6.68414 9.58402 6.76288 9.57907 6.784C9.54886 6.91276 8.35208 8.0254 7.73275 8.60119C7.53967 8.78069 7.40272 8.90801 7.37472 8.93709C7.312 9.00223 7.24809 9.06385 7.18665 9.12307C6.80718 9.48889 6.52261 9.76321 7.20241 10.2112C7.52909 10.4265 7.79051 10.6045 8.05131 10.7821C8.33612 10.9761 8.62019 11.1695 8.98774 11.4104C9.08139 11.4718 9.17082 11.5356 9.25793 11.5977C9.58938 11.834 9.88717 12.0463 10.2551 12.0124C10.4688 11.9928 10.6896 11.7917 10.8018 11.1922C11.0668 9.77543 11.5878 6.70564 11.7081 5.44065C11.7187 5.32982 11.7054 5.18798 11.6948 5.12572C11.6841 5.06345 11.6618 4.97474 11.5809 4.90907C11.4851 4.83129 11.3371 4.81489 11.2709 4.81606C10.97 4.82136 10.5084 4.98188 8.28668 5.90595Z"
                                    fill="#9a9fa5"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </Transition>
        <Transition name="fade">
            <div
                class="absolute top-0 bottom-0 left-0 right-0"
                v-show="theme === 'light'"
            >
                <img
                    v-for="(img, i) in images.light"
                    :src="img"
                    :key="`dark${i}`"
                    class="slide__img absolute h-full w-full object-cover"
                    :class="{
                        invisible: i !== imageIndex,
                        rounded: store.isMenuOpen,
                    }"
                    alt=""
                />
                <div
                    class="last-slide fixed light"
                    :class="{ visible: isLastSlide }"
                >
                    <div class="slide__inner flex flex-col">
                        <div class="slide-info__wrapper">
                            <div class="title__wrapper">
                                <h3
                                    v-for="(title, i) in ProductsInfo[
                                        props.pageNum
                                    ].title"
                                    :key="i"
                                    class="slide__title"
                                >
                                    {{ title }}
                                </h3>
                            </div>
                            <div class="text__wrapper flex flex-col mt-4 gap-2">
                                <p
                                    v-for="(text, i) in ProductsInfo[
                                        props.pageNum
                                    ].text"
                                    :key="i"
                                    class="slide__text"
                                >
                                    {{ text }}
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://t.me/stsh42/72"
                            class="slide__link flex light-gray-text"
                            >узнать больше
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.28668 5.90595C7.50857 6.2296 5.95342 6.89946 3.62126 7.91555C3.24256 8.06615 3.04417 8.21348 3.02611 8.35754C2.99559 8.601 3.30047 8.69687 3.71565 8.82741C3.77212 8.84517 3.83064 8.86357 3.89062 8.88307C4.29909 9.01585 4.84855 9.17118 5.13419 9.17735C5.3933 9.18295 5.68249 9.07613 6.00176 8.85689C8.18077 7.386 9.30559 6.64254 9.37621 6.62651C9.42603 6.6152 9.49507 6.60099 9.54184 6.64256C9.58862 6.68414 9.58402 6.76288 9.57907 6.784C9.54886 6.91276 8.35208 8.0254 7.73275 8.60119C7.53967 8.78069 7.40272 8.90801 7.37472 8.93709C7.312 9.00223 7.24809 9.06385 7.18665 9.12307C6.80718 9.48889 6.52261 9.76321 7.20241 10.2112C7.52909 10.4265 7.79051 10.6045 8.05131 10.7821C8.33612 10.9761 8.62019 11.1695 8.98774 11.4104C9.08139 11.4718 9.17082 11.5356 9.25793 11.5977C9.58938 11.834 9.88717 12.0463 10.2551 12.0124C10.4688 11.9928 10.6896 11.7917 10.8018 11.1922C11.0668 9.77543 11.5878 6.70564 11.7081 5.44065C11.7187 5.32982 11.7054 5.18798 11.6948 5.12572C11.6841 5.06345 11.6618 4.97474 11.5809 4.90907C11.4851 4.83129 11.3371 4.81489 11.2709 4.81606C10.97 4.82136 10.5084 4.98188 8.28668 5.90595Z"
                                    fill="#5b5f65"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </Transition>
        <div class="relative w-full dividingStrip"></div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/index';
import { storeToRefs } from 'pinia';
import { ref, watch, type PropType } from 'vue';
import { ProductsInfo } from '@/productsInfo';

const props = defineProps({
    nextSlideTrigger: {
        type: Number,
        required: true,
    },
    images: {
        type: Object as PropType<{ dark: string[]; light: string[] }>,
        required: true,
    },
    imageCount: {
        type: Number,
        required: true,
    },
    pageNum: {
        type: Number,
        required: true,
    },
    isLastSlide: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits<{
    (e: 'changeIsLastSlide', isLastSlide: boolean): void;
    (e: 'changeIsFirstSlide', isFirstSlide: boolean): void;
}>();

const store = useStore();

const { theme } = storeToRefs(store);

const imageIndex = ref(0);

const viewWidth = document.body.clientWidth;

const slideNum = ref(0);

const touchStartX = ref(0);

let touchStartY = 0;

let isTouch = false;

let moveTimer: ReturnType<typeof setTimeout> | undefined;

const isHorizontalMoving = ref<boolean | undefined>();

const isMoving = ref(false);

const lastImageIndex = props.imageCount - 1;

let needToStopScroll = false;

function touchHandler(e: TouchEvent) {
    if (isMoving.value) return;
    isMoving.value = true;
    if (moveTimer) clearTimeout(moveTimer);
    isTouch = true;
    touchStartX.value = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}

function moveHandler(e: TouchEvent) {
    if (isHorizontalMoving.value === false) return;
    if (needToStopScroll) return;
    if (isHorizontalMoving.value === undefined) {
        const diffX = touchStartX.value - e.touches[0].clientX;
        const diffY = touchStartY - e.touches[0].clientY;
        if (Math.abs(diffY) > Math.abs(diffX)) {
            if (diffX < 1) return;
            isHorizontalMoving.value = false;
            return;
        }
        isHorizontalMoving.value = true;
    }
    store.changeDirection(
        touchStartX.value > e.touches[0].clientX ? 'right' : 'left',
        props.pageNum
    );
    if (props.isLastSlide && store.direction[props.pageNum] === 'left') {
        emit('changeIsLastSlide', false);
        needToStopScroll = true;
        setTimeout(() => {
            needToStopScroll = false;
        }, 300);
    } else if (!props.isLastSlide) {
        const progress = (touchStartX.value - e.touches[0].clientX) / viewWidth;
        const index = Math.round((progress + slideNum.value) * 24);
        if (index < 0) {
            imageIndex.value = 0;
        } else if (index > lastImageIndex) {
            imageIndex.value = lastImageIndex;
        } else {
            imageIndex.value = index;
        }
    }
}

function move(delay: number, index: number, increment: number) {
    const shouldStop =
        isTouch ||
        imageIndex.value === lastImageIndex ||
        imageIndex.value === 0;
    if (shouldStop) {
        isMoving.value = false;
        return;
    }
    imageIndex.value += increment;
    if (imageIndex.value !== index) {
        moveTimer = setTimeout(() => {
            move(delay, index, increment);
        }, delay);
    } else {
        setTimeout(() => {
            isMoving.value = false;
            emit('changeIsFirstSlide', imageIndex.value === 0);
        }, 100);
    }
}

function endHandler() {
    isTouch = false;
    if (isHorizontalMoving.value === false) {
        isHorizontalMoving.value = undefined;
        isMoving.value = false;
        return;
    }
    isHorizontalMoving.value = undefined;
    const increment = store.direction[props.pageNum] === 'right' ? 1 : -1;
    const targetSlideNum = slideNum.value + increment;
    const targetIndex = targetSlideNum * 24;
    const doNoNeedToMoveFurther =
        targetIndex > lastImageIndex ||
        targetIndex < 0 ||
        imageIndex.value === lastImageIndex ||
        imageIndex.value === 0;
    if (doNoNeedToMoveFurther) {
        if (
            imageIndex.value === lastImageIndex &&
            store.direction[props.pageNum] === 'right'
        ) {
            emit('changeIsLastSlide', true);
        }
        isMoving.value = false;
        return;
    }
    move(300 / 24, targetIndex, increment);
    slideNum.value = targetSlideNum;
}

watch(
    () => props.nextSlideTrigger,
    () => {
        if (
            imageIndex.value === 0 &&
            store.direction[props.pageNum] === 'right'
        ) {
            emit('changeIsFirstSlide', false);
            imageIndex.value += 1;
            endHandler();
        } else if (props.isLastSlide) {
            emit('changeIsLastSlide', false);
        } else if (
            imageIndex.value === lastImageIndex &&
            store.direction[props.pageNum] === 'right'
        ) {
            emit('changeIsLastSlide', true);
        } else {
            if (store.direction === 'right') {
                imageIndex.value += 1;
            } else {
                imageIndex.value -= 1;
            }
            endHandler();
        }
    }
);
</script>
<style lang="postcss">
.dividingStrip {
    height: 20px;
    margin-top: -20px;
    background-color: #000;
}

.last-slide {
    width: calc(100vw - 64px);
    height: calc(100% - 226px);
    right: -90%;
    top: 120px;
    bottom: 106px;
    transition: all 0.3s;
    border-radius: 32px;
    -webkit-backdrop-filter: blur(6.5px);
    backdrop-filter: blur(6.5px);
    padding: 46px 30px 34px;
    margin: auto;

    &.light {
        border: 1px solid #e5e5e5;
        background: rgba(200, 200, 200, 0.85);
    }

    &.dark {
        border: 1px solid #191919;
        background: rgba(19, 19, 19, 0.9);
    }

    &.visible {
        right: 0;
        position: relative;
    }
}

.slide {
    &__inner {
        height: 100%;
        justify-content: space-between;
    }

    &__title {
        font-family: Gilroy;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 125%;
    }

    &__text {
        font-family: Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 126%;
    }

    &__link {
        font-family: Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
        gap: 10px;
        align-self: flex-end;
    }

    &__img {
        transition: left, border-radius 0.3s;

        &.rounded {
            border-radius: 32px 0 0 32px;
        }
    }
}
</style>
