import JSONData from "../data/friends.json";
import { getTurningYearsOld, getDaysToBday, getImgSrc } from "./GetAdditionalInfo";

function GetFriendData( { URLparams } ) {

    const params = parseInt(URLparams.id);

    const friend = JSONData.friends.find((friend) => { return friend.id === params });

    const friendData = {
        id: friend.id,
        fName: friend.fName,
        lName: friend.lName,
        dateOfBirth: friend.dateOfBirth,
        favDrinks: friend.favDrinks,
        favActivity: friend.favActivity,
        daysToBday: getDaysToBday(friend.dateOfBirth),
        turningYearsOld: getTurningYearsOld(friend.dateOfBirth),
        imgSrc: getImgSrc(friend.fName, friend.lName)
    }

    return friendData;
}

export default GetFriendData;