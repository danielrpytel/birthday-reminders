import moment from "moment";

const momentFormat = "MMMM D YYYY";
const checkBdayFormat = "M D";

// Get turning years old from DOB date
export function getTurningYearsOld(date) {
	if (date.lenght === 0) {
		return;
	}

	const currentDate = moment();
	const bDay = moment(date, momentFormat);

	//Getting difference and adding 1 year for turning years old
	var yearDifference = currentDate.diff(bDay, "years");
	yearDifference += 1;

	// moment.diff() returns negative difference, used math.abs for positive value
	return Math.abs(yearDifference);
}

// Get days left for next birthday
export function getDaysToBday(date) {
	if (date.lenght === 0) {
		return;
	}

	const currentDate = moment();
	const bDay = moment(date, momentFormat);
	const yearDifference = getTurningYearsOld(date);

	// Adding turning years old to have only days to next birthday
	bDay.add(yearDifference, "years");

	const dayDifference = Math.abs(currentDate.diff(bDay, "days"));
	// Hours difference;
	const hours = moment.duration(bDay.diff(currentDate));
	const hoursDifference = Math.floor(hours.asHours());

	if (dayDifference === 0) {
		return [hoursDifference + 1, "hours"];
	}

	return [dayDifference + 1, "days"];
}

// Creating src path to access friend's picture
export function getImgSrc(fName, lName) {
	const directory = "/people-img/";
	const imgName = `${fName}-${lName}`;
	const fileType = ".jpg";

	const imgSrc = process.env.PUBLIC_URL + `${directory}${imgName}${fileType}`;

	return imgSrc;
}

export function checkBday(bDay) {
	const currentDate = moment().format(checkBdayFormat);
	const birthDay = moment(bDay, momentFormat).format(checkBdayFormat);

	return currentDate === birthDay;
}
