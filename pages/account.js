import { useContext, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import AuthContext from "../context/AuthContext";
import { API_URL } from "../utils/urls";

const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          setLoading(true);
          const token = getToken();
          const order_res = await fetch(`${API_URL}/orders`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await order_res.json();
          setOrders(data);
        } catch (error) {
          setOrders([]);
        }
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  return orders;
};

export default function account() {
  const { user, logoutUser, getToken } = useContext(AuthContext);

  const { orders, loading } = useOrders(user, getToken);

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

      <h3>Your Orders</h3>
      {loading && <p>Loading your orders</p>}
      {orders?.map((order) => {
        return (
          <div key={order.id}>
            {new Date(order.created_at).toLocaleDateString("en-EN")}{" "}
            {order.product.name} ${order.total} {order.status}
          </div>
        );
      })}
      <hr />
      <h2>Account Page</h2>
      <p>Logged in as: {user?.email}</p>
      <a href="#" onClick={logoutUser}>
        Logout
      </a>
    </div>
  );
}
