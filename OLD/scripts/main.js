document.addEventListener('DOMContentLoaded', function () {
    init();
});

function init() {
    const root = document.documentElement;
    const colorScheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!root.hasAttribute('data-theme') && !colorScheme) {
        root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else if (colorScheme) {
        root.setAttribute('data-theme', colorScheme);
    }

    /**
     * Gets the value of a CSS custom property.
     * @param {string} property The name of the CSS custom property.
     * @returns {string} The value of the CSS custom property.
     */
    function getCustomStyle(property) {
        return getComputedStyle(root).getPropertyValue(property).trim();
    }

    backgroundColor = getCustomStyle('--background-color');
    textColor = getCustomStyle('--text-color');
    primaryColor = getCustomStyle('--primary-color');
    accentColor = getCustomStyle('--accent-color');

    const themeToggleBtn = document.querySelector('[data-theme-toggle]');
    themeToggleBtn.hidden = false;
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            root.setAttribute('data-theme', 'light');
            themeToggleBtn.querySelector('img').src = 'assets/icons/moon.svg';
            localStorage.setItem('theme', 'light');
        } else {
            root.setAttribute('data-theme', 'dark');
            themeToggleBtn.querySelector('img').src = 'assets/icons/sun.svg';
            localStorage.setItem('theme', 'dark');
        }
    });
}
