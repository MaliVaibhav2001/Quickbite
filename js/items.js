let itemsel = document.querySelector(".elements");
const grocery = [
    {
        id : 1,
        name : "Egg, kiwi and sauce chilli",
        price : 39
    },
    {
        id : 2,
        name : "Soft Creme cheese (200g)",
        price : 3.99
    },
    {
        id : 3,
        name : "Pepsi soda can (30ml)",
        price : 1.00
    },
    {
        id : 4,
        name : "Fresh Orange, Spain (1kg)",
        price : 1.75
    },
    {
        id : 5,
        name : "Moisture Body Lotion (250ml)",
        price : 5.20
    },
    {
        id : 6,
        name : "Nut Chocolate Paste (750g)",
        price : 7.50
    },
    {
        id : 7,
        name : "Mozzarella Mini Cheese",
        price : 4.99
    },
    {
        id : 8,
        name : "Mozzarella Cheese (125g)",
        price : 4.30
    },
    {
        id : 9,
        name : "Men’s Shampoo (400ml)",
        price : 5.99
    },
    {
        id : 10,
        name : "Frozen Oven-ready Poultry",
        price : 12.00
    }

]

function displayitems()
{
    grocery.forEach((product) => {
        itemsel.innerHTML +=`
         <div class="filterDiv Breakfast resto_card"><img class="inthover2" src="img/${product.id}.png" alt="" width="400px" height="400px">
      <h2 >${product.name}</h2>
      <button class="card_btn2">american</button>
      <button class="card_btn2">american</button> 

      <!-- JS -->
       <div>
        <h1>$${product.price}</h1>
        <span><button class="add_btn"><i class="fa-solid fa-plus "></i></button></span>
        <span class="add_btn">0</span>
        <span><button class="add_btn"><i class="fa-solid fa-minus "></i></button></span>
      </div>
      
      <div>
        <button class="add_basket">Add to Basket</button>
      </div>
    </div>
                `
    })
}

displayitems();