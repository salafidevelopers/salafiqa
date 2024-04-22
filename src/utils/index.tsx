/**
 * Several little utilities for this project.
 *
 */

import { clsx } from "clsx";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export const convertToUrlFriendly = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters except whitespace and hyphens
    .replace(/\s+/g, "-") // Replace whitespace with hyphens
    .replace(/--+/g, "-") // Replace consecutive hyphens with a single hyphen
    .trim(); // Trim leading and trailing whitespace
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Function to get the current date in the Islamic (Hijri) calendar
const getIslamicDate = () => {
  const today = new Date();
  const saudiArabiaTime = today.toLocaleString("en-US", {
    timeZone: "Asia/Riyadh",
  });
  const [month, day, year] = saudiArabiaTime
    .split("/")
    .map((str) => parseInt(str));
  const islamicDate = new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
  return islamicDate;
};

// Function to get the current date in the Gregorian calendar
const getGregorianDate = () => {
  const today = new Date();
  const gregorianDate = today.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Riyadh",
  });
  return gregorianDate;
};

// Function to get the current date in the desired format
export const getCurrentDate = () => {
  const islamicDate = getIslamicDate();
  const gregorianDate = getGregorianDate();
  return `${gregorianDate} - ${islamicDate}`;
};
