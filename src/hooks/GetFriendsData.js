import moment from "moment";
import JSONData from "../data/friends.json";

function getTurningYearsOld( date ) {

    if ( date.lenght === 0 ) {
        return
    }

    const currentDate = moment();
    const bDay = moment(date);

    var yearDifference = currentDate.diff(bDay, 'years')
    yearDifference += 1;

    return Math.abs(yearDifference);
}

function getDaysToBday( date ) {

    if ( date.lenght === 0 ) {
     return   
    }

    const currentDate = moment();
    const bDay = moment(date);
    const yearDifference = getTurningYearsOld(date);

    bDay.add(yearDifference, 'years');

    const dayDifference = currentDate.diff(bDay, 'days');

    return Math.abs(dayDifference);
}

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
            turningYearsOld: getTurningYearsOld(friend.dateOfBirth)
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