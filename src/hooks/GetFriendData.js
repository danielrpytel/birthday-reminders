import JSONData from "../data/friends.json";
import {
	getTurningYearsOld,
	getDaysToBday,
	getImgSrc,
	checkBday,
} from "./GetAdditionalInfo";

function GetFriendData(urlParams) {
	const params = parseInt(urlParams);

	// friend data from json file matching params id
	const friend = JSONData.friends.find((friend) => {
		return friend.id === params;
	});

	if (friend === undefined) {
		return;
	}

	const getFavString = (favorite) => {
		let string = "";
		if (favorite.length > 1) {
			string = favorite.join(", ") + ".";
		} else {
			string = favorite + ".";
		}
		return string;
	};

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
		favDrinks: getFavString(friend.favDrinks),
		favActivity: getFavString(friend.favActivity),
		daysToBday: daysToBday,
		turningYearsOld: turningYearsOld,
		imgSrc: getImgSrc(friend.fName, friend.lName),
		todayBday: checkForBday,
	};
	console.log("FriendData", friendData);
	// Returns single object
	return friendData;
}

export default GetFriendData;
