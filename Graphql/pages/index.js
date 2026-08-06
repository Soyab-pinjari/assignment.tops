import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return <button onClick={() => signIn("google")}>Login with Google</button>;
  }

  return (
    <div>
      <h2>Welcome</h2>
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
