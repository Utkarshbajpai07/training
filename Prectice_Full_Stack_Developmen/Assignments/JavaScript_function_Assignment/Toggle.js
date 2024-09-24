const image = document.getElementById('toggleImage');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    if (image.style.display === 'none') {
        image.style.display = 'block';
        toggleButton.textContent = 'Hide Image';
    } else {
        image.style.display = 'none';

        toggleButton.textContent = 'Show Image';
    }
});
