'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Modal from "./Modal"
import { useLoginModal } from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"

import { handleLogin } from "@/app/lib/action"
import apiService from "@/app/services/apiService"

const LoginModal = () => {

  const router = useRouter()
    const loginModal=useLoginModal()

    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([])
    

    const submitLogin = async () =>{
      const formData = {
        email: email,
        password: Password,
      }

      const response = await apiService.postWithoutToken('/api/auth/login/', JSON.stringify(formData))

      if (response.access) {
        handleLogin(response.user.pk, response.access, response.refresh)
        loginModal.close();
        router.push('/')
      } else{
        setErrors(response.non_field_errors)
      }

    }
    
    const content=(
        <>
        <h2 className="mb-6 text-2xl">Please, log in</h2>

        <form action={submitLogin} className="space-y-4">
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email adress" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl shadow-md"/>

            <input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl shadow-md"/>

            {errors.map((error,index)=>{
              return (
                <div key={`error_${index}`}
                className="p-5 bg-rose-500 text-white rounded-xl opacity-80">
                  {error}
                </div>
              )
            })}

            <CustomButton
            label="Submit"
            onClick={submitLogin}
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