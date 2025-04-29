import Image from "next/image"
import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
function PropertyDetailPage() {
    return (
        <main className="w-full mx-auto px-6">
            <div className="mb-5 relative w-full h-[64vh] overflow-hidden rounded-xl">
                <Image
                fill
                src='/categories/house1AIRBNB.png'
                className="object-cover w-full h-full"
                alt="Housik"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-4">
                    <h1 className="mb-4 text-4xl">Property name</h1>

                    <span className="mb-6 block text-lg text-gray-600">4 guests-2 bedrooms-1 bathroom</span>
                    <hr/>

                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                        src="/categories/user.png"
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="user ava"
                        />

                        <p><strong>John Doe is your host</strong></p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, expedita. Atque ipsa reprehenderit qui nulla consequuntur accusantium, natus ullam numquam unde. Delectus, architecto aliquid? Sed, porro voluptates cum illo qui expedita voluptas adipisci recusandae maiores a libero eos ducimus nulla ut assumenda voluptatibus repellat vero nihil, illum sapiente magni quaerat.</p>
                </div>

                <div>
                    <ReservationSidebar/>
                </div>
            </div>
        </main>
    )
}

export default PropertyDetailPage