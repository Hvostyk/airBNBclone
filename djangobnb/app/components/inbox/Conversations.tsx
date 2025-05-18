'use client'

import { useRouter } from 'next/navigation'
import { ConversationType } from '@/app/inbox/page'
import React from 'react'
import CustomButton from '../forms/CustomButton'

interface IConversationProps {
  conversation: ConversationType;
  userId: string;
}
const Conversations: React.FC<IConversationProps> = ({
  conversation,
  userId,
})=> {
  const router = useRouter();
  const otherUser = conversation.users.find((user) => user.id != userId)
  return (
    <div className='px-6 py-4 border border-gray-300 rounded-xl'>
        <p className='mb-6 text-xl'>{otherUser?.name || "Not authorized"}</p>

        <p 
        onClick={()=> router.push(`/inbox/${conversation.id}`)}
        className='text-rose-500'>
          Go to conversation
        </p>
    </div>
  )
}

export default Conversations