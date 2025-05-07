export type Property={
    id: string;
    price_per_night:number;
}

interface IReservationSidebarProps{
    property:Property
}

const ReservationSidebar: React.FC<IReservationSidebarProps> =({
    property
})=> {
  return (
    <aside className="mt-6 pb-6 w-full h-full p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
        <h2 className="mb-5 text-2xl">{property.price_per_night} за ночь </h2>
        <div className="mb-6 p-3 border border-gray-400 rounded-xl">
            <label className="mb-2 block text-xs">Guests</label>
            <select className="w-full -ml-1 text-xm">
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
            </select>
        </div>

        <div className="w-full h-[20%] flex items-center justify-center mb-6 py-6 text-center text-white bg-rose-500 hover:bg-rose-600 rounded-xl">
            Book
        </div>

        <div className="mb-4 flex justify-between align-center">
            <p>200руб * 4 ночи </p>
            <p>800руб</p>
        </div>

        <div className="mb-4 flex justify-between align-center">
            <p>налог на жилье</p>
            <p>40руб</p>
        </div>

        <hr className="mb-5" />

        <div className="mb-4 flex justify-between align-center">
            <p>Итого</p>
            <p>840руб</p>
        </div>
    </aside>
  )
}

export default ReservationSidebar