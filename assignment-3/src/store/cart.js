import { createSlice, createSelector } from 'https://cdn.skypack.dev/@reduxjs/toolkit@1.2.3';
import store from './index.js'

const initialState = JSON.parse(localStorage.getItem('cart')) || []

//--------- Slice ---------//
const cart = createSlice()

//--------- Export slice values ---------//
export const getProducts = () => {}
export const getTotalPrice = () => {}
export const isProductInCart = ({ id }) => {}

//--------- Export slice actions ---------//
export const {
  add,
  remove,
  setQuantity
} = cart.actions

//--------- Export slice reducer ---------//
export default cart.reducer