import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { sql } from "@vercel/postgres";
import { notFound } from "next/navigation";
import { RedeemComponent } from "./components/redeem";
import CopyButton from "@/components/copy-button";
import { Input } from "@/components/ui/input";

export default async function Page({
    searchParams
}: {
    searchParams?: { [key: string]: string | undefined };
}) {
    if (!searchParams) {
        return notFound();
    }

    const session = await auth();
    const serialParam = searchParams.serial;

    if (!serialParam) {
        return notFound();
    }

    const serials = serialParam.split(",");
    
    if (serials.length === 0) {
        return notFound();
    }

    if (serials.length === 1) {
        const serial = serials[0];
        const { rows } = await sql`SELECT * FROM Vanityﾒ𝟶_keys WHERE serial = ${serial}`;
    
        if (rows.length === 0 || rows[0].claimed === true) {
            return notFound();
        }
    
        return (
            <main className="flex justify-center items-center flex-col h-screen">
                <Card className="max-w-[475px]">
                    <CardHeader>
                        <CardTitle>Vanityﾒ𝟶 key successful!</CardTitle>
                        <CardDescription>
                            Thank you for your support!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {session && session.user ? (
                            <>
                                <div className="flex justify-center">
                                    <RedeemComponent serial={serial} username={session.user.name ?? "unknown"} user_id={session.user.id || "skibidiSigma"} />
                                </div>
    
    
                                <Separator className="mt-5 mb-5" />
                                <div className="flex items-center justify-between">                                
                                    <div className="flex flex-col">
                                        <p>
                                            Logged in as {session.user.name}
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            Not you? Sign out.
                                        </p>
                                    </div>
                                    <form action={async () => {
                                        "use server"
                                        await signOut();
                                    }}>
                                        <Button variant={"destructive"}>
                                            Sign Out
                                        </Button>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                <form action={async () => {
                                    "use server"
                                    await signIn("discord");
                                }}>
                                    <Button>
                                        Login with Discord
                                    </Button>
                                </form>
                            </>
                        )}
                    </CardContent>
                </Card>
                <p className="text-sm mt-2">
                    <span className="text-muted-foreground">Order ID:</span> {rows[0].order_id}
                </p>
            </main>
        )
    }
}