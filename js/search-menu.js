const search_toogle = document.getElementById('search-toogle')
const search_main = document.getElementById('search-main')
const products_main = document.getElementById('products-main')

search_toogle.addEventListener("click",()=>{
  search_main.classList.toggle('active'); 
  search_toogle.classList.toggle('active');
  products_main.classList.toggle('active');
})