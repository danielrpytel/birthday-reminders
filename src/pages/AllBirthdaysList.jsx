import { useState, useEffect } from "react";
import GetFriendsData from "../hooks/GetFriendsData";
import HeaderTitle from "../components/HeaderTitle";
import BirthdayRow from "../components/BirthdayRow";

function AllBirthdays() {
	const [allBirthdaysData, setAllBirthdaysData] = useState([{}]);

	const fetchData = async () => {
		try {
			let data = await GetFriendsData();
			setAllBirthdaysData(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="flex flex-col w-full h-[700px] lg:w-3/5 md:rounded-lg mx-auto bg-gradient-to-tr from-purple-800 to-blue-800">
			<HeaderTitle title={"All Birthdays"} />

			<div className="flex-1 max-h-full overflow-auto mb-5">
				{/* Display all birthdays in BirthdayRow component */}
				{allBirthdaysData.map((friend) => (
					<BirthdayRow
						key={friend.fName + friend.lName + friend.id}
						id={friend.id}
						firstName={friend.fName}
						lastName={friend.lName}
						dateOfBirth={friend.dateOfBirth}
						daysToBday={friend.daysToBday}
						turningYearsOld={friend.turningYearsOld}
						imgSrc={friend.imgSrc}
					/>
				))}
			</div>
		</div>
	);
}

export default AllBirthdays;
