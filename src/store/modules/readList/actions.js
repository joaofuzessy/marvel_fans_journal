import { createAction } from '@reduxjs/toolkit';

export const addToReadList = createAction('readList/add_comic');
export const removeFromReadList = createAction('readList/remove_comic');