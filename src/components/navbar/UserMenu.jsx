"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  User2Icon,
  SquarePen,
  Bookmark,
  Book,
  ChartColumnBig,
  BookCheck,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import API_URL from "@/utils/config";
import { useAuth } from "@/app/context/authContext";

const UserMenu = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
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

        if (response.ok) {
          const data = await response.json();

          if (data.data.role_as === 1) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } else {
          // Handle token expiration or other errors
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        // Remove token if an error occurs
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [setIsLoggedIn]);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
      setLoading(false);
      return;
    }

    try {
      await fetch(API_URL + "api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      router.replace("/login");
    }
  };

  const UserLinkMenu = isLoggedIn
    ? [
        { label: "Profile", href: "/dashboard", icon: User2Icon }, // No arrow function here
        { label: "Library", href: "/library", icon: Bookmark },
        { label: "Stories", href: "/stories", icon: Book },
        { label: "Stats", href: "/stats", icon: ChartColumnBig },
      ]
    : [
        { label: "Sign in", href: "/login", icon: User2Icon },
        { label: "Sign up", href: "/register", icon: BookCheck },
      ];

  if (loading)
    return (
      <>
        <Button variant="icon" size="icon">
          <User2Icon className="w-5 h-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </>
    );

  return (
    <>
      <DropdownMenu>
        {isLoggedIn && (
          <Button
            variant="icon"
            size="icon"
            className="hidden md:flex"
            onClick={() => router.push("/blog/new-story")}
          >
            <SquarePen className="w-5 h-5" />
            <span className="mx-2">Write</span>
          </Button>
        )}
        <DropdownMenuTrigger asChild>
          <Button variant="icon" size="icon">
            <User2Icon className="w-5 h-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {UserLinkMenu.map(({ label, href, icon: Icon }) => (
            <Link href={href} key={href}>
              <DropdownMenuItem className="flex items-center gap-4 ">
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </DropdownMenuItem>
            </Link>
          ))}
          {isLoggedIn && (
            <>
              <DropdownMenuSeparator />
              <Link href="/settings">
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserMenu;
