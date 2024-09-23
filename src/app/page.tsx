'use client';

import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";
import LoginFormPage from "@/components/LoginFormPage/LoginFormPage";

export default function Page() {

  return (
		<ApolloProvider client={client}>
		  <LoginFormPage />
	  </ApolloProvider>
  )
}
