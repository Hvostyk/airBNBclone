'use client'
import { useState, useEffect } from "react";
import Range, { DateRange } from 'react-date-range';
import {differenceInDays, eachDayOfInterval, format} from "date-fns";
import apiService from "@/app/services/apiService";
import { difference } from "next/dist/build/utils";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import DatePicker from "../forms/Calendar";


const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
}

export type Property={
    id: string;
    guests: number
    price_per_night:number;
}

interface IReservationSidebarProps{
    userId: string | null
    property:Property
}

const ReservationSidebar: React.FC<IReservationSidebarProps> =({
    property,
    userId
})=> {

    const LoginModal = useLoginModal();

    const [fee, setFee] = useState<number>(0)
    const [nights, setNights] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [dateRange, setDateRange] = useState<{startDate: Date; endDate: Date; key: string;}>(initialDateRange)
    const [minDate, setMinDate] = useState<Date>(new Date())
    const [guests, setGuests] = useState<string>('1')
    const [bookedDates,setBookedDates] = useState<Date[]>([])
    const guestsRange = Array.from({length: property.guests},(_, index) => index + 1)

    const performBooking = async () => {
        if (userId){
            if(dateRange.startDate && dateRange.endDate){
                const formData = new FormData();
                formData.append('guests', guests);
                formData.append('start_date', format(dateRange.startDate,'yyyy-MM-dd'));
                formData.append('end_date', format(dateRange.endDate,'yyyy-MM-dd'));
                formData.append('number_of_nights',nights.toString());
                formData.append('total_price', totalPrice.toString());

                const response = await apiService.post(`/api/properties/${property.id}/book/`, formData);

                if(response.success){
                    console.log("Booking successed")
                }
                else{
                    console.log('Something went wrong...')
                }
            }
        }
        else{
            LoginModal.open
        }
    }
    
    const _setDateRange = (selection: any) =>{
        const newStartDate = new Date(selection.startDate)
        const newEndDate = new Date(selection.endDate)

        if (newEndDate <= newStartDate) {
            newEndDate.setDate(newStartDate.getDate() + 1)
        }

        setDateRange({
            ...dateRange,
            startDate: newStartDate,
            endDate: newEndDate 
        })
    }

    const getReservations = async () => {
        const reservations = await apiService.get(`/api/properties/${property.id}/reservations/`)

        let dates: Date[] = []
        reservations.forEach((reservation:any)=>{
            const range = eachDayOfInterval({
                start: new Date(reservation.start_date),
                end: new Date(reservation.end_date)
            });
            dates = [...dates, ...range]
        })

        setBookedDates(dates)
    }

    useEffect(() =>{
        getReservations();
        if (dateRange.startDate && dateRange.endDate){
            const dayCount = differenceInDays (dateRange.endDate,dateRange.startDate)
            if (dayCount && property.price_per_night){
                const _fee = ((dayCount * property.price_per_night / 100) * 5)
                setFee(_fee)
                setTotalPrice((dayCount * property.price_per_night) + _fee)
                setNights(dayCount)
            }
            else{
                const _fee = (property.price_per_night / 100) * 5
                setFee(_fee)
                setTotalPrice(property.price_per_night + _fee);
                setNights(1)
            }
        }
    },[dateRange])

  return (
    <aside className="mt-6 pb-6 w-full h-full p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
        <h2 className="mb-5 text-2xl">{property.price_per_night} за ночь </h2>
        <DatePicker
        value={dateRange}
        bookedDates={bookedDates}
        onChange={(value) => _setDateRange(value.selection)}
        />
        <div className="mb-6 p-3 border border-gray-400 rounded-xl">
            <label className="mb-2 block text-xs">Guests</label>
            <select 
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full -ml-1 text-xm">
                {guestsRange.map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select>
        </div>

        <div 
        onClick={performBooking}
        className="w-full h-[11%] flex items-center justify-center mb-6 py-6 text-center text-white bg-rose-500 hover:bg-rose-600 rounded-xl">
            Book
        </div>

        <div className="mb-4 flex justify-between align-center">
            <p>{property.price_per_night} * {nights} </p>
            <p>{property.price_per_night * nights}</p>
        </div>

        <div className="mb-4 flex justify-between align-center">
            <p>налог на жилье</p>
            <p>{fee}</p>
        </div>

        <hr className="mb-5" />

        <div className="mb-4 flex justify-between align-center">
            <p>Итого</p>
            <p>{totalPrice}</p>
        </div>
    </aside>
  )
}

export default ReservationSidebar