'use client';

import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { useMutation } from "@apollo/client";
import { REFRESH_TOKEN } from "@/apollo/requests";
import saveToken from "@/utils/saveToken";

import LoginForm from "../LoginForm/LoginForm";

const LoginFormPage = () => {
	const router = useRouter();
	const [refreshToken, {}] = useMutation(REFRESH_TOKEN);

	useEffect(()=>{
		if(localStorage.getItem('tokenData')) {
			const dataJSON = localStorage.getItem('tokenData');
			if(dataJSON !== null) {
				const token = JSON.parse(dataJSON);
				(async () => {
					try {
						const response = await refreshToken({
							variables: {
								refreshToken: token.refresh_token
							}
						});
			
						if (response.errors) {
							console.error("GraphQL errors:", response.errors);
							return;
						}
						saveToken(response.data.refreshToken);
						router.replace('/my-info');
					}
					catch (err) {
						console.error("Registration error:", err);
					}
				})();
			}
		}
	}, [refreshToken, router])

	return (
		<div className="flex items-center justify-items-center min-h-dvh">
			<main className="w-full min-h-full flex item-center justify-center ">
				<LoginForm />
	    </main>
		</div>
	)
}

export default LoginFormPage;