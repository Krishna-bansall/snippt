import { Button } from "@nextui-org/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="h-screen w-screen bg-black">
			<div className="flex justify-center">
				<Button className="flex">Get Started!</Button>
			</div>
		</div>
	);
};

export default Home;
