'use client';

import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";
import LoginFormPage from "@/components/LoginFormPage/LoginFormPage";


export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export default function Page() {

  return (
		<ApolloProvider client={client}>
		  <LoginFormPage />
	  </ApolloProvider>
  )
}
