//styled-compnents
import styled from "styled-components"

//data
import { popularProducts } from "../data"

//components
import Product from "./Product"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id}/>
        ) )}
    </Container>
  )
}

export default Products