let icon = document.querySelector('.icon');
let navBar = document.querySelector('.navBar');

icon.addEventListener('click', () => {
    const navList = navBar.classList.toggle('active');
    console.log(navList);
});