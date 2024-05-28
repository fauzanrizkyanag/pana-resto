import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <picture>
    <source media="(max-width: 600px)" srcset="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}/small/${restaurant.pictureId}` : 'https://picsum.photos/id/666/800/450?grayscale'}" crossorigin="anonymous">
    <img class="restaurant__image" alt="${restaurant.name}"
      src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}` : 'https://picsum.photos/id/666/800/450?grayscale'}" crossorigin="anonymous" />
  </picture>
  <article class="restaurant__info">
    <h3>Informasi Restoran</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </article>
  <article class="restaurant__description">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </article>
  <article class="restaurant__menus">
    <h3>Menu</h3>
    <section>
      <h4>Menu Makanan</h4>
      <ol id="restaurantFoodMenus" class="restaurant__food-menus"></ol>
    </section>
    <section>
      <h4>Menu Minuman</h4>
      <ol id="restaurantDrinkMenus" class="restaurant__drink-menus"></ol>
    </section>
  </article>
  <div class="restaurant__reviews">
    <h3>Ulasan</h3>
    <form id="inputReview">
      <div class="input">
        <label for="inputReviewName">Nama</label>
        <input id="inputReviewName" type="text" required>
      </div>
      <div class="input">
        <label for="inputReviewDetail">Ulasan</label>
        <input id="inputReviewDetail" type="text" required>
      </div>
      <button id="reviewSubmit" type="submit">Simpan</button>
    </form>
    <div id="restaurantCustomerReviews" class="restaurant__customer-reviews"></div>
  </div>
`;

const createRestaurantFoodMenuTemplate = (food) => `
  <li>${food.name}</li>
`;

const createRestaurantDrinkMenuTemplate = (drink) => `
  <li>${drink.name}</li>
`;

const createRestaurantCustomerReviewTemplate = (review) => `
  <article class="restaurant__review-item">
    <h4>${review.name}</h4>
    <span>${review.date}</span>
    <p>${review.review}</p>
  </article>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item" id="${restaurant.id}">
    <img class="restaurant-item__thumbnail lazyload" alt="${restaurant.name}"
      data-src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}/small/${restaurant.pictureId}` : 'https://picsum.photos/id/666/800/450?grayscale'}" crossorigin="anonymous" />
    <div class="restaurant-item__content">
      <p class="restaurant-item__rating">Rating: ⭐️ ${restaurant.rating}</p>
      <h1 class="restaurant-item__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
      <p class="restaurant-item__location">${restaurant.city}</p>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </div>
  </article>
`;

const createSelectedMenutItemTemplate = (menu) => `
  <article class="selected-menu-item" id="${menu.menuId}">
    <picture>
      <source media="(max-width: 600px)" srcset="${menu.menuPictureId ? `${menu.menuPictureId}-small.jpg` : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <img class="selected-menu-item__thumbnail" alt="${menu.name}"
        src="${menu.menuPictureId ? `${menu.menuPictureId}-large.jpg` : 'https://picsum.photos/id/666/800/450?grayscale'}" />
    </picture>
    <div class="selected-menu-item__content">
      <h1 class="selected-menu-item__name"><a href="#">${menu.name}</a></h1>
      <p class="selected-menu-item__restaurant"><a href="#">${menu.restaurant}</a></p>
      <p class="selected-menu-item__price">${menu.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
    </div>
  </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="tambahkan ke favorit" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="hapus dari favorit" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createEmptyRestaurantItemTemplate = () => `
  <div class="restaurant-item__not__found">
    Tidak ada restoran untuk ditampilkan
  </div>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantFoodMenuTemplate,
  createRestaurantDrinkMenuTemplate,
  createRestaurantCustomerReviewTemplate,
  createSelectedMenutItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createEmptyRestaurantItemTemplate,
};
