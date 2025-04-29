'use client'
import { useState } from "react"
import Modal from "./Modal"
import { useLoginModal } from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"

const LoginModal = () => {

    const loginModal=useLoginModal()
    
    const content=(
        <>
        <h2 className="mb-6 text-2xl">Please, log in</h2>

        <form className="space-y-4">
            <input placeholder="Your email adress" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl shadow-md"/>

            <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl shadow-md"/>

            <div className="p-5 bg-rose-500 text-white rounded-xl opacity-80">Error message</div>

            <CustomButton
            label="Submit"
            onClick={()=>{console.log('Log in')}}
            className="w-full text-center"     
            />
        </form>
        </>
    )


  return (
    <Modal
    isOpen={loginModal.isOpen}
    close={loginModal.close}
    label="Log in"
    content={content}   
    />
  )
}

export default LoginModal