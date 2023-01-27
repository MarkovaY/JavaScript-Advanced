// On click of the button "Read more", we need to show a text, and the "Read more" button has to hide

function showText() {
    const text = document.getElementById('text');
    text.style.display = 'inline';

    const button = document.getElementById('more');
    button.style.display = 'none';
}