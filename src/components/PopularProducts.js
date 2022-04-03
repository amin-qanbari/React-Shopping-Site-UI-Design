//usecontext
import { useContext } from "react"

//styled-compnents
import styled from "styled-components"

//data
import { popularProducts, productList } from "../data"

//components
import Product from "./Product"

//context
import { searchContext } from "../Context/SearchContextProvider"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Title = styled.h2`
padding: 0px 30px;
`
const PopularProducts = () => {
  
  const searchTerm = useContext(searchContext)
  return (<>
    <Title>Popular Products :</Title>
    <Container>
        {popularProducts
        .map(item => (
            <Product item={item} key={item.id}/>
        ) )}
    </Container>
    </>
  )
}

export default PopularProducts