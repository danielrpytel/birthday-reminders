import moment from "moment";

export function getTurningYearsOld( date ) {

    if ( date.lenght === 0 ) {
        return
    }

    const currentDate = moment();
    const bDay = moment(date);

    var yearDifference = currentDate.diff(bDay, 'years')
    yearDifference += 1;

    return Math.abs(yearDifference);
}

export function getDaysToBday( date ) {

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

export function getImgSrc( fName, lName ) {

    const directory = "/people-img/";
    const imgName = `${fName}-${lName}`;
    const fileType = ".jpg";

    const imgSrc = `${directory}${imgName}${fileType}`;

    return imgSrc;
}