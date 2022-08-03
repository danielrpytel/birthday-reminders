import moment from "moment";

// Get turning years old from DOB date
export function getTurningYearsOld( date ) {

    if ( date.lenght === 0 ) {
        return
    }

    const currentDate = moment();
    const bDay = moment(date);

    //Getting difference and adding 1 year for turning years old
    var yearDifference = currentDate.diff(bDay, 'years')
    yearDifference += 1;

    // moment.diff() returns negative difference, used math.abs for positive value
    return Math.abs(yearDifference);
}

// Get days left for next birthday
export function getDaysToBday( date ) {

    if ( date.lenght === 0 ) {
     return   
    }

    const currentDate = moment();
    const bDay = moment(date);
    const yearDifference = getTurningYearsOld(date);

    // Adding turning years old to have only days to next birthday
    bDay.add(yearDifference, 'years');

    const dayDifference = currentDate.diff(bDay, 'days');

    // moment.diff() returns negative difference, used math.abs for positive value
    return Math.abs(dayDifference);
}

// Creating src path to access friend's picture
export function getImgSrc( fName, lName ) {

    const directory = "/people-img/";
    const imgName = `${fName}-${lName}`;
    const fileType = ".jpg";

    const imgSrc = `${directory}${imgName}${fileType}`;

    return imgSrc;
}