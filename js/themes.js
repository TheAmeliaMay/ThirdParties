function setTheme(theme) {
    var body = document.getElementsByTagName('body')[0];
    body.className = theme;
}

function cycleTheme() {
    var body = document.getElementsByTagName('body')[0];
    var btn = document.getElementById('themeBtn');

    //switch to light theme
    if (body.className == 'theme-dark') {
        setTheme('theme-light');
        btn.innerHTML = 'Dark Theme';

    //switch to dark theme
    } else {
        setTheme('theme-dark');
        btn.innerHTML = 'Light Theme';
    }

    //set a cookie to keep track
    document.cookie = 'theme=' + body.className;
}

document.onload = function() {
    //check the theme cookie
    if (document.cookie.includes('theme=theme-light')) {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}