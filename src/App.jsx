import { useProducts } from './modules/useProducts/useProducts'
import { SearchBar } from './components/SearchBar'
import { ProductList } from './components/ProductList'
import './App.css'

function App() {
  const {
    searchedProducts,
    searchValue,
    setSearchValue,
  } = useProducts()

  // console.log('searchedProducts: ', searchedProducts)
  // console.log('searchValue:', searchValue)
  // console.log('setSearchValue: ', setSearchValue)


  return (
    <>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {(searchedProducts.length > 0) ?
        <ProductList
          allProducts={searchedProducts}
        /> :
        <h3>
          Busqueda vacia
        </h3>
      }
    </>
  )
}

export default App
