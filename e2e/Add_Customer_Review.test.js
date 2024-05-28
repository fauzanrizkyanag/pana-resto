/* eslint-disable no-undef */
const assert = require('assert');

Feature('Add Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add customer review in selected restaurant', async ({ I }) => {
  I.seeElement('.restaurant-item__name a');
  const firstRestaurant = locate('.restaurant-item__name a').first();
  I.click(firstRestaurant);

  I.seeElement('#inputReview');

  const reviewerName = 'Mamat';
  const reviewerMessage = 'Enak';

  I.fillField('#inputReviewName', reviewerName);
  I.fillField('#inputReviewDetail', reviewerMessage);
  I.click('#reviewSubmit');

  const lastReviewerName = await I.grabTextFrom(locate('.restaurant__review-item > h4').last());
  const lastReviewerMessage = await I.grabTextFrom(locate('.restaurant__review-item > p').last());

  assert.strictEqual(reviewerName, lastReviewerName);
  assert.strictEqual(reviewerMessage, lastReviewerMessage);
});
