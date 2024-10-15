"use client";
import { useEffect, useState } from "react";
import LoginCard from "@/components/auth/LoginCard";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/dashboard");
      return;
    }
  }, [router]);

  return (
    <div className="relative flex items-center justify-center w-full h-screen -mt-28">
      <LoginCard
        message={message}
        errors={errors}
        setMessage={setMessage}
        setErrors={setErrors}
      />
    </div>
  );
};

export default LoginPage;
