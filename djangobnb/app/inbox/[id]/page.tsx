import apiService from "@/app/services/apiService";
import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import { getUserId } from "@/app/lib/action";
import { getAccessToken } from "@/app/lib/action";
import { strict } from "assert";
import { UserType } from "../page";

export type MessageType = {
  id: string;
  name: string;
  body: string;
  conversationId: string;
  sent_to: UserType;
  created_by: UserType;
};

// Explicitly type the props according to Next.js App Router's expectations
interface ConversationPageProps {
  params: {
    id: string;
  };
}

interface IConversationProps{
  params: Promise<{
    id: string;
  }>;
};  

async function ConversationPage(props : IConversationProps) {
  const {id} = await props.params
  const token = await getAccessToken();
  const userId = await getUserId();

  if (!userId || !token) {
    return (
      <main className="max-w-[1500px] mx-auto px-6 py-12">
        <p>You need to be authenticated!</p>
      </main>
    );
  }

  const conversation = await apiService.get(`/api/chat/${id}/`);

  return (
    <main className="w-full mx-auto px-6 pb-6">
      <ConversationDetail
        token={token}
        userId={userId}
        messages={conversation.messages}
        conversation={conversation.conversation}
      />
    </main>
  );
};

export default ConversationPage;