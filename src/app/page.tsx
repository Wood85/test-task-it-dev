'use client';

import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";
import LoginForm from "@/components/LoginForm/LoginForm";


export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export default function Page() {

  return (
		<ApolloProvider client={client}>
		  <div className="flex items-center justify-items-center min-h-dvh">
			  <main className="w-full min-h-full flex item-center justify-center ">
				  <LoginForm />
	      </main>
		  </div>
	  </ApolloProvider>
  )
}
