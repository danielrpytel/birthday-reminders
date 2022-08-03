import JSONData from "../data/friends.json";
import { getTurningYearsOld, getDaysToBday, getImgSrc } from "./GetAdditionalInfo";

function GetFriendsData() {
    
    const unsortedList = JSONData.friends.map( (friend) => {

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

        return (friendData);
    })

    const noEmptydateOfBirthProp = unsortedList.filter( (friend) => {
        return friend.dateOfBirth !== "";
    })

    const sortedList = noEmptydateOfBirthProp.sort((a, b) => a.daysToBday - b.daysToBday)

    return sortedList;
}

export default GetFriendsData;