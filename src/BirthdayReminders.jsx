import { Routes, Route } from "react-router-dom";

import UpcomingBirthdays from "./components/UpcomingBirthdays";
import GetFriendsData from "./hooks/GetFriendsData";
import FriendCard from "./components/FriendCard";
import AllBirthdaysList from "./components/AllBirthdaysList";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function BirthdayReminders() {

  const friendsData = GetFriendsData();

  return (
    <div className="bg-gray-900 font-mono h-screen">
          <div className="py-5">
            <h1 className="text-center font-bold text-3xl text-white">
                Birthdays Reminder
            </h1>
        </div> 
        <Nav />
        <Routes>
          <Route path="/" element={ <UpcomingBirthdays friendsData={friendsData}/> }/>
          <Route path="/friend-info/:id" element={ <FriendCard /> }/>
          <Route path="/all-birthdays" element={ <AllBirthdaysList friendsData={friendsData}/> } />
        </Routes>
        <Footer />
    </div>
    );
}

export default BirthdayReminders;
