/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantFoodMenuTemplate,
  createRestaurantDrinkMenuTemplate,
  createRestaurantCustomerReviewTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import AddReviewInitiator from '../../utils/add-review-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const restaurantFoodMenuContainer = document.querySelector('#restaurantFoodMenus');
    restaurant.menus.foods.forEach((food) => {
      restaurantFoodMenuContainer.innerHTML += createRestaurantFoodMenuTemplate(food);
    });

    const restaurantDrinkMenuContainer = document.querySelector('#restaurantDrinkMenus');
    restaurant.menus.drinks.forEach((drink) => {
      restaurantDrinkMenuContainer.innerHTML += createRestaurantDrinkMenuTemplate(drink);
    });

    const restaurantCustomerReviewContainer = document.querySelector('#restaurantCustomerReviews');
    restaurant.customerReviews.forEach((customerReview) => {
      restaurantCustomerReviewContainer
        .innerHTML += createRestaurantCustomerReviewTemplate(customerReview);
    });

    document.querySelector('#inputReview').addEventListener('submit', async (event) => {
      event.preventDefault();
      const responseForm = await AddReviewInitiator.init({
        id: restaurant.id,
        name: document.getElementById('inputReviewName').value,
        review: document.getElementById('inputReviewDetail').value,
      });
      if (responseForm === 'success') {
        this.afterRender();
      } else {
        alert(responseForm);
      }
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
