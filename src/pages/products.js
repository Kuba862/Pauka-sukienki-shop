import React from "react"
import { graphql } from "gatsby";
import styled from "styled-components";

// import Layout from "../components/layout";
// import Seo from "../components/seo";
import ProductCard from "../components/ProductCard";

const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margonm: 0 50px;
`;

const Products = ({ data }) => {
	const { nodes } = data.allShopifyProduct

	return (
		<>

		<Main>{nodes?.map((product, index) => (<ProductCard key={index} product={product} />))}</Main>

		 {/* <Layout> */}
		 	{/* <Seo title="Products" /> */}
		 	{/* <Wrapper> */}
		 		{/* {nodes?.map((product, index) => (<ProductCard key={index} product={product} />))} */}
		 	{/* </Wrapper> */}
		 {/* </Layout> */}
		</>
		)
}

export default Products

export const query = graphql`
	{
		allShopifyProduct {
			nodes {
				title
				handle
				variants {
        	shopifyId
      	}
				priceRangeV2 {
					maxVariantPrice {
						amount
					}
				}
				description
				images {
					src
				}
			}
		}
	}
`

const Wrapper = styled.div`
	display: grid;
	margin: 40px;
	grid-template-columns: repeat(3, auto);
	justify-content: left;
	gap:40px;
	max-width: 1234px;
`