import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'theme': {
                    light: '#67e8f9',
                    DEFAULT: '#1E8466',
                    dark: '#0e7490',
                    reverse: '#292986',
                },
                'black-translucent': 'rgba(0, 0, 0, 0.2)'
            },
        },
    },

    plugins: [forms],
};
