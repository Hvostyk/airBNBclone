import Image from "next/image"


function MyReservationsPage() {
    return (
        <main className="w-full mx-auto px-6 pb-6">
            <h1 className="my-6 text-3xl">My reservations</h1>

            <div className="space-y-4 ">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/categories/house1AIRBNB.png"
                                alt="beach house"
                                className="hover:scale-110 object-cover transition h-full w-full"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-2xl">Property name</h2>
                        <p className="mb-2 text-xl"><strong>Check in date:</strong> 27/04/2005</p>
                        <p className="mb-2 text-xl"><strong>Check out date:</strong> 22/12/2005</p>

                        <p className="mb-2 text-xl"><strong>Number of nights</strong> 2</p>
                        <p className="mb-2 text-xl"><strong>Total price</strong> 200 руб</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-rose-500 hover:bg-rose-600 transition duration-500 text-white rounded-xl">
                            Go to property
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    )
}

export default MyReservationsPage