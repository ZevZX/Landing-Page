document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark if not set
    const moonIcon = document.querySelector('.moon');
    const sunIcon = document.querySelector('.sun');
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            toggleSwitch.checked = true;
        } else {
            document.body.classList.remove('light-mode');
            toggleSwitch.checked = false;
        }
        updateIconVisibility(theme === 'light');
    }
    function updateIconVisibility(isLightMode) {
        moonIcon.style.opacity = isLightMode ? '0' : '1';
        sunIcon.style.opacity = isLightMode ? '1' : '0';
    }
    // Set initial theme
    setTheme(currentTheme);
    function switchTheme(e) {
        const newTheme = e.target.checked ? 'light' : 'dark';
        setTheme(newTheme);
    }
    toggleSwitch.addEventListener('change', switchTheme, false);
});
