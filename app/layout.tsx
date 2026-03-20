import "./globals.css";
import { Italianno } from "next/font/google";

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={italianno.className}>
        {children}
      </body>
    </html>
  );
}
