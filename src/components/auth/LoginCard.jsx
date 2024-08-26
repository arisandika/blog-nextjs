import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import LoginForm from "@/components/auth/LoginForm";
import ErrorMessage from "@/components/ui/error-message";
import { useState } from "react";
import Link from "next/link";

const LoginCard = () => {
  const [message, setMessage] = useState("");

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>
          Don&apos;t have an account? <Link href="/register" className="text-zinc-100">Sign up</Link>
        </CardDescription>
        <ErrorMessage text={message} />
      </CardHeader>
      <LoginForm setMessage={setMessage} />
    </Card>
  );
};

export default LoginCard;
