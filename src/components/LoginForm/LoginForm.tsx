'use client';

import { ChangeEvent, useState } from "react";
import { useRouter } from 'next/navigation'
import { useMutation } from "@apollo/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CREATE_TOKEN } from "@/apollo/requests";
import saveToken from "@/utils/saveToken";


export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

function LoginForm() {
  const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const router = useRouter();

  const [createToken, {}] = useMutation(CREATE_TOKEN);

	const handleSubmit = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		try {
			const response = await createToken({
				variables: {
					email: emailValue,
					password: passwordValue
				}
			});

			if (response.errors) {
        console.error("GraphQL errors:", response.errors);
        return;
      }
			saveToken(response.data.login);
			router.push('/my-info');
		}
		catch (err) {
      console.error("Authorization error: ", err);
    }
	}

	const changeEmailInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value)
	};

	const changePasswordInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value)
	}

  return (
				<form onSubmit={handleSubmit}>
				  <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required value={emailValue} onChange={changeEmailInputValue}/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required value={passwordValue} onChange={changePasswordInputValue} />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">Sign in</Button>
            </CardFooter>
          </Card>
				</form>
  )
}

export default LoginForm;
