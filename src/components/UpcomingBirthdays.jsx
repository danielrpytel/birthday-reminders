import { useState } from "react";

import GetFriendsData from "../hooks/GetFriendsData";
import BirthdayRow from "./BirthdayRow";
import HeaderTitle from "./HeaderTitle";
import FilterByDays from "./FilterByDays";

function UpcomingBirthdays() {

    const [filterDaysToBirthday, setFilterDays ] = useState(60);
    const filterDaysToBirthdayOptions = [30, 45, 60, 90, 120];
 
    // Filter data to show by how many days to birthday
    const birthdaysData = GetFriendsData();
    const upcomingBirthdaysData = birthdaysData.filter((friend) => {return friend.daysToBday <= filterDaysToBirthday})
    
    // If there are not upcoming birthdays return message with select filter
    if (upcomingBirthdaysData.length === 0) {
        return (
            <div className="flex flex-col w-full h-[500px] lg:w-3/5 md:rounded-lg mx-auto bg-gradient-to-tr from-purple-800 to-blue-800">
                
                {/* Select options component */}
                <FilterByDays 
                filterDaysOptions={filterDaysToBirthdayOptions}
                onOptionChange={setFilterDays}
                current={filterDaysToBirthday}
                />
                <div className="text-center w-full mt-5">
                    <p className="text-white text-4xl">
                        No upcoming birthdays!
                    </p>
                </div>
            </div>
        )
    }

    return(
        <div className="flex flex-col w-full h-[720px] lg:w-3/5 md:rounded-lg mx-auto bg-gradient-to-tr from-purple-800 to-blue-800">

            <HeaderTitle title={"Upcoming Birthdays"} />

            {/* Select options component */}
            <FilterByDays 
                filterDaysOptions={filterDaysToBirthdayOptions}
                onOptionChange={setFilterDays}
                current={filterDaysToBirthday}
                />
            <div className="flex-1 max-h-full overflow-auto mb-5">

            {/* Display all upcoming birthdays in BirthdayRow component */}
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