import { atom } from "recoil";

export const userState = atom({
    key: 'userState',
    //초기값
    default: null,
});

export const resultState = atom({
    key: 'resultState',
    default: [],
});

export const userMbtiState = atom({
    key: 'userMbtiState',
    default: '',
});

export const initialPreferredMediasState = atom({
    key: 'initialPreferredMediasState',
    default: [],
});


export const previousRecommendationsState = atom({
    key: 'previousRecommendations',
    default: [],
});