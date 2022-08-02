
function getImgSrc( fName, lName ) {

    const directory = "people-img/";
    const imgName = `${fName}-${lName}`;
    const fileType = ".jpg";

    const imgSrc = `${directory}${imgName}${fileType}`;
    
    return imgSrc;
}

function BirthdayRow( {firstName, lastName, dateOfBirth, daysToBday, turningYearsOld} ) {

    const imgSrc = getImgSrc(firstName, lastName);
    const placeHolderSrc = "people-img/img-placeholder.png";

    return(
        <div className="flex w-full h-28 md:w-3/5 md:rounded-md bg-blue-700 m-auto mb-2 drop-shadow-md">
            <div className="relative my-auto ml-1 lg:ml-5 min-w-fit">

                <img className="rounded-lg object-cover h-20 w-20 border border-black" src={imgSrc} alt="Person"
                onError={(e) => {e.target.onError = null; e.target.src=placeHolderSrc}}/>

            </div>
            <div className="w-2/5 my-auto pl-2 lg:pl-10 mr-auto">
                <div className="my-2 text-white text-sm">
                    {firstName} {lastName}
                </div>
                <div className="my-2 text-white text-xs">
                    {dateOfBirth}
                </div>
            </div>
            <div className="w-2/5 m-auto px-3">
                <div className="text-white text-base">
                    Turning {turningYearsOld} in {daysToBday} days
                </div>
            </div>
        </div>
    )
}

export default BirthdayRow;