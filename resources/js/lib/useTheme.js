import { ref, onMounted } from 'vue';

const STORAGE_KEY = 'vet-clinic-theme';

// Shared reactive state (singleton across components)
const isDark = ref(false);

function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    try {
        localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
    } catch (_) {
        // localStorage may not be available (SSR / private mode)
    }
    isDark.value = dark;
}

export function useTheme() {
    const toggle = () => applyTheme(!isDark.value);

    const initTheme = () => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                applyTheme(saved === 'dark');
            } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                applyTheme(prefersDark);
            }
        } catch (_) {
            applyTheme(false);
        }
    };

    onMounted(initTheme);

    return { isDark, toggle };
}
