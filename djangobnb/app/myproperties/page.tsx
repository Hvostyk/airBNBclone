import Image from "next/image"
import PropertyList from "../components/properties/PropertyList"
import { getUserId } from "../lib/action"
import { use } from "react";
const MyPropertiesPage = async () => {

    const userId = await getUserId();
    return (
        <main className="w-full mx-auto px-6 pb-6">
            <h1 className="my-6 text-3xl">My properties</h1>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <PropertyList
                    landlord_id={userId}
                />
            </div>

        </main>
        )
}

export default MyPropertiesPage