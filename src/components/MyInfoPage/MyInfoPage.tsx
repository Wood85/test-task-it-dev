'use client';

// import { MouseEvent } from "react";
// import { useRouter } from 'next/navigation'
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/apollo/requests";
// import { Button } from "@/components/ui/button"
import Header from "../Header/Header";
import Info from "../Info/Info";
import Contacts from "../Contacts/Contacts";
import Content from "../Content/Content";

interface Props {
	token: string;
}

const MyInfoPage = (props: Props) => {

	const { token } = props;

	const bearerToken = `Bearer ${token}`;
	
	// const router = useRouter();
	const {data} = useQuery(GET_PROFILE, {context: {
		headers: {
			"Authorization": bearerToken
		}
	}});

	// const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
	// 	event.preventDefault();
  //   localStorage.setItem('tokenData', '');
	// 	router.replace('/');
	// }

	return (
		<div className="h-full">
			{data !== undefined && (
				<div className="flex flex-col h-full">
					<Header src={data.myProfile.avatar}/>
					{/* <Info src={data.myProfile.avatar} name={data.myProfile.name}/>
				  <Button variant="outline" onClick={clickHandler}>Logout</Button>
					<div className="bg-[#F0F3F8] flex grow">
					  <div className="flex max-w-8xl w-full mx-auto px-16 gap-x-14">
							<aside className="h-full w-[18.5%] flex px-5 relative">
								<div className="h-full absolute -top-4">
								  <Contacts />
								</div>
							</aside>
							<section className="max-w-[1040px] w-full">
								<Content />
							</section>
						</div>
					</div> */}
			  </div>
		  )}
		</div>
	)
}

export default MyInfoPage;