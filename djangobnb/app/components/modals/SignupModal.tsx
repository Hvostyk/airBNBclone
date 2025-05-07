'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Modal from "./Modal"
import { useSignupModal } from "@/app/hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"
import apiService from "@/app/services/apiService"
import { handleLogin } from "@/app/lib/action"
const SignupModal = () => {
    const router = useRouter();
    const SignupModal=useSignupModal()

    const [email, setEmail]= useState('')
    const [errors, setErrors] = useState<string[]>([])
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const sumbitSignup = async () =>{
      const formData = {
        email: email,
        password1: password1,
        password2: password2
      }

      console.log('Sending data:', formData);

      const response = await apiService.postWithoutToken('/api/auth/register/', JSON.stringify(formData))
      if (response.access) {
        handleLogin(response.user.pk, response.access, response.refresh)
        console.log(response.user.pk, response.access, response.refresh)
        SignupModal.close();
        router.push('/')
      } else{
        const tmpErrors: string[] =Object.values(response).map((error: any) => {
          return error;
        })
        setErrors(tmpErrors)
      }

    }
    
    const content=(
        <>
        <h2 className="mb-6 text-2xl">Please, log in</h2>

        <form 
        action={sumbitSignup}
        className="space-y-4"
        >
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email adress" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl shadow-md"/>

            <input onChange={(e) => setPassword1(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl shadow-md"/>

            <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat your password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl shadow-md"/>
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
            onClick={sumbitSignup}
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