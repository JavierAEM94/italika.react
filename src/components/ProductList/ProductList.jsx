import { ProductCard } from "../ProdutCard"

export const ProductList = (props) => {
    console.log('allProducts: ', props.allProducts)
    const allProducts = props.allProducts

    const products = allProducts.map(product =>
        <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
        />
    )

    return(
        <ul className="flex flex-wrap justify-start">
            {products}
        </ul>
    )
}