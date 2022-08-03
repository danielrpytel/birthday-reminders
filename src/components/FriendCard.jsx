import { useParams } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";
import GetFriendData from "../hooks/GetFriendData";


function FriendCard() {

    let URLparams = useParams();
    const friend = GetFriendData( URLparams={URLparams});

    const placeHolderSrc = "/people-img/img-placeholder.png";
 
    let favActivity = "";
    let favDrink = "";
    
    if(friend.favActivity.length > 1) {
        favActivity = friend.favActivity.join(", ") + ".";
    } else {
        favActivity = friend.favActivity + ".";
    }
    
    if(friend.favDrinks.length > 1) {
        favDrink = friend.favDrinks.join(", ") + ".";
    } else {
        favDrink = friend.favDrinks + ".";
    }

    return(
        <div className="flex flex-col w-full lg:w-3/5 md:rounded-lg mx-auto bg-gradient-to-tr from-purple-800 to-blue-800">
            <HeaderTitle title="Friend's Birthday Info" />       
            <div className="w-full md:w-4/5 drop-shadow-md bg-blue-800 mx-auto mb-10"> 
                <div className="flex flex-col xl:flex-row w-full">
                    <div className="my-7">
                        <img className="rounded-lg object-cover mx-auto h-80 w-64 xl:ml-10 border border-black" src={friend.imgSrc} alt="Person" 
                        onError={(e) => {e.target.onError = null; e.target.src=placeHolderSrc}}/>
                    </div>
                    <div className="flex flex-col mx-auto xl:my-auto">
                        <div className="mb-6 text-center xl:text-left">
                            <h1 className="text-white text-xl">
                                {friend.fName} {friend.lName}
                            </h1>
                        </div>
                        <div className="mb-3 text-center xl:text-left">
                            <h2 className="text-white text-md">
                                {friend.dateOfBirth}
                            </h2>
                        </div>
                        <div className="mb-3 text-center xl:text-left">
                            <p className="text-white text-md">
                                Turning {friend.turningYearsOld} in {friend.daysToBday} days
                            </p>                      
                        </div>
                    </div>
                </div>  
                <div className="w-full mb-2">
                    <div className="flex flex-col">
                       <div className="my-4 mx-auto text-center">
                            <p className="text-slate-300 text-md">
                                Favorite Activity:
                            </p>
                            <p className="text-white text-md pt-3">
                                {favActivity}
                            </p>
                        </div>
                        <div className="my-4 mx-auto text-center">
                            <p className="text-slate-300 text-md">
                                Favorite Drink:
                            </p>           
                            <p className="text-white text-md pt-3">
                                {favDrink}
                            </p>         
                        </div> 
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default FriendCard;