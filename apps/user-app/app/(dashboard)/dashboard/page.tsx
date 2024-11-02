import { getServerSession } from "next-auth";
import { Card } from "@repo/ui/card";
import { authOptions } from "../../lib/auth";
export default async  function() {

    const session = await getServerSession(authOptions);

    return (
        <div>
            {session && session.user ? (
                <div className="text-4xl text-blue-950 pt-8 mb-8 font-bold">
                Welcome, {session.user.name}!
                <div className="text-2xl text-blue-950 pt-8 mb-8 font-bold">
                    PayAU, your go to wallet in Australia 
                </div>
            </div>
           
            ) : (
               
                <div className="text-4xl text-blue-950 pt-8 mb-8 font-bold">
               Please log in to view your dashboard.
            </div>
            )}
        </div>
    );
}
