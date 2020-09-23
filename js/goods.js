const toogle1 = document.getElementById('goods-toogle-1')
const name1= document.getElementById('goods-name-1')
const description1 = document.getElementById('goods-description-1')
const toogle2 = document.getElementById('goods-toogle-2')
const name2 = document.getElementById('goods-name-2')
const description2 = document.getElementById('goods-description-2')
const toogle3 = document.getElementById('goods-toogle-3')
const name3 = document.getElementById('goods-name-3')
const description3 = document.getElementById('goods-description-3')
const toogle4 = document.getElementById('goods-toogle-4')
const name4 = document.getElementById('goods-name-4')
const description4 = document.getElementById('goods-description-4')
const toogle5 = document.getElementById('goods-toogle-5')
const name5 = document.getElementById('goods-name-5')
const description5 = document.getElementById('goods-description-5')
const toogle6 = document.getElementById('goods-toogle-6')
const name6 = document.getElementById('goods-name-6')
const description6 = document.getElementById('goods-description-6')
const toogle7 = document.getElementById('goods-toogle-7')
const name7 = document.getElementById('goods-name-7')
const description7 = document.getElementById('goods-description-7')

toogle1.addEventListener("click", () => {
    toogle1.classList.toggle('active');
    name1.classList.toggle('active');
    description1.classList.toggle('active');
})

toogle2.addEventListener("click", () => {
    toogle2.classList.toggle('active');
    name2.classList.toggle('active');
    description2.classList.toggle('active');
})

toogle3.addEventListener("click", () => {
    toogle3.classList.toggle('active');
    name3.classList.toggle('active');
    description3.classList.toggle('active');
})

toogle4.addEventListener("click", () => {
    toogle4.classList.toggle('active');
    name4.classList.toggle('active');
    description4.classList.toggle('active');
})


toogle5.addEventListener("click", () => {
    toogle5.classList.toggle('active');
    name5.classList.toggle('active');
    description5.classList.toggle('active');
})

toogle6.addEventListener("click", () => {
    toogle6.classList.toggle('active');
    name6.classList.toggle('active');
    description6.classList.toggle('active');
})

toogle7.addEventListener("click", () => {
    toogle7.classList.toggle('active');
    name7.classList.toggle('active');
    description7.classList.toggle('active');
})

$(".goods-name-2").click(function(){
    console.log(1);
});