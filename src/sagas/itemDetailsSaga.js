import {take, fork, put} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    SET_CART_ITEMS,
    setItemDetails
} from "./../actions";

export function* loadItemDetails(item) {
    console.info("Item?",item);
}

export function* itemDetailsSaga() {
    const {items} = yield take(SET_CART_ITEMS);
    console.info("Items?",items);
    yield items.map(item=>fork(loadItemDetails,item));
}