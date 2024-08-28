"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API_URL from "@/utils/config";
import Loading from "@/components/ui/loading";
import DashboardDetail from "./DashboardDetail";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login");
        setIsLoggedIn(false);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(API_URL + "api/verify-token", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
          if (data.data.role_as !== 1) {
            router.replace("/login");
          } else {
            setAuthorized(true);
            setLoading(false);
          }
        } else {
          router.replace("/login");
        }
      } catch (error) {
        router.replace("/login");
      }
    };

    verifyToken();
  }, [router]);

  if (loading) {
    return <Loading height="h-screen" margintop={"-mt-28"} />;
  }

  const notify = () =>
    toast.error("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  return (
    <>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default Dashboard;
