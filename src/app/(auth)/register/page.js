"use client";
import { useEffect, useState } from "react";
import RegisterCard from "@/components/auth/RegisterCard";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/authContext";

const RegisterPage = () => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
      setLoading(false);
      return;
    } else {
      router.push("/dashboard");
    }
  }, [router, setIsLoggedIn, setLoading]);

  return (
    <div className="relative flex items-center justify-center w-full h-screen -mt-28">
      <RegisterCard
        message={message}
        errors={errors}
        setMessage={setMessage}
        setErrors={setErrors}
      />
    </div>
  );
};

export default RegisterPage;
