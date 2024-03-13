import React from 'react'
import { productsData } from '../data/data'

export const useProducts = () => {
    const [searchValue, setSearchValue] = React.useState('')
    // const totalProducts = productsData.length

    let searchedProducts = []

    if(searchValue.length >= 1) {
        searchedProducts = productsData.filter(product => {
            const productTitle = product.name.toLowerCase()
            const searchedText = searchValue.toLocaleLowerCase()

            return productTitle.includes(searchedText)
        })
    } else {
        searchedProducts = productsData
    }

    return {
        searchedProducts,
        searchValue,
        setSearchValue,
    }
}