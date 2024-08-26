"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import API_URL from "@/utils/config";

const RegisterForm = ({ setMessage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const registerSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL + "api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem("successMessage", data.message);
        router.push("/login");
      } else {
        setMessage(data.errors.email || data.errors.password);
      }
    } catch {
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <form onSubmit={registerSubmit}>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          Sign Up
        </Button>
      </CardFooter>
    </form>
  );
};

export default RegisterForm;
