import { useEffect, useState } from "react";

import GetFriendsData from "../hooks/GetFriendsData";
import FriendRow from "../components/FriendRow";
import HeaderTitle from "../components/HeaderTitle";
import FilterByDays from "../components/FilterByDays";

function UpcomingBirthdays() {
	const [filterDaysToBirthday, setFilterDays] = useState(60);
	const filterDaysToBirthdayOptions = [30, 45, 60, 90, 120];

	const [birthdaysData, setBirthdaysData] = useState([{}]);

	const fetchData = async () => {
		try {
			let data = await GetFriendsData();
			let filteredData = data.filter((friend) => {
				return friend.daysToBday[0] <= filterDaysToBirthday;
			});
			setBirthdaysData(filteredData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [filterDaysToBirthday]);

	return (
		<div className="flex flex-col w-full h-[720px] lg:w-3/5 md:rounded-lg mx-auto bg-gradient-to-tr from-purple-800 to-blue-800">
			<HeaderTitle title={"Upcoming Birthdays"} />

			{/* Select options component */}
			<FilterByDays
				filterDaysOptions={filterDaysToBirthdayOptions}
				onOptionChange={setFilterDays}
				current={filterDaysToBirthday}
			/>
			{birthdaysData.length === 0 ? (
				<div className="text-center w-full mt-5">
					<p className="text-white text-4xl">No upcoming birthdays!</p>
				</div>
			) : (
				<div className="flex-1 max-h-full overflow-auto mb-5">
					{/* Display all upcoming birthdays in BirthdayRow component */}
					{birthdaysData.map((friend) => (
						<FriendRow
							key={friend.fName + friend.lName + friend.id}
							id={friend.id}
							firstName={friend.fName}
							lastName={friend.lName}
							dateOfBirth={friend.dateOfBirth}
							daysToBday={friend.daysToBday}
							turningYearsOld={friend.turningYearsOld}
							imgSrc={friend.imgSrc}
							todayBday={friend.todayBday}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default UpcomingBirthdays;
