import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/container";
import { AuthProvider } from "./context/authContext";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`main`}>
        <AuthProvider>
          <Navbar />
          <Container>{children}</Container>
        </AuthProvider>
      </body>
    </html>
  );
}
