import {createSlice} from "@reduxjs/toolkit"

function generateUniqueId(size = 21) {
    const urlAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < size; i++) {
      id += urlAlphabet[Math.floor(Math.random() * urlAlphabet.length)];
    }
    return id;
  }

const initialState = {
    images : []
}

export const ImageSlice = createSlice({
    name : 'image',
    initialState,
    reducers:{
        addImage : (state,action) =>{
            const image = {
                id : generateUniqueId(),
                image : action.payload,
                price : 1,
            }
            state.images.push(image)
        },
        removeImage: (state,action) =>{
            state.images = state.images.filter((image) => image.id !==action.payload)
        }
    }
})

export const {addImage,removeImage} = ImageSlice.actions

export default ImageSlice.reducer