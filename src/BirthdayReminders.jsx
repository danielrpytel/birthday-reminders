import UpcomingBirthdays from "./components/UpcomingBirthdays";
import GetFriendsData from "./hooks/GetFriendsData";

function BirthdayReminders() {

  const friendsData = GetFriendsData();

  return (
    <div className="h-screen w-screen bg-gray-900 font-mono">
          <div className="py-10">
            <h1 className="text-center font-bold text-3xl text-white">
                Birthdays Reminder
            </h1>
        </div> 
      <UpcomingBirthdays friendsData={friendsData} />
    </div>
    );
}

export default BirthdayReminders;
