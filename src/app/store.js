import {configureStore} from '@reduxjs/toolkit';
import characterReducer from '../features/characters/characterSlice';
import challengesReducer from '../features/characters/challengesSlice';

export const store = configureStore({
    reducer:{
        characters: characterReducer,
        challenges: challengesReducer
    }
});