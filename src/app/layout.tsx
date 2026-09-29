import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WebsiteTelemetry from "./website-telemetry";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "App Logger — Flutter observability, without the overhead",
  description: "Reliable cross-platform logging, device context, and a focused dashboard for Flutter teams.",
  keywords: ["Flutter logging", "app logs", "device monitoring", "Flutter observability", "error logging"],
  openGraph: {
    title: "App Logger — Know what your app is doing in the wild",
    description: "Reliable logs, real device context, and faster answers for Flutter teams.",
    type: "website",
  },
  icons: { icon: "/app-logger-icon.png", apple: "/app-logger-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={inter.variable}><body>{children}<WebsiteTelemetry /></body></html>;
}
