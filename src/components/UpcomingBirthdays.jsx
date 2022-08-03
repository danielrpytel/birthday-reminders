import BirthdayRow from "./BirthdayRow";
import HeaderTitle from "./HeaderTitle";

function UpcomingBirthdays( friends ) {

    const upcomingBirthdaysData = friends.friendsData;

    return(
        <div className="flex flex-col w-full h-4/5 lg:w-3/5 md:rounded-lg mx-auto bg-gradient-to-tr from-purple-800 to-blue-800">

            <HeaderTitle title={"Upcoming Birthdays"} />

            <div className="flex-1 max-h-full overflow-auto mb-5">

                {upcomingBirthdaysData.map((friend) => (
                        <BirthdayRow
                            key={friend.id}
                            id={friend.id}
                            firstName={friend.fName}
                            lastName={friend.lName}
                            dateOfBirth={friend.dateOfBirth}
                            daysToBday={friend.daysToBday}
                            turningYearsOld={friend.turningYearsOld}
                            imgSrc={friend.imgSrc}
                        />
                ))}

            </div>
        </div>
    );
}

export default UpcomingBirthdays;