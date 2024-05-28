import RestaurantSource from '../data/restaurant-source';

const ReviewAdder = {
  async init({
    id,
    name,
    review,
  }) {
    this._id = id;
    this._name = name;
    this._review = review;
    const message = await this.addReview();
    return message;
  },

  async addReview() {
    if (this._name === '' || this._review === '') {
      return 'Field tidak boleh kosong.';
    }
    const reviewData = {
      id: this._id,
      name: this._name,
      review: this._review,
    };
    const response = await RestaurantSource.addReviewRestaurant(reviewData);
    return response.message;
  },
};

export default ReviewAdder;
