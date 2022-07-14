import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				Signed in as {session!.user!.email} <br />
				<Button onClick={() => signOut()}>Sign out</Button>
			</>
		);
	}

	return (
		<div className="bg-slate-800">
			<div className="flex flex-row h-screen items-center justify-center">
				<h1 className="text-white">Not Signed In RN!</h1> <br />
				<Button onClick={() => signIn()}>Sign In</Button>
			</div>
		</div>
	);
};

export default Home;
