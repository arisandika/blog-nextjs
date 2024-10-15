import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import LoginForm from "@/components/auth/LoginForm";
import ErrorMessage from "@/components/ui/error-message";
import { useEffect, useState } from "react";
import Link from "next/link";

const LoginCard = () => {
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const successMessage = sessionStorage.getItem("successMessage");
    if (successMessage) {
      setSuccessMessage(successMessage);
      sessionStorage.removeItem("successMessage"); // Menghapus message setelah ditampilkan
    }
  }, []);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>
          Don&apos;t have an account? <Link href="/register" className="text-zinc-100">Sign up</Link>
        </CardDescription>
        <small className="text-blue-500">{successMessage}</small>
        <ErrorMessage text={message} />
      </CardHeader>
      <LoginForm setMessage={setMessage} />
    </Card>
  );
};

export default LoginCard;
