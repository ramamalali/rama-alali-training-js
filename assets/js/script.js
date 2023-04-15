
  async function fetchProduct() { 
    await fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((res) => (data = res.products));
    data.forEach((item) =>{
      appendNewitem(item.images[0] , item.title , item.price , item.stock , item.category);
    });
    pointer(data)
  }
  
  function appendNewitem(images,title,price,stock,category){
   const container = document.querySelector(".container2"); 
  container.innerHTML += ` <div class="card">
  <img src="${images}" alt="product-img">
  <h1>Product Name : ${title}</h1>
  <p class="category">Category : ${category}</p>
  <p class="price">Price : ${price} $</p>
  <p class="stock">Stock : ${stock}</p>

  <div>
  <div class="c-blue"></div>
  <div class="c-green"></div>
  <div class="c-gray"></div>
  <div class="c-yellow"></div>
  
  </div>  

  </div> ` ;
  }
  
  
  const points = document.querySelector(".points");
  function pointer(data){
    for(i = 1 ; i <= (data.length/10) ; i++){
      points.innerHTML += `<div class="point${i}"></div>`;
    }
    const card =document.querySelectorAll(".card");
    const point1 = document.querySelector(".point1");
    const point2 = document.querySelector(".point2");
    const point3 = document.querySelector(".point3");
    
    point1.addEventListener('click' , function(){
      card.forEach(Element =>{
          Element.style.transform='translateX(0)';
  }) });
  
    point2.addEventListener('click' , function(){
      card.forEach(Element =>{
        Element.style.transform='translateX(-1273px)';
        Element.style.transition='1.5s';
        
}) });
    point3.addEventListener('click' , function(){
      card.forEach(Element =>{
        Element.style.transform='translateX(-2546px)';
        Element.style.transition='1.5s';
}) });
}

  fetchProduct();
  
 
  function searchFunction() {
    var input, filter, cards, card, title, i;
    input = document.querySelector(".search-box");
    filter = input.value.toUpperCase();
    cards = document.querySelector(".container2");
    card = cards.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
      title = card[i].getElementsByTagName("h1")[0];
      if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = "";
        points.style.display ="";
      } else {
        card[i].style.display = "none";
        points.style.display ="none";
      }
    }
    
  }