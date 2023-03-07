let carts = document.querySelectorAll('.add_basket')
let itemsel = document.querySelector(".card_heading_P3");
let products = [
    {
        id: 1,
        rname:'Kennington Lane Cafe',
        name: 'Egg, kiwi and sauce chilli',
        price: 49,
        incart:0
    },
    {
        id: 2,
        rname:'Kennington Lane Cafe',
        name: 'Potatoes with pork and dried fruits',
        price: 50,
        incart: 0
    },
    {
        id: 3,
        rname:'Kennington Lane Cafe',
        name: 'Rice with shrimps and kiwi',
        price: 51,
        incart: 0
    },
    {
        id: 4,
        rname:'Kennington Lane Cafe',
        name: 'Spaghetti with mushrooms and...',
        price: 52,
        incart: 0
    },
    {
        id: 5,
        rname:'Kennington Lane Cafe',
        name: 'Sliced pork, avocado and...',
        price: 53,
        incart: 0
    },
    {
        id: 6,
        rname:'Kennington Lane Cafe',
        name: 'Veal meat, tomatoes and...',
        price: 54,
        incart: 0
    },
    {
        id: 7,
        rname:'Kennington Lane Cafe',
        name: 'Potatoes with pork and dried fruits',
        price: 49,
        incart: 0
    },
    {
        id: 8,
        rname:'Kennington Lane Cafe',
        name: 'Egg, kiwi and sauce chilli',
        price: 49,
        incart: 0
    },
    {
        id: 9,
        rname:'Kennington Lane Cafe',
        name: 'Sliced pork, avocado and...',
        price: 53,
        incart: 0
    },
    {
        id: 10,
        rname:'Kennington Lane Cafe',
        name: 'Veal meat, tomatoes and...',
        price: 54,
        incart: 0
    },
    {
        id: 1,
        rname:'Kennington Lane Cafe',
        name: 'Spaghetti with mushrooms and...',
        price: 52,
        incart: 0
    },
    {
        id: 10,
        rname:'Kennington Lane Cafe',
        name: 'Rice with shrimps and kiwi',
        price: 52,
        incart: 0
    },
    {
        id: 2,
        rname:'Kennington Lane Cafe',
        name: 'Veal meat, tomatoes and...',
        price: 54,
        incart: 0
    },
    {
        id: 9,
        rname:'Kennington Lane Cafe',
        name: 'Sliced pork, avocado and...',
        price: 53,
        incart: 0
    },
    {
        id: 7,
        rname:'Kennington Lane Cafe',
        name: 'Spaghetti with mushrooms and...',
        price: 52,
        incart: 0
    },
    {
        id: 6,
        rname:'Kennington Lane Cafe',
        name: 'Rice with shrimps and kiwi',
        price: 52,
        incart: 0
    },
    {
        id: 5,
        rname:'Kennington Lane Cafe',
        name: 'Rice with shrimps and kiwi',
        price: 52,
        incart: 0
    },
    {
        id: 2,
        rname:'Kennington Lane Cafe',
        name: 'Rice with shrimps and kiwi',
        price: 52,
        incart: 0
    },

];



for(let i =0; i < carts.length; i++) {
    carts[i].addEventListener('click' , () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

// arter refresh item not update
function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.bag span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers+ 1);
        document.querySelector('.bag span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.bag span').textContent = 1; // cart class
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        
        if(cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].incart += 1
    } else {
        product.incart = 1;
        cartItems = {
            [product.name]: product
    }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}

function totalCost(product) {
    // console.log("The product price is ", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("Cartcost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let orderList = document.querySelector(".order_list");
    let card_heading_P3 = document.querySelector(".card_heading_P3");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems)
    if(cartItems && orderList) {
        
        orderList.innerHTML = '';
        Object.values(cartItems).map(item => {
            orderList.innerHTML += `
            <div class="order_list">
                    <table border="0" width="100%" class="orderContent" cellspacing="20px" style="margin-bottom: 30px;">
                        <tr>
                            <th><img src="img/logo-s.jpg" alt="" class="order_img"></th>
                            <th class="order_h4">${item.rname}</th>
                            <th class="deleteIcon"><i class="fa-solid fa-xmark" onclick="removeitem(${item.id})"></i></th>
                        </tr>
                        <tr>
                            <th><img src="img/${item.id}.png" alt="" class="order_img2"></th>
                            <th class="dishName">${item.name}</th>
                            <th class="dishPrice">$${item.price}.00</th>
                        </tr>
                        <tr>
                            <th>$${item.incart * item.price}.00</th>
                            <th colspan="2"><button class="add_btn"><i class="fa-solid fa-plus "></i></button>
                                <span class="check_count">${item.incart}</span>
                                <button class="add_btn"><i class="fa-solid fa-minus "></i></button>
                            </th>
                        </tr>
                        <tr>
                            <td class="totalTag">Total</td>
                            <td colspan="2" class="QuantityTag">Quantity</td>
                        </tr>
                        <hr>
                    </table>
                </div>
            `;
        });

        orderList.innerHTML += `
            <div>
                <h2 class="totalPrice">Total Price : $${cartCost}</h2>
            </div>
        `;
        
        

    }
}
// 
// function displayitems()
// {
//     products.forEach((product) => {
//         itemsel.innerHTML +=`
//         <div class="card_heading_P3">
//             <h1 class="">${product.rname}</h1>
//         </div>
//                 `
//     })
// }

// displayitems();
// 


onLoadCartNumber();
displayCart();
