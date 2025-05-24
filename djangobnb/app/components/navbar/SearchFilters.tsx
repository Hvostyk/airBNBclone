'use client'
import { useState } from "react"
const SearchFilters =()=> {
    const [location, setLocation] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [guests, setGuests] = useState('')

    const searchByFilters = async() =>{
        console.log(location,startDate,endDate,)
    }
  return (
    <div className="search-block h-[64px] flex flex-row items-center justify-between border rounded-full">
        <div className="hidden lg:block">
        <ul className="flex flex-row items-center justify-between">
            <li className="search-param cursor-pointer h-[64px] w-[250px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                <label className="text-xs" htmlFor="">Куда?</label>
                <input className="text-sm" placeholder='Локация' onChange={(e) => setLocation(e.target.value)} type="text" value={location}/>
            </li>

            <li className="search-param cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                <label className="text-xs" htmlFor="">Прибытие</label>
                <input className="text-sm" placeholder='Когда?' onChange={(e) => setStartDate(e.target.value)} type="text" value={startDate}/>
            </li>

            <li className="search-param cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                <label className="text-xs" htmlFor="">Отъезд</label>
                <input className="text-sm" placeholder='Когда?' onChange={(e) => setEndDate(e.target.value)} type="text" value={endDate}/>
            </li>

            <li className="search-param cursor-pointer h-[64px] w-[250px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                <label className="text-xs" htmlFor="">Сколько гостей?</label>
                <input className="text-sm" placeholder='Введите число' onChange={(e) => setGuests(e.target.value)} type="text" value={guests}/>
            </li>
        </ul>
        </div>
        <div 
        onClick={searchByFilters}
        className="cursor-pointer p-2">
            <div className="p-4 bg-rose-500 hover:bg-rose-600 rounded-full transition duration-400 ntext-white" ><svg
                    viewBox="0 0 32 32" aria-hidden="true" role="presentation" 
                    focusable="false" style={{color: '#fff' ,display: 'block', fill: 'none', 
                    height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 4, 
                    overflow: 'visible'}}><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg></div>
        </div>
    </div>
  )
}

export default SearchFilters