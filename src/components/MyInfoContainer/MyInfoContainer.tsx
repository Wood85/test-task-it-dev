'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import MyInfoPage from "@/components/MyInfoPage/MyInfoPage";

function MyInfoContainer() {
	const router = useRouter();

	const [token, setToken] = useState('');

	useEffect(()=>{
		if(localStorage.getItem('tokenData')) {
			const dataJSON = localStorage.getItem('tokenData');
			if(dataJSON !== null) {
				const tokens = JSON.parse(dataJSON);
				const access = tokens.access_token;
				setToken(access);
			} else {
				router.replace('/');
			}
		} else {
			router.replace('/');
		}
	}, [router]);

  return (
		<div className="flex items-center justify-items-center min-h-screen">
			<main className="w-full min-h-full flex item-center justify-center ">
				{token !== '' && <MyInfoPage token={token}/>}
	  </main>
		</div>
  )
}

export default MyInfoContainer;
