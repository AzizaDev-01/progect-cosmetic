let links = document.querySelectorAll(".menu-item > a");

for (let i = 0; (i = links.length); i++) {
  links[i].onclick = function (event) {
    event.preventDefault();
    document
      .querySelector(links[i].getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

const products = [
  {
    id: 1,
    name: "Cosmetic products",
    descrtion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image: "./assets/image/1.png",
    price: 120,
  },
  {
    id: 2,
    name: "Cosmetic products",
    descrtion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image: "./assets/image/2.png",
    price: 120,
  },
];

const productsBox = document.querySelector(".products-box");

const productsMap = products.map((el) => {
  return `
   <div class="card">
      <div class="card-image">
        <img src="${el.image}" alt="card image"
          loading="lazy" />
      </div>
      <div class="card-content">
        <h2>${el.name}</h2>
          <p>${el.descrtion}</p>
                <div class="card-actions">
                  <div class="card-buttons">
                    <button id="now">Buy Now</button>
                    <button id="cart">Add To Cart</button>
                  </div>
                  <span>${el.price} $</span>
                </div>
              </div>
            </div> 
  `;
});

productsBox.innerHTML = productsMap.join("");
