import JSONData from "../data/friends.json";
import {
	getTurningYearsOld,
	getDaysToBday,
	getImgSrc,
} from "./GetAdditionalInfo";

function GetFriendsData() {
	// Map all friends from json file, days to birthday not sorted and might have empty values
	const unsortedList = JSONData.friends.map((friend) => {
		// New object with additional information (functions in ./GetAdditionalInfo file)
		const friendData = {
			id: friend.id,
			fName: friend.fName,
			lName: friend.lName,
			dateOfBirth: friend.dateOfBirth,
			daysToBday: getDaysToBday(friend.dateOfBirth),
			turningYearsOld: getTurningYearsOld(friend.dateOfBirth),
			imgSrc: getImgSrc(friend.fName, friend.lName),
		};

		return friendData;
	});

	// Removes objects with empty date of birth
	const noEmptydateOfBirthProp = unsortedList.filter((friend) => {
		return friend.dateOfBirth !== "";
	});

	// Sorting objects in ascending order of days to birthday value
	const sortedList = noEmptydateOfBirthProp.sort(
		(a, b) => a.daysToBday - b.daysToBday
	);

	return sortedList;
}

export default GetFriendsData;
