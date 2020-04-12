const lightBtn = document.getElementById('light');
const darkBtn = document.getElementById('dark');
const solarBtn = document.getElementById('solar');

const body = document.body;

/* const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('isSolar');

} */

lightBtn.addEventListener('click', () => {
    body.classList.replace('dark', 'light');
    // localStorage.setItem('theme', 'light');
});

darkBtn.addEventListener('click', () => {
    body.classList.replace('light', 'dark');
    // localStorage.setItem('theme', 'dark');
});

solarBtn.addEventListener('click', () => {
    if (body.classList.contains('solar')) {

        body.classList.remove('solar');

        solarBtn.innerText = "solarize";
        
        // localStorage.removeItem('isSolar');
    } else {

        body.classList.add('solar');
        
        solarBtn.innerText = "normalize";
    }
});