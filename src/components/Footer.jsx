function Footer() {
	return (
		<footer className="w-full mt-auto">
			<div className="flex flex-col text-white text-xs my-4">
				<div className="mx-auto mb-2">
					Designed and Developed by Daniel Pytel
				</div>
				<div className="mx-auto">
					Documentation and code on:{" "}
					<a
						className="hover:text-blue-500"
						href="https://github.com/danielrpytel/birthday-reminders"
					>
						GitHub
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
