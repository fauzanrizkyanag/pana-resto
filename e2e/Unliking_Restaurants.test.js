/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  const firstFavoriteCondition = await I.grabHTMLFrom('#restaurants');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__name a');
  I.click(locate('.restaurant-item__name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__name a');
  I.click(locate('.restaurant-item__name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const lastFavoriteCondition = await I.grabHTMLFrom('#restaurants');

  assert.strictEqual(firstFavoriteCondition, lastFavoriteCondition);
});
