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
		<div className="flex min-h-screen overflow-x-hidden">
			<main className="w-full min-h-full flex item-center flex-col">
				{token !== '' && <MyInfoPage token={token}/>}
	  </main>
		</div>
  )
}

export default MyInfoContainer;
