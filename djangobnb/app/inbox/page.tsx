import Image from "next/image"
import Conversations from "../components/inbox/Conversations"
function InboxPage() {
    return (
        <main className="w-full mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-3xl">Inbox</h1>
            <Conversations/>
            <Conversations/>
            <Conversations/>
            <Conversations/>
            <Conversations/>
        </main>
    )
}    

export default InboxPage