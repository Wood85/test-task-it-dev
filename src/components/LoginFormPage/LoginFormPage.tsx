'use client';

import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { useMutation } from "@apollo/client";
import { REFRESH_TOKEN } from "@/apollo/requests";
import saveToken from "@/utils/saveToken";
import { useToast } from "@/hooks/use-toast"

import LoginForm from "../LoginForm/LoginForm";

const LoginFormPage = () => {
	const { toast } = useToast();
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
							toast({
								title: "GraphQL errors:",
								description: `${response.errors}`,
							});
							return;
						}
						saveToken(response.data.refreshToken);
						router.replace('/my-info');
					}
					catch (err) {
						toast({
							title: "Registration error:",
							description: `${err}`,
						})
					}
				})();
			}
		}
	}, [refreshToken, router, toast])

	return (
		<div className="flex items-center justify-items-center min-h-dvh">
			<main className="w-full min-h-full flex item-center justify-center ">
				<LoginForm />
	    </main>
		</div>
	)
}

export default LoginFormPage;