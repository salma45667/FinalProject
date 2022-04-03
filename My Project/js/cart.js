let carts = document.querySelectorAll(".btn");
let products = [
  {
    name: "Naked At Work",
    img: "./images/book1.jpg",
    price: 10,
    inCart: 0,
  },
  {
    name: "The Unsinkable Greta James",
    img: "./images/book13.jpg",
    price: 15,
    inCart: 0,
  },
  {
    name: "Diary Of Wimpy Kid Book 9",
    img: "./images/book15.jpg",
    price: 20,
    inCart: 0,
  },
  {
    name: "Song Journey",
    img: "./images/book2.jpg",
    price: 20,
    inCart: 0,
  },
  {
    name: "Joudi Picoult",
    img: "./images/book3.jpg",
    price: 25,
    inCart: 0,
  },
  {
    name: "The Maid",
    img: "./images/book4.jpg",
    price: 30,
    inCart: 0,
  },
  {
    name: "Mindfulness For Kids",
    img: "./images/book11.jpg",
    price: 25,
    inCart: 0,
  },
  {
    name: "SAT Official Study Guide",
    img: "./images/book6.jpg",
    price: 20,
    inCart: 0,
  },
  {
    name: "Mometrix SAT",
    img: "./images/book7.jpg",
    price: 35,
    inCart: 0,
  },
  {
    name: "The Last Thing He Told Me",
    img: "./images/book8.jpg",
    price: 25,
    inCart: 0,
  },
  {
    name: "Horse Life",
    img: "./images/book12.jpg",
    price: 20,
    inCart: 0,
  },
  {
    name: "Encanto",
    img: "./images/book10.jpg",
    price: 10,
    inCart: 0,
  },
  {
    name: "Diary of a Wimpy Kid Book 13",
    img: "https://m.media-amazon.com/images/P/B07BK9L65V.01._SCLZZZZZZZ_SX500_.jpg",
    price: 18,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
function onloadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  document.querySelector("#cart-btn span").textContent = productNumbers;
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("#cart-btn span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#cart-btn span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.img] == undefined) {
      cartItems = {
        ...cartItems,
        [product.img]: product,
      };
    }
    cartItems[product.img].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.img]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else localStorage.setItem("totalCost", product.price);
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      
      <div class="products">
        <ion-icon type="button" class="remove-btn" name="close-circle" onclick=""></ion-icon>
        <div class="details">
        <img src="${item.img}"  width="100px"  >
       <span>${item.name}</span>
       </div>
       <div class="price">${item.price}kd</div>
       <div class="quantity">
       <ion-icon name="caret-back-outline"></ion-icon>

       <span>${item.inCart}</span>
       <ion-icon name="caret-forward-outline"></ion-icon>
     </div>
     <div class="total">
     ${item.inCart * item.price}kd
     </div>
     
        </div>

       
      
        `;
    });
    productContainer.innerHTML += `
    <div class="basketTotalContainer">
    <h4 class="basketTotalTitle">
    Basket Total
    </h4>
    <h4 class="basketTotal">${cartCost}kd</h4>
    
    
    </div>
    `;
  }

  let removeBttons = document.getElementsByClassName("remove-btn");
  for (let i = 0; i < removeBttons.length; i++) {
    removeBttons[i].addEventListener("click", removeItem);
  }

  function removeItem(event) {
    removeBttons = event.target;
    removeBttons_grandparent = removeBttons.parentElement.parentElement;
    removeBttons_grandparent.remove();
  }
}

onloadCartNumbers();
displayCart();
