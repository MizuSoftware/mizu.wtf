const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {}
    },

    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mizu: {
                    "primary": "#0369a1",
                    "secondary": "#0c4a6e",
                    "accent": "#EB6B47",
                    "neutral": "#23282F",
                    "base-100": "#212121",
                    "info": "#0092D6",
                    "success": "#6CB288",
                    "warning": "#DAAD58",
                    "error": "#AB3D30",
                },
            }
        ],
    }
};

module.exports = config;
