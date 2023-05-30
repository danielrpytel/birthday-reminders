import JSONData from "../data/friends.json";
import {
	getTurningYearsOld,
	getDaysToBday,
	getImgSrc,
	checkBday,
} from "./GetAdditionalInfo";

function GetFriendsData() {
	// Map all friends from json file, days to birthday not sorted and might have empty values
	const unsortedList = JSONData.friends.map((friend) => {
		let daysToBday;
		let turningYearsOld = getTurningYearsOld(friend.dateOfBirth);
		const checkForBday = checkBday(friend.dateOfBirth);

		if (checkForBday) {
			daysToBday = 0;
			turningYearsOld--;
		} else {
			daysToBday = getDaysToBday(friend.dateOfBirth);
		}

		// New object with additional information (functions in ./GetAdditionalInfo file)
		const friendData = {
			id: friend.id,
			fName: friend.fName,
			lName: friend.lName,
			dateOfBirth: friend.dateOfBirth,
			daysToBday: daysToBday,
			turningYearsOld: turningYearsOld,
			imgSrc: getImgSrc(friend.fName, friend.lName),
			todayBday: checkForBday,
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
