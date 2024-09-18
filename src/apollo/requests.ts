import { gql } from "@apollo/client";

export const CREATE_TOKEN = gql`
  mutation createToken($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;