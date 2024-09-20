'use client';

// import { useRouter } from 'next/navigation'
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/apollo/requests";

interface Props {
	token: string;
}

// interface Request {
// 	data: {
//     myProfile: {
//       id: string;
//       name: string;
//       avatar: string;
//     }
//   }
// }

const MyInfoPage = (props: Props) => {

	const { token } = props;

	const bearerToken = `Bearer ${token}`;
	
	// const router = useRouter();
	const {data} = useQuery(GET_PROFILE, {context: {
		headers: {
			"Authorization": bearerToken
		}
	}});

	return (
		<div>
			{/* {data === undefined && <div></div>} */}
			{data !== undefined && (<div>
				<div>{data.myProfile.id}</div>
				<div>{data.myProfile.name}</div>
				<div>{data.myProfile.avatar}</div>
			</div>)}
		</div>
	)
}

export default MyInfoPage;