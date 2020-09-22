const search_toogle = document.getElementById('search-toogle')
const search_main = document.getElementById('search-main')

search_toogle.addEventListener("click",()=>{
  search_main.classList.toggle('active'); 
  search_toogle.classList.toggle('active');
})