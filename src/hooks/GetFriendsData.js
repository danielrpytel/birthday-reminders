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
			daysToBday = [0, "days"];
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
	const sortedList = noEmptydateOfBirthProp.sort((a, b) => {
		if (a.daysToBday[0] === 0 && b.daysToBday[0] !== 0) {
			return -1; // 'a' is today's birthday, so it should come before 'b'
		} else if (b.daysToBday[0] === 0 && a.daysToBday[0] !== 0) {
			return 1; // 'b' is today's birthday, so it should come before 'a'
		} else if (a.daysToBday[0] === 0 && b.daysToBday[0] === 0) {
			if (a.daysToBday[1] === "hours" && b.daysToBday[1] !== "hours") {
				return -1; // 'a' is hours, so it should come before 'b'
			} else if (a.daysToBday[1] !== "hours" && b.daysToBday[1] === "hours") {
				return 1; // 'b' is hours, so it should come before 'a'
			}
		} else if (a.daysToBday[1] === "hours" && b.daysToBday[1] !== "hours") {
			return -1; // 'a' is hours, so it should come before 'b'
		} else if (a.daysToBday[1] !== "hours" && b.daysToBday[1] === "hours") {
			return 1; // 'b' is hours, so it should come before 'a'
		}

		// Both 'a' and 'b' are either today's birthday, hours, or days,
		// so sort based on the numerical value
		return a.daysToBday[0] - b.daysToBday[0];
	});
	console.log(sortedList);
	return sortedList;
}

export default GetFriendsData;
