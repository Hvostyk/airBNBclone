'use client'
import { useState } from "react"
import Modal from "./Modal"
import { useSignupModal } from "@/app/hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"

const SignupModal = () => {

    const SignupModal=useSignupModal()
    
    const content=(
        <>
        <h2 className="mb-6 text-2xl">Please, log in</h2>

        <form className="space-y-4">
            <input placeholder="Your email adress" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl shadow-md"/>

            <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl shadow-md"/>

            <input placeholder="Repeat your password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl shadow-md"/>

            <div className="p-5 bg-rose-500 text-white rounded-xl opacity-80">Error message</div>

            <CustomButton
            label="Submit"
            onClick={()=>{console.log('Sign up')}}
            className="w-full text-center"     
            />
        </form>
        </>
    )


  return (
    <Modal
    isOpen={SignupModal.isOpen}
    close={SignupModal.close}
    label="Sign up"
    content={content}   
    />
  )
}

export default SignupModal