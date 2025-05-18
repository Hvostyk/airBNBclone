
import { getUserId } from "../lib/action";
import Image from "next/image"
import apiService from "../services/apiService"
//  
import Conversations from "../components/inbox/Conversations"

export type UserType = {
    id: string;
    name: string;
    avatar_url:string;
}
export type ConversationType = {
    id: string;
    users: UserType[];
}


const InboxPage = async () => {
    const userId = await getUserId();

    if (!userId){
        return(
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>You need to be authenticated!</p>
            </main>
        )
    }

    const conversations = await apiService.get('/api/chat/')

    return (
        <main className="w-full mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-3xl">Inbox</h1>
                {conversations.map((conversation: ConversationType) => {
                    return (
                        <Conversations
                            key={conversation.id}
                            userId={userId}
                            conversation={conversation}
                        />
                        );
                })}
        </main>
    )
}    

export default InboxPage