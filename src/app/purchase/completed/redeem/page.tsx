"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [key, setKey] = useState<string | null>(null);
    
    return (
        <main className="flex justify-center items-center w-screen h-screen">
            <Card>
                <CardHeader>
                    <CardTitle>Vanityﾒ𝟶 - redeem (WIP)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row gap-2">
                        <Input placeholder="" value={key ?? ""} onChange={(event) => setKey(event.target.value)} className="text-[16px]" />
                        <Link href={``}>
                            <Button>Redeem Key</Button>
                        </Link>
                    </div>                    
                </CardContent>
            </Card>
        </main>
    )
}