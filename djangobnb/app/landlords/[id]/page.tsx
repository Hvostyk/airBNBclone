import Image from "next/image"
import ContactButton from "@/app/components/ContactButton"
import PropertyList from "@/app/components/properties/PropertyList"
import apiService from "@/app/services/apiService"
import { getUserId } from "@/app/lib/action"
interface ILandlordPageProps{
  params: Promise<{
    id: string;
  }>;
};  
const LandlordDetailPage = async (props : ILandlordPageProps) => {
    const {id} = await props.params
    const landlord = await apiService.get(`/api/auth/${id}`)
    const userId = await getUserId()
  return (
    <main className="w-full mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <aside className="col-span-1 mb-4">
                <div className="flex flex-col items-center p-6 rounded-xl border-gray-300 shadow-xl">
                    <Image
                    src={landlord.avatar_url}
                    width={200}
                    height={200}
                    alt="Landlord name"
                    className="w-[200px] h-[200px] rounded-full"
                    />
                    <h1 className="mt-6 text-2xl">{landlord.name}</h1>


                    {userId != id && 
                    (<ContactButton
                        userId = {userId}
                        landlordId = {id}
                    />)} 
                </div>
            </aside>

            <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <PropertyList
                    landlord_id = {id}
                />
                </div>
            </div>
        </div>
    </main>
  )
}

export default LandlordDetailPage