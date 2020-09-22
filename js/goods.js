const toogle = document.getElementById('goods-toogle')
const name = document.getElementById('goods-name')
const description = document.getElementById('goods-description')

toogle.addEventListener("click", () => {
    toogle.classList.toggle('active');
    name.classList.toggle('active');
    description.classList.toggle('active');
})