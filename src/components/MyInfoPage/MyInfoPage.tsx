'use client';

import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/apollo/requests";
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
	
	const {data} = useQuery(GET_PROFILE, {context: {
		headers: {
			"Authorization": bearerToken
		}
	}});


	return (
		<div className="h-full">
			{data !== undefined && (
				<div className="flex flex-col h-full">
					<Header src={data.myProfile.avatar}/>
					<Info src={data.myProfile.avatar} name={data.myProfile.name}/>
					<div className="bg-[#F0F3F8] flex grow w-full">
					  <div className="flex max-w-8xl w-full mx-auto gap-x-3 max-[1320px]:gap-x-[5px] justify-center">
							<aside className="h-full w-[18.5%] max-[1320px]:w-[250px] flex px-5 relative max-[1210px]:hidden">
								<div className="h-full w-[calc(100%-40px)] absolute -top-4">
								  <Contacts />
								</div>
							</aside>
							<section className="max-w-[1040px] w-full">
								<Content />
							</section>
						</div>
					</div>
			  </div>
		  )}
		</div>
	)
}

export default MyInfoPage;