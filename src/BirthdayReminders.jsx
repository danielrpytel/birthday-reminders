import { Routes, Route } from "react-router-dom";

import UpcomingBirthdays from "./components/UpcomingBirthdays";
import GetFriendsData from "./hooks/GetFriendsData";
import FriendCard from "./components/FriendCard";

function BirthdayReminders() {

  const friendsData = GetFriendsData();

  return (
    <div className="pb-10 bg-gray-900 font-mono">
          <div className="py-10">
            <h1 className="text-center font-bold text-3xl text-white">
                Birthdays Reminder
            </h1>
        </div> 
        <Routes>
          <Route path="/" element={ <UpcomingBirthdays friendsData={friendsData}/> }/>
          <Route path="/friend-info/:id" element={ <FriendCard /> }/>
        </Routes>
    </div>
    );
}

export default BirthdayReminders;
