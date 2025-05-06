'use client'
import { useState } from "react"
import Image from "next/image"

import Modal from './Modal'
import LoginModal from "./LoginModal"
import { usePropertyModal } from "@/app/hooks/usePropertyModal"
import CustomButton from "../forms/CustomButton"

const AddPropertyModal = () => {
    const [currentStep,setCurrentStep]= useState(1)
    const addPropertyModal = usePropertyModal();
    const content = (
        <>
        {currentStep==1 ?(
            <>
                    <h2 className="mb-6 text-2xl">Choose category</h2>

                    <CustomButton
                        label="Next"
                        onClick={() => setCurrentStep(2)}
                        className="text-center"
                    />
            </>
        ):(
            <p>step2</p>
        )}

        </>
    )

  return (
    <>
        <Modal
            isOpen={addPropertyModal.isOpen}
            close={addPropertyModal.close}
            label={'Add property'}
            content={content}
        />
    </>
  )
}

export default AddPropertyModal