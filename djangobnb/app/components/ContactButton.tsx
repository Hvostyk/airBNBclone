'use client'
import { useLoginModal } from "../hooks/useLoginModal"
import { useRouter } from "next/navigation"
import apiService from "../services/apiService"

interface IContactButtonProps{
  userId : string | null,
  landlordId : string,
}
const ContactButton: React.FC<IContactButtonProps> = async({
  userId,
  landlordId,
}) => {
  const loginModal = useLoginModal()
  const router = useRouter()
  const startConversation = async() =>{
    if(userId){
      const conversation = await apiService.get(`/api/chat/start/${landlordId}/`)
      if (conversation.conversation_id){
        router.push(`/inbox/${conversation.conversation_id}`)
      }
    }
    else{
      loginModal.open()
    }
  }
  return (
    <div 
    onClick={startConversation}
    className="py-4 px-6 mt-6 cursor-pointer bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition duration-500">
        Contact
    </div>
  )
}

export default ContactButton