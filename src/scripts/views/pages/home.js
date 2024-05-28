import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createSelectedMenutItemTemplate } from '../templates/template-creator';

const selectedMenusData = require('../../../public/data/menus.json');

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Jelajahi Restoran dengan Pana Resto</h1>
        <p class="hero__tagline">
          Tempat untuk mencari restoran yang terbaik
        </p>
      </div>
    </div>
    <section class="content">
      <div class="explore-restaurant">
        <h1 class="explore-restaurant__label">Jelajahi Restoran</h1>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
      <div class="selected-menu">
        <h1 class="selected-menu__label">Menu Pilihan</h1>
        <div id="selected-menus" class="selected-menus">
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const heroStyle = document.createElement('style');
    heroStyle.innerHTML = `
      .hero {
        display: flex;
        align-items: center;
        min-height: 380px;
        width: 100%;
        text-align: center;
        background-image: url('/images/hero-image_2-small.jpg');
        background-repeat: no-repeat; 
        background-position: center;
        background-size: cover;
        background-color: #C5FF95;
      }
      
      .hero__inner {
        margin: 0 auto;
        padding: 16px;
        max-width: 800px;
        background: rgba(0, 0, 0, 0.5);
      }
      
      .hero__title {
        color: #fff;
        font-weight: 700;
        font-size: 24px;
      }
      
      .hero__tagline {
        color: #fff;
        margin-top: 16px;
        font-size: 18px;
        font-weight: 400;
      }

      @media screen and (min-width: 600px) {
        .hero {
          background-image: url('/images/hero-image_2-large.jpg');
        }
      }

      @media screen and (min-width: 650px) {
        .hero__title {
          font-size: 32px;
        }
      }
    `;

    const hero = document.querySelector('.hero');
    hero.appendChild(heroStyle);

    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const selectedMenusContainer = document.querySelector('#selected-menus');
    selectedMenusData.menus.forEach((menu) => {
      selectedMenusContainer.innerHTML += createSelectedMenutItemTemplate(menu);
    });
  },
};

export default Home;
