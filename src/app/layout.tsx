import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"

const description = "Vanityﾒ𝟶 is the best free roblox script hub supporting games such as doors, 3008, room & doors, pressure, fisch and build a boat for treasure";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: "Vanityﾒ𝟶",
    template: "%s | Vanityﾒ𝟶",
  },
  description: description,
  openGraph: {
    description: description,
		images: 'https://www.Vanityﾒ𝟶.cc/icon.png',
	},
  keywords: [
    "Vanityﾒ𝟶",
    "roblox",
    "script",
    "doors",
    "3008",
    "room & doors",
    "r&d",
    "pressure",
    "fisch",
    "babft",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
