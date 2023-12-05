import { createContext, useContext } from "react";


export const headerContext = createContext({
    show:false,
    setShow:()=>{},
    size:0
})
export const HeaderContextProvider = headerContext.Provider

export function useHeaderContext(){
    return useContext(headerContext)
}

export const displayContext = createContext({
    warning:false,
    handleClick:()=>{}
})
export const DisplayContextProvider = displayContext.Provider

export function useDisplayContext(){
    return useContext(displayContext)
}
export const cartContext = createContext({
    cart:[],
    setCart:()=>{},
    handleChange:()=>{}
})
export const CartContextProvider = cartContext.Provider

export function useCartContext(){
    return useContext(cartContext)
}

