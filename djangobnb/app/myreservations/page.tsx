import Image from "next/image"
import apiService from "../services/apiService"
import Link from "next/link"
const MyReservationsPage = async () => {
    const reservations = await apiService.get('/api/auth/myreservations/')

    return (
        <main className="w-full mx-auto px-6 pb-6">
            <h1 className="my-6 text-3xl">My reservations</h1>

            <div className="space-y-4 ">
                {reservations.map((reservations : any) => (
                    
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src={reservations.property.image_url}
                                alt="beach house"
                                className="hover:scale-110 object-cover transition h-full w-full"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-2xl">{reservations.property.title}</h2>
                        <p className="mb-2 text-xl"><strong>Check in date:</strong> {reservations.start_date}</p>
                        <p className="mb-2 text-xl"><strong>Check out date:</strong> {reservations.end_date}</p>

                        <p className="mb-2 text-xl"><strong>Number of nights</strong>{reservations.number_of_nights}</p>
                        <p className="mb-2 text-xl"><strong>Total price</strong>{reservations.total_price}</p>

                        <Link
                        href={`/properties/${reservations.property.id}`}
                        className="mt-6 inline-block cursor-pointer py-4 px-6 bg-rose-500 hover:bg-rose-600 transition duration-500 text-white rounded-xl">
                            Go to property
                        </Link>
                    </div>
                </div> 
                ))}
            </div>
        </main>
    )
}

export default MyReservationsPage