import Head from "next/head";
import Link from "next/link";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

export default function account() {
  const { user, logoutUser } = useContext(AuthContext);

  // if (!user) {
  //   return (
  //     <div>
  //       <p>Please login or register</p>
  //       <Link href="/">
  //         {" "}
  //         <a>Go back</a>
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Head>
        <title>Account Page</title>
        <meta
          name="description"
          content="The account page, view your orders and logout"
        />
      </Head>
      <h2>Account Page</h2>
      <p>Logged in as: {user?.email}</p>
      <a href="#" onClick={logoutUser}>
        Logout
      </a>
    </div>
  );
}
