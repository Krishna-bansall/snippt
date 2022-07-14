import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";;

import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="bg-slate-800">
			<div className="flex h-screen items-center justify-center">
				<Button>Get Started!</Button>
			</div>
		</div>
	);
};

export default Home;
