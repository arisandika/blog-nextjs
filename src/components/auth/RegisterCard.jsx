import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import RegisterForm from "./RegisterForm";
import ErrorMessage from "@/components/ui/error-message";
import { useState } from "react";
import Link from "next/link";

const RegisterCard = () => {
  const [message, setMessage] = useState("");

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Already have an account?{" "}
          <Link href="/login" className="text-zinc-100">
            Sign in
          </Link>
        </CardDescription>
        <ErrorMessage text={message} />
      </CardHeader>
      <RegisterForm setMessage={setMessage} />
    </Card>
  );
};

export default RegisterCard;
