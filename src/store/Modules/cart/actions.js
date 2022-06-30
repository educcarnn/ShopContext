import { ADD, REMOVE } from "./types"

export const add = (product) => ({type: ADD, product});
export const remove = (id) => ({type: REMOVE, id})
