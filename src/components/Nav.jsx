import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<div className="w-full mb-2">
			<div className="flex flex-row justify-center text-white text-md">
				<NavLink
					end
					to=""
					className={({ isActive }) =>
						(isActive ? "bg-blue-500 text-black" : "") +
						"block w-1/2 lg:w-1/4 py-7 bg-blue-800 text-center mr-2 hover:bg-blue-500"
					}
				>
					Upcoming Birthdays
				</NavLink>

				<NavLink
					to="/all-birthdays"
					className={({ isActive }) =>
						(isActive ? "bg-blue-500 text-black" : "") +
						"block w-1/2 lg:w-1/4 py-7 bg-blue-800 text-center hover:bg-blue-500"
					}
				>
					All Birthdays
				</NavLink>
			</div>
		</div>
	);
}

export default Nav;
