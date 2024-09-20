'use client';

import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";

import MyInfoContainer from "@/components/MyInfoContainer/MyInfoContainer";


function MyInfo() {

  return (
		<ApolloProvider client={client}>
      <MyInfoContainer/>
		</ApolloProvider>
  )
}

export default MyInfo;
