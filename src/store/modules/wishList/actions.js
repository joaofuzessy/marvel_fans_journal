import { createAction } from '@reduxjs/toolkit';

export const addToWishList = createAction('wishList/add_comic');
export const removeFromWishList = createAction('wishList/remove_comic');
export const updateAmount = createAction('wishList/update_amount');