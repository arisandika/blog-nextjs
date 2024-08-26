"use client";
import { useEffect, useState } from "react";
import RegisterCard from "@/components/auth/RegisterCard";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
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
