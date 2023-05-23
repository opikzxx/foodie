import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonInitiatorWithRestaurant };
