import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query {
    category {
      products {
        name
        inStock
      }
    }
  }
`;
