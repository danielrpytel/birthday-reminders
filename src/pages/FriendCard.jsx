import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GetFriendData from "../hooks/GetFriendData";

import { FaArrowLeft } from "react-icons/fa";

function FriendCard() {
	const [friendData, setFriendData] = useState({});
	const urlParams = useParams();
	const navigate = useNavigate();

	const fetchData = async () => {
		try {
			const data = await GetFriendData(urlParams.id);
			setFriendData(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	// friend data matching params from json
	const placeHolderSrc =
		process.env.PUBLIC_URL + "/people-img/img-placeholder.png";

	return (
		<div className="flex flex-col w-full lg:w-3/5 md:rounded-lg mx-auto bg-gradient-to-tr from-purple-800 to-blue-800">
			<div className="flex flex-row mx-auto">
				<button onClick={() => navigate(-1)}>
					<FaArrowLeft className="my-auto mr-6 w-7 h-7 text-white hover:text-blue-500" />
				</button>
				<h2 className="py-5 font-bold text-2xl text-white">
					Friend's Birthday Info
				</h2>
			</div>
			{friendData === undefined ? (
				<div className="w-full h-[500px] md:w-4/5 mx-auto mt-9 text-center">
					<h1 aria-label="not found" className="text-2xl text-white">
						Friend not found
					</h1>
				</div>
			) : (
				<div className="w-full md:w-4/5 drop-shadow-md bg-blue-800 mx-auto mb-5">
					<div className="flex flex-col xl:flex-row w-full">
						{/* 
                        Image block. Getting src path from friend object (/hooks/GetAdditionalInfo getImgSrc())
                        If the image is not found then removes error displays img placeholder
                    */}
						<div className="my-7">
							<img
								className="rounded-lg object-cover mx-auto h-80 w-72 xl:ml-10 border border-black"
								src={friendData.imgSrc}
								alt="Person"
								onError={(e) => {
									e.target.onError = null;
									e.target.src = placeHolderSrc;
								}}
							/>
						</div>

						{/* Name, date of birth, and days to birthday block. XL screen flex row and small screen flex col */}
						<div className="flex flex-col mx-auto xl:my-auto">
							<div className="mb-6 text-center xl:text-left">
								<h1 className="text-white text-xl">
									{friendData.fName} {friendData.lName}
								</h1>
							</div>
							<div className="mb-3 text-center xl:text-left">
								<h2 className="text-white text-md">{friendData.dateOfBirth}</h2>
							</div>
							<div className="mb-3 text-center xl:text-left">
								{friendData.todayBday === false ? (
									<p className="text-white text-md">
										Turning {friendData.turningYearsOld} years in{" "}
										{friendData.daysToBday[0]} {friendData.daysToBday[1]}.
									</p>
								) : (
									<p className="text-white text-md">
										Turned {friendData.turningYearsOld} years today!
									</p>
								)}
							</div>
						</div>

						{/* Fav activity / drink block */}
					</div>
					<div className="w-full mb-2">
						<div className="flex flex-col">
							<div className="my-4 mx-auto text-center">
								<p className="text-slate-300 text-md">Favorite Activity:</p>
								<p className="text-white text-md pt-3">
									{friendData.favActivity}
								</p>
							</div>
							<div className="my-4 mx-auto text-center">
								<p className="text-slate-300 text-md">Favorite Drink:</p>
								<p className="text-white text-md pt-3">
									{friendData.favDrinks}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default FriendCard;
