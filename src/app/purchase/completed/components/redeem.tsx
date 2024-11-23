"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button";
import { RedeemKey } from "@/server/redeemkey";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function RedeemComponent({serial, username, user_id}: {serial: string, username: string, user_id: string}) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button>
                    Redeem Vanityﾒ𝟶 lifetime for {username} (WIP)
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently redeem the Vanityﾒ𝟶 key for {username}. We are not responsible for any lost keys.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button onClick={() => {
                        toast.promise(async () => {
                            const response = await RedeemKey(serial, user_id);
                            if (response.status !== 200) {
                                throw new Error(response.error);
                            }

                            return response;
                        }, {
                            loading: "Redeeming lifetime Vanityﾒ𝟶 key...",
                            success: (data) => {
                                setOpen(false);
                                
                                router.push(`/purchase/claimed?key=${encodeURIComponent(data.user_key)}`);

                                return "Key redeemed successfully for " + username + "! You can now access Vanityﾒ𝟶 via #getscript in discord.";
                            },
                            error: (error_data) => {
                                setOpen(false);
                                return "Failed to redeem key: " + error_data.message;
                            }
                        });
                    }}>Continue</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}