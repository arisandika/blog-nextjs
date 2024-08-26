"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import API_URL from "@/utils/config";
import { useAuth } from "@/app/context/authContext";

const LoginForm = ({ setMessage }) => {
  const { setIsLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL + "api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(errorData.error || "An error occurred. Please try again.");
        return;
      }

      const data = await response.json();
      const roleAs = data.data.user.role_as;
      localStorage.setItem("token", data.data.token);

      setIsLoggedIn(true);

      switch (roleAs) {
        case 0:
          router.push("/dashboard");
          break;
        case 1:
          router.push("/dashboard-admin");
          break;
        default:
          setMessage("You do not have access to any dashboard");
          break;
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <form onSubmit={loginSubmit}>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Min 8 characters"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </CardFooter>
    </form>
  );
};

export default LoginForm;
