import { Righteous } from "next/font/google";
import "./globals.css";

const inter = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "David Laid Workouts",
  description: "Best Place to plan your workouts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
