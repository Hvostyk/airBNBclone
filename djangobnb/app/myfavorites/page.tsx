import PropertyList from "../components/properties/PropertyList";
import { getUserId } from "../lib/action";

const MyFavoritesPage = async () => {

    const userId = await getUserId();

    if (!userId){
        return(
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>You need to be authenticated!</p>
            </main>
        )
    }
    return (
        <main className="max-w-[1500px] max-auto px-6 pb-12">
            <h1 className="my-6 text-3xl">My favorites</h1>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <PropertyList
                        favorites={true}
                    />
                </div>
        </main>
    )
}

export default MyFavoritesPage