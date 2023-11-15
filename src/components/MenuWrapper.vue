<template>
    <div
        class="menu__wrapper h-full bg-[#000] dark:bg-[#fff]"
        :class="{ opened: store.isMenuOpen }"
        @touchstart="touchHandler"
        @touchend="endHandler"
    >
        <span
            class="menu__title absolute left-8"
            :class="{
                'light-gray-text': store.theme === 'dark',
                'dark-gray-text': store.theme === 'light',
            }"
            :style="{ 'margin-top': 46 + 'px' }"
        >
            {{ $t('menu.about') }}
        </span>
        <div
            class="menu__inner w-full h-full pr-12 pl-8 pb-10 flex flex-col justify-between gap-5"
        >
            <div class="info text-white dark:text-black">
                {{ $t('menu.text') }}
                <div class="list__wrapper">
                    {{ $t('menu.lists[0].title') }}
                    <ul class="info__list">
                        <li>{{ $t('menu.lists[0].items[0]') }}</li>
                        <li>{{ $t('menu.lists[0].items[1]') }}</li>
                        <li>{{ $t('menu.lists[0].items[2]') }}</li>
                        <li>{{ $t('menu.lists[0].items[3]') }}</li>
                        <li>{{ $t('menu.lists[0].items[4]') }}</li>
                    </ul>
                </div>
                <div class="list__wrapper">
                    {{ $t('menu.lists[1].title') }}
                    <ul class="info__list">
                        <li>{{ $t('menu.lists[1].items[0]') }}</li>
                        <li>{{ $t('menu.lists[1].items[1]') }}</li>
                        <li>{{ $t('menu.lists[1].items[2]') }}</li>
                    </ul>
                </div>
            </div>
            <div class="contacts__wrapper">
                <div class="contacts">
                    <a
                        href="https://t.me/stsh42"
                        class="contacts__info"
                        :class="{
                            'light-gray-text': store.theme === 'dark',
                            'dark-gray-text': store.theme === 'light',
                        }"
                        >t.me/stsh42</a
                    >
                </div>
                <ul class="socials">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/stas-shumilov-91b70bab?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app"
                            class="social linkedin"
                            ><img
                                src="@/assets/icons/linkedin.svg"
                                alt="linkedin"
                        /></a>
                    </li>
                    <li>
                        <a
                            href="mailto:mvpstudio42@gmail.com"
                            class="social google"
                            ><img src="@/assets/icons/google.svg" alt="google"
                        /></a>
                    </li>
                    <li>
                        <a href="https://t.me/fx3d42" class="social telegram"
                            ><img
                                src="@/assets/icons/telegram.svg"
                                alt="telegram"
                        /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useStore } from '@/stores/index';

const store = useStore();

let touchStartX = 0;

function touchHandler(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
}

function endHandler(e: TouchEvent) {
    if (Math.abs(e.changedTouches[0].clientX - touchStartX) >= 100) {
        store.toggleMenuStatus(false);
    }
}
</script>
<style lang="postcss">
.menu {
    &__wrapper {
        width: 100%;
        position: fixed;
        top: 0;
        left: -100%;
        transition: all 0.5s;

        &.opened {
            left: 0;
        }
    }

    &__inner {
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 160px;

        & .info {
            width: 265px;
            font-family: Gilroy;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 126%;
            display: flex;
            flex-direction: column;
            gap: 20px;

            &__list {
                list-style: disc;
                padding-left: 28px;
            }
        }
    }
}

.contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 22px;
    }

    &__info {
        text-align: right;
        font-family: Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 123.4%;
    }
}

.socials {
    display: flex;
    justify-content: flex-end;
    gap: 28px;
}
</style>
