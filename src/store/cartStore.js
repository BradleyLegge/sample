import { create } from 'zustand';

export const useCartStore = create( (set, get) => (
    {
        cartItems: [],

        addToCart: (item) => {
            set({...item})
        }
    }))