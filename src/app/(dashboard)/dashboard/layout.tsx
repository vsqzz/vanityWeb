import { auth } from "@/auth";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { isUserAllowedOnDashboard } from "@/server/authutils";
import { maskEmail } from "@/server/stringutil";
import { Metadata, Viewport } from "next";
import { notFound, redirect } from "next/navigation";

const description = "Vanityﾒ𝟶 is the best free roblox script hub supporting games such as Blade Ball, Anime Ball, Dandy's World, pressure, fisch and TSB strongest battlegrounds";

export const metadata: Metadata = {
  title: {
    default: "dashboard",
    template: "%s - dashboard",
  },
  description: description,
  manifest: "/dashboard/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Vanityﾒ𝟶 dashboard",
  },
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

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session && session.user) {
    const isAuthorized = await isUserAllowedOnDashboard();

    if (!isAuthorized ) {
      return notFound();
    }
  } else {
    return redirect("/signin");
  }

  return <SidebarProvider>
    <AppSidebar
        session_data={{
            name: session.user.name ?? "unknown",
            email: maskEmail(session.user.email ?? "example@upio.dev"),
            avatar: session.user.image ?? "https://avatar.vercel.sh/42",
        }}
    />
    <SidebarInset>
      {children}
    </SidebarInset>
  </SidebarProvider>
}
