'use client';

import { MouseEvent } from "react";
import { useRouter } from 'next/navigation'
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/apollo/requests";
import { Button } from "@/components/ui/button"
import Header from "../Header/Header";
import Info from "../Info/Info";

interface Props {
	token: string;
}

const MyInfoPage = (props: Props) => {

	const { token } = props;

	const bearerToken = `Bearer ${token}`;
	
	const router = useRouter();
	const {data} = useQuery(GET_PROFILE, {context: {
		headers: {
			"Authorization": bearerToken
		}
	}});

	const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
    localStorage.setItem('tokenData', '');
		router.replace('/');
	}

	return (
		<div>
			{data !== undefined && (
				<div>
					<Header src={data.myProfile.avatar}/>
					<Info src={data.myProfile.avatar} name={data.myProfile.name}/>
				  <Button variant="outline" onClick={clickHandler}>Logout</Button>
			  </div>
		  )}
		</div>
	)
}

export default MyInfoPage;