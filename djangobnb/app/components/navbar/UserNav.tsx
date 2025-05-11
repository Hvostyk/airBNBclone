'use client'
import { useState } from "react"
import MenuLink from "./MenuLink"

import { useLoginModal } from "@/app/hooks/useLoginModal"
import { useSignupModal } from "@/app/hooks/useSignupModal"
import LogoutButton from "../LogoutButton"
import { useRouter } from "next/navigation"
// import SignupModal from "../modals/SignupModal"

interface IUserNavProps {
  userId?: string | null
}

const UserNav: React.FC<IUserNavProps>= ({userId}) => {
  const [isActive,setisActive]=useState(false)
  const loginModal=useLoginModal()
  const signupModal=useSignupModal()

  const router = useRouter()
  
  return (
    <div className="p-2 relative flex border rounded-full items-center cursor-pointer">

        <button 
        onClick={()=>{setisActive(!isActive)}}
        className="flex items-center cursor-pointer">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </button>

        {isActive && (
          <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex-col cursor-pointer">
            {userId ? (
              <>
              <MenuLink
                label="My properties"
                onClick={() => {
                  setisActive(false)
                  router.push(`/myproperties`)
                }}
              />

              <MenuLink
                label="My reservations"
                onClick={() => {
                  setisActive(false)
                  router.push(`/myreservations`)
                }}
              />

              <LogoutButton/>
              </>
            ):(<>
                <MenuLink
                  label="Log in"
                  onClick={()=>{
                    setisActive(false)
                    loginModal.open()
                  }}
                />

                <MenuLink
                  label="Sign up"
                  onClick={()=>{
                    setisActive(false)
                    signupModal.open()
                  }}
                />
              </>
          )}


          </div>
        )}
    </div>
  )
}

export default UserNav