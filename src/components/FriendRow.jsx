import { Link } from "react-router-dom";

function FriendRow({
	id,
	firstName,
	lastName,
	dateOfBirth,
	daysToBday,
	turningYearsOld,
	imgSrc,
	todayBday,
}) {
	const placeHolderSrc =
		process.env.PUBLIC_URL + "/people-img/img-placeholder.png";

	return (
		<div
			className="flex w-full h-32 md:w-3/5 md:rounded-md bg-blue-800 m-auto mb-2 drop-shadow-md"
			aria-label="friend row info"
		>
			<Link className="flex w-full" to={`/friend-info/${id}`}>
				{/* 
                Image block. Getting src path from friend object (/hooks/GetAdditionalInfo getImgSrc())
                If the image is not found then removes error displays img placeholder
            */}
				<div
					className="relative my-auto ml-1 lg:ml-5 min-w-fit"
					aria-label="picture box"
				>
					<img
						className="rounded-lg object-cover h-24 w-24 border border-black"
						src={imgSrc}
						alt="Person"
						onError={(e) => {
							e.target.onError = null;
							e.target.src = placeHolderSrc;
						}}
					/>
				</div>

				{/* Full name and date of birth block. flex col */}
				<div className="w-2/5 my-auto pl-2 lg:pl-10 mr-auto">
					<div className="my-2 text-white text-sm" aria-label="full name">
						{firstName} {lastName}
					</div>
					<div className="my-2 text-white text-xs" aria-label="date of birth">
						{dateOfBirth}
					</div>
				</div>

				{/* days to bday string block */}
				<div className="w-2/5 m-auto px-3">
					<div className="text-white text-base" aria-label="days to bday">
						{todayBday === false ? (
							<div>
								{daysToBday[1] === "hours" && daysToBday[0] <= 0 ? (
									<div>
										Turning {turningYearsOld} years in less than an hour!
									</div>
								) : (
									<div>
										Turning {turningYearsOld} years in {daysToBday[0]}{" "}
										{daysToBday[1]}.
									</div>
								)}
							</div>
						) : (
							<div>Turned {turningYearsOld} years today!</div>
						)}
					</div>
				</div>
			</Link>
		</div>
	);
}

export default FriendRow;
