import { Routes, Route } from "react-router-dom";

import UpcomingBirthdays from "./components/UpcomingBirthdays";
import FriendCard from "./components/FriendCard";
import AllBirthdaysList from "./components/AllBirthdaysList";
import NotFound from "./components/NotFound";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function BirthdayReminders() {

  return (
    <div className="bg-gray-900 font-mono h-screen">
          <div className="py-5">
            <h1 className="text-center font-bold text-3xl text-white">
                Birthdays Reminder
            </h1>
        </div>  
        <Nav />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/birthday-reminders" element={ <UpcomingBirthdays /> }/>
            <Route path="/birthday-reminders/friend-info/:id" element={ <FriendCard /> }/>
            <Route path="/birthday-reminders/all-birthdays" element={ <AllBirthdaysList /> } />
          </Routes> 
        <Footer />
    </div>
    );
}

export default BirthdayReminders;
