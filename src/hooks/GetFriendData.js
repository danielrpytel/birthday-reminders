import JSONData from "../data/friends.json";
import { getTurningYearsOld, getDaysToBday, getImgSrc } from "./GetAdditionalInfo";

function GetFriendData( { URLparams } ) {

    // id value from friend-info/{id}
    const params = parseInt(URLparams.id);

    // friend data from json file matching params id
    const friend = JSONData.friends.find((friend) => { return friend.id === params });
    
    if(friend === undefined) {
        return;
    }

    // New object with additional information (functions in ./GetAdditionalInfo file)
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

    // Returns single object
    return friendData;
}

export default GetFriendData;