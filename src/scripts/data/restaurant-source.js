import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id), {
      method: 'GET',
      cache: 'no-cache',
    });
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReviewRestaurant(reviewData) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
