<template>
    <div class="w-full h-full bg-[#eaeaea] dark:bg-[#070707]">
        <div class="w-full h-full flex flex-col justify-between">
            <div
                class="absolute top-0 left-0 h-full w-full overflow-y-auto snap-y snap-mandatory flex flex-col no-scroll"
                ref="scrollEl"
                @scroll="handleScroll"
            >
                <div
                    v-for="p in pages"
                    :id="p.toString()"
                    :key="p"
                    class="page__wrapper relative h-full w-full shrink-0 snap-center"
                    :class="{
                        'mt-5': p > 0,
                        'z-[2] bg-[#eaeaea] dark:bg-[#070707]': p === 0,
                        'z-[1]': p !== 0,
                        hiddenPage: store.isMenuOpen,
                    }"
                >
                    <Transition name="fade" mode="out-in" v-show="p === 0">
                        <div class="mainPage absolute left-8">
                            <div class="text-black dark:text-white">
                                {{ $t('mainPage[0]') }}
                            </div>
                            <div
                                :class="{
                                    'light-gray-text': store.theme === 'light',
                                    'dark-gray-text': store.theme === 'dark',
                                }"
                            >
                                {{ $t('mainPage[1]') }}
                            </div>
                            <div class="text-black dark:text-white">
                                {{ $t('mainPage[2]') }}
                            </div>
                        </div>
                    </Transition>
                    <Transition name="fade" mode="out-in" v-show="p !== 0">
                        <div
                            v-if="imagesLoadingStatus.get(p) !== 'loaded'"
                            class="absolute left-0 right-0 top-0 bottom-0 h-1 my-auto mx-8 rounded overflow-hidden bg-[#d5d5d5] dark:bg-[#232222]"
                        >
                            <div
                                class="h-full bg-[#070707] dark:bg-[#eaeaea] transition-[width]"
                                :style="{
                                    width: `${imagesLoadingProgress[p] * 100}%`,
                                }"
                            />
                        </div>
                        <ImageSlider
                            v-else
                            :images="images[p]"
                            :image-count="imageCount[p]"
                            :next-slide-trigger="nextSlideTrigger[p]"
                            :page-num="p"
                            :isLastSlide="isLastSlide[p]"
                            @change-is-last-slide="changeIsLastSlide"
                            @change-is-first-slide="changeIsFirstSlide"
                        />
                    </Transition>
                </div>
            </div>
            <div
                class="logo__wrapper relative flex flex-row justify-between items-center z-[10]"
                :class="{ hiddenPage: store.isMenuOpen }"
                :style="{ 'margin-top': 46 + 'px' }"
            >
                <h1 class="text-xl leading-5 flex gap-1" v-if="locale === 'ru'">
                    <span
                        class="logo-text block"
                        :class="{
                            'light-gray-text': store.theme === 'light',
                            'dark-gray-text': store.theme === 'dark',
                        }"
                    >
                        СТУДИЯ
                    </span>
                    <span class="logo-text text-black dark:text-white">
                        MVP
                    </span>
                </h1>
                <h1 class="text-xl leading-5 flex gap-1" v-else>
                    <span class="logo-text text-black dark:text-white">
                        MVP
                    </span>
                    <span
                        class="logo-text block"
                        :class="{
                            'light-gray-text': store.theme === 'light',
                            'dark-gray-text': store.theme === 'dark',
                        }"
                    >
                        STUDIO
                    </span>
                </h1>
            </div>
            <Transition name="fade">
                <button
                    v-if="imagesLoadingStatus.get(currentPage) === 'loaded'"
                    @click="
                        (nextSlideTrigger[currentPage] = Math.random()),
                            store.changeDirection('left', currentPage)
                    "
                    type="button"
                    class="arrow arrow-left"
                    :class="{
                        inActive: isFirstSlide[currentPage],
                        hiddenPage: store.isMenuOpen,
                    }"
                >
                    <img src="@/assets/icons/arrow-right.svg" alt="" />
                </button>
            </Transition>
            <Transition name="fade">
                <button
                    v-if="imagesLoadingStatus.get(currentPage) === 'loaded'"
                    @click="
                        (nextSlideTrigger[currentPage] = Math.random()),
                            store.changeDirection('right', currentPage)
                    "
                    type="button"
                    class="arrow arrow-right"
                    :class="{
                        inActive: isLastSlide[currentPage],
                        hiddenPage: store.isMenuOpen,
                    }"
                >
                    <img src="@/assets/icons/arrow-right.svg" alt="" />
                </button>
            </Transition>
            <Transition name="fade">
                <button
                    type="button"
                    @click="handleCurrentPage('top')"
                    class="arrow arrow-top"
                    :class="{
                        inActive: currentPage === 0,
                        hiddenPage: store.isMenuOpen,
                    }"
                >
                    <img src="@/assets/icons/arrow-right.svg" alt="" />
                </button>
            </Transition>
            <Transition name="fade">
                <button
                    type="button"
                    @click="handleCurrentPage('bottom')"
                    class="arrow arrow-bottom"
                    :class="{
                        inActive: currentPage === pages.length - 1,
                        hiddenPage: store.isMenuOpen,
                    }"
                >
                    <img src="@/assets/icons/arrow-right.svg" alt="" />
                </button>
            </Transition>
            <Transition name="fade">
                <button
                    type="button"
                    class="McButton z-20"
                    :class="{
                        light: store.theme === 'light',
                        dark: store.theme === 'dark',
                    }"
                    id="hamburger-menu"
                    @click="store.toggleMenuStatus()"
                >
                    <b></b>
                    <b></b>
                </button>
            </Transition>
            <Transition name="fade">
                <div
                    class="lang_btn absolute right-8 bottom-8 z-[12] text-xl font-medium"
                    :class="{
                        'light-gray-text': store.theme === 'light',
                        'dark-gray-text': store.theme === 'dark',
                        hiddenPage: store.isMenuOpen,
                    }"
                    @click="switchLang"
                >
                    {{ $t('lang') }}
                </div>
            </Transition>
            <Transition name="fade">
                <ThemeSwitcher class="absolute left-8 bottom-8" />
            </Transition>
        </div>
    </div>
    <MenuWrapper />
</template>

<script lang="ts" setup>
import ImageSlider from '@/components/indexView/ImageSlider.vue';
import ThemeSwitcher from '@/components/indexView/ThemeSwitcher.vue';
import MenuWrapper from '@/components/MenuWrapper.vue';
import { computed, ref, watch } from 'vue';
import { useStore } from '@/stores/index';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: 'global' });

const store = useStore();

const pages: number[] = [0, 1, 2, 3, 4];

type PageNum = (typeof pages)[number];

const nextSlideTrigger = ref<Record<PageNum, number>>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
});

const currentPage = ref<PageNum>(0);

const imageCount: Record<PageNum, number> = {
    0: 0,
    1: 73,
    2: 145,
    3: 121,
    4: 73,
};

const images = ref<Record<PageNum, { dark: string[]; light: string[] }>>({
    0: {
        dark: [],
        light: [],
    },
    1: {
        dark: [],
        light: [],
    },
    2: {
        dark: [],
        light: [],
    },
    3: {
        dark: [],
        light: [],
    },
    4: {
        dark: [],
        light: [],
    },
});

const imagesLoadingStatus = ref<Map<PageNum, 'loading' | 'loaded'>>(new Map());

const scrollEl = ref<HTMLElement | undefined>();

const isLastSlide = ref<Record<PageNum, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
});

const isFirstSlide = ref<Record<PageNum, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
});

const imagesLoadingProgress = computed(() =>
    pages.reduce((acc, p) => {
        const progress =
            (images.value[p].dark.length + images.value[p].light.length) /
            (imageCount[p] * 2);
        return { ...acc, [p]: progress };
    }, {} as Record<PageNum, number>)
);

async function loadImages(pageNum: PageNum) {
    if (imagesLoadingStatus.value.has(pageNum)) return;
    imagesLoadingStatus.value.set(pageNum, 'loading');
    const promises: Promise<null>[] = [];
    (['dark', 'light'] as const).forEach((type) => {
        new Array(imageCount[pageNum]).fill(null).forEach((v, i) => {
            if (images.value[pageNum][type][i]) return;
            const promise = new Promise<null>((res) => {
                fetch(
                    `/slides/page${pageNum}/medium-less/${type}/${
                        10000 + i
                    }.jpg`
                )
                    .then((response) => response.blob())
                    .then((blob) => {
                        images.value[pageNum][type][i] =
                            URL.createObjectURL(blob);
                        res(null);
                    });
            });
            promises.push(promise);
        });
    });
    await Promise.all(promises);
    imagesLoadingStatus.value.set(pageNum, 'loaded');
}

function handleScroll() {
    const el = scrollEl.value;
    const page0 = document.getElementById('0');
    const page1 = document.getElementById('1');
    const page2 = document.getElementById('2');
    const page3 = document.getElementById('3');
    const page4 = document.getElementById('4');
    const page = currentPage.value;
    if (!el) return;
    switch (Math.round(el.scrollTop)) {
        case page0?.offsetTop:
            currentPage.value = 0;
            break;
        case page1?.offsetTop:
            currentPage.value = 1;
            break;
        case page2?.offsetTop:
            currentPage.value = 2;
            break;
        case page3?.offsetTop:
            currentPage.value = 3;
            break;
        case page4?.offsetTop:
            currentPage.value = 4;
            break;
        default:
            currentPage.value = page;
            break;
    }
}

function handleCurrentPage(direction: 'top' | 'bottom') {
    const el = scrollEl.value;
    if (direction === 'top') {
        currentPage.value =
            currentPage.value === 0 ? currentPage.value : currentPage.value - 1;
    } else {
        currentPage.value =
            currentPage.value === pages.length - 1
                ? currentPage.value
                : currentPage.value + 1;
    }
    el?.scrollTo({
        top: window.innerHeight * currentPage.value,
        behavior: 'smooth',
    });
}

function changeIsLastSlide(res: boolean) {
    isLastSlide.value[currentPage.value] = res;
}

function changeIsFirstSlide(res: boolean) {
    isFirstSlide.value[currentPage.value] = res;
}

function switchLang() {
    locale.value === 'en' ? (locale.value = 'ru') : (locale.value = 'en');
    localStorage.setItem('lang', locale.value);
}

watch(
    currentPage,
    () => {
        loadImages(1);
        loadImages(2);
        if (currentPage.value !== 0) {
            for (let i = currentPage.value + 2; i > 0; i -= 1) {
                if (i < pages.length) {
                    loadImages(i);
                }
            }
        }
    },
    { immediate: true }
);
</script>
<style lang="postcss">
.no-scroll::-webkit-scrollbar {
    display: none;
    appearance: none;
}

.mainPage {
    top: 44.5%;
    font-family: Gilroy;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
}

.logo-text,
.menu__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 15px;
}

.ar-btn {
    font-family: Gilroy;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    transition: all 0.5s;

    &.hiddenPage {
        right: -100%;
    }
}

.arrow {
    position: absolute;
    padding: 16px 10px 16px 16px;
    opacity: 1;
    z-index: 1;
    transition: all 0.5s;

    &-left {
        transform: translateY(-50%) rotate(180deg);
        top: 50%;
        left: 0;

        &.hiddenPage {
            left: 100%;
        }
    }

    &-right {
        transform: translateY(-50%);
        top: 50%;
        right: 0;

        &.hiddenPage {
            right: -100%;
        }
    }

    &-top {
        top: 0;
        left: 50%;
        padding-right: 16px;
        transform: translate(-50%) rotate(270deg);
        z-index: 11;
        transition: all 0.3s;

        &.hiddenPage {
            left: 150%;
        }
    }

    &-bottom {
        bottom: 0;
        left: 50%;
        padding-right: 16px;
        transform: translate(-50%) rotate(90deg);
        z-index: 12;

        &.hiddenPage {
            left: 150%;
        }
    }

    &.inActive {
        z-index: -1;
        opacity: 0;
    }
}

.McButton {
    position: absolute;
    right: 40px;
    top: 47px;
    width: 18px;
    height: 8px;
    cursor: pointer;

    transition: all 0.1s;

    & b {
        position: absolute;
        left: 0;
        width: 18px;
        height: 2px;
        border-radius: 1px;
        transition: all 0.1s;

        &:first-child {
            top: 0;
        }

        &:last-child {
            top: 100%;
        }
    }

    &.light {
        b {
            background-color: #5b5f65;
        }
    }

    &.dark {
        b {
            background-color: #9a9fa5;
        }
    }
}

.page__wrapper {
    transition: all 0.5s;
    left: 0;
    border-radius: 0;

    &.hiddenPage {
        left: calc(100% - 16px);
        border-radius: 32px 0 0 32px;
        pointer-events: none;
    }
}

.logo__wrapper {
    left: 32px;
    transition: all 0.5s;

    &.hiddenPage {
        left: calc(100% + 32px);
    }
}

.lang_btn {
    transition: all 0.5s;
    &.hiddenPage {
        right: calc(-100% - 32px);
    }
}

.light-gray-text {
    color: #5b5f65;
}

.dark-gray-text {
    color: #9a9fa5;
}
</style>
