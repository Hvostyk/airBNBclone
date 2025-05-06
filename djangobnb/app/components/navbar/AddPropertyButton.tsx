'use client'
import { usePropertyModal } from "@/app/hooks/usePropertyModal"
import AddPropertyModal from "../modals/AddPropertyModal"
import { useLoginModal } from "@/app/hooks/useLoginModal";

interface IAddPropertyButton{
  userId?: string | null
}

const AddPropertyButton: React.FC<IAddPropertyButton> =({
  userId
}) => {
  const loginModal = useLoginModal();
  const addPropertyModal=usePropertyModal();

  const airbnbYourHome = () => {
    if (userId){
      addPropertyModal.open()
    }else{
      loginModal.open();
    }
  }
  return (
    <div 
    onClick={airbnbYourHome}
    className="p-3 cursor-pointer text-sm rounded-full hover:bg-gray-200">Djangobnb your home</div>
  )
}

export default AddPropertyButton