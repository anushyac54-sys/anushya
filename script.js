const toggleButton = document.getElementById('toggleTheme');

toggleButton.addEventListener('click', () => {

  document.body.classList.toggle('dark-theme');

});