import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "My Portfolio",
  description: "Hi I am Mufaddal Chhatriwala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>   
      </head>
      <body className="bg">
        <Navbar />
        {children}
      </body>
      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"/>
    <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"/>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"/>
    </html>
  );
}
