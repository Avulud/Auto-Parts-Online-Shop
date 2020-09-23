const search_toogle = document.getElementById('search-toogle')
const search_main = document.getElementById('search-main')
const products_main = document.getElementById('products-main')
let i=0;

function changeText(){
i%2==0?search_toogle.innerHTML="&#9660;":search_toogle.innerHTML="	&#9650;";
  i++;
}


search_toogle.addEventListener("click",()=>{
  changeText();
  search_main.classList.toggle('active'); 
  search_toogle.classList.toggle('active');
  products_main.classList.toggle('active');
})

