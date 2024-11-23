import { redirect } from "next/navigation"

const products = {
    "lifetime": "https://Vanityﾒ𝟶.sell.app/product/Vanityﾒ𝟶-lifetime-key?store=Vanityﾒ𝟶&quantity=1&data=faq"
}

export default function Page({ params }: { params: { key_type: string } }) {
    let redirectURI = "/shop";
    if (params.key_type in products) redirectURI = products[params.key_type as keyof typeof products] as string;
    
    return redirect(redirectURI);
}