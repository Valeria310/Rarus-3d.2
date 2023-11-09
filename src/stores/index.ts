import { ref } from 'vue';
import { defineStore } from 'pinia';
import Velocity from 'velocity-animate';

// eslint-disable-next-line import/prefer-default-export
export const useStore = defineStore('index', () => {
    const pages: number[] = [0, 1, 2, 3, 4];

    type PageNum = (typeof pages)[number];

    let initialTheme: 'light' | 'dark' = (['light', 'dark'] as const).includes(
        localStorage.theme
    )
        ? localStorage.theme
        : undefined;
    if (!initialTheme) {
        if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            initialTheme = 'dark';
        } else {
            initialTheme = 'light';
        }
    }

    const theme = ref<'dark' | 'light'>(initialTheme);

    function toggleTheme() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', theme.value);
    }

    const direction = ref<Record<PageNum, 'left' | 'right'>>({
        0: 'right',
        1: 'right',
        2: 'right',
        3: 'right',
        4: 'right',
    });

    function changeDirection(reqDir: 'left' | 'right', currentPage: PageNum) {
        direction.value[currentPage] = reqDir;
    }

    const isMenuOpen = ref<boolean>(false);

    function toggleMenuStatus(reqStatus?: boolean) {
        const McButton = document.getElementById('hamburger-menu');
        const McBar1 = McButton?.firstChild;
        const McBar2 = McButton?.lastChild;

        if (reqStatus === undefined) {
            isMenuOpen.value = !isMenuOpen.value;
        } else {
            isMenuOpen.value = reqStatus;
        }

        if (isMenuOpen.value) {
            Velocity(McBar1, { top: '50%', duration: 100, easing: 'swing' });
            Velocity(McBar2, {
                top: '50%',
                duration: 0,
                easing: 'swing',
            });
            Velocity(McBar2, {
                rotateZ: '90deg',
                duration: 0,
                delay: 0,
            });
            Velocity(McButton, {
                rotateZ: '135deg',
                duration: 0,
                delay: 0,
                easing: [0, 20],
            });
        } else {
            Velocity(McButton, 'reverse');
            Velocity(McBar2, {
                rotateZ: '0deg',
                duration: 0,
                easing: [0, 20],
            });
            Velocity(McBar2, { top: '100%', duration: 0, easing: 'swing' });
            Velocity(McBar1, 'reverse', { delay: 0 });
        }
    }

    return {
        theme,
        toggleTheme,
        direction,
        changeDirection,
        isMenuOpen,
        toggleMenuStatus,
    };
});
