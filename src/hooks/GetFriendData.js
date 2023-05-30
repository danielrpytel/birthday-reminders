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

	// New object with additional information (functions in ./GetAdditionalInfo file)
	const friendData = {
		id: friend.id,
		fName: friend.fName,
		lName: friend.lName,
		dateOfBirth: friend.dateOfBirth,
		favDrinks: getFavString(friend.favDrinks),
		favActivity: getFavString(friend.favActivity),
		daysToBday: getDaysToBday(friend.dateOfBirth),
		turningYearsOld: getTurningYearsOld(friend.dateOfBirth),
		imgSrc: getImgSrc(friend.fName, friend.lName),
		todayBday: checkBday(friend.dateOfBirth),
	};
	console.log("FriendData", friendData);
	// Returns single object
	return friendData;
}

export default GetFriendData;
