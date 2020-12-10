import { createSlice, createSelector } from 'https://cdn.skypack.dev/@reduxjs/toolkit@1.2.3';
import store from './index.js'


//--------- Slice ---------//
const products = createSlice()

//--------- Export slice values ---------//
export const getProducts = () => {}
export const getProduct = ({ categoryId, id }) => {}
export const getCategory = ({ categoryId }) => {}

//--------- Export slice actions ---------//
export const {
  saveProducts,
  removeProduct,
} = products.actions

//--------- Export slice reducer ---------//
export default products.reducer

