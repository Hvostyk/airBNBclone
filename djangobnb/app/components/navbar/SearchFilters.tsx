
const SearchFilters =()=> {
  return (
    <div className="search-block h-[64px] flex flex-row items-center justify-between border rounded-full">
        <div className="hidden lg:block">
        <ul className="flex flex-row items-center justify-between">
            <li className="search-param cursor-pointer h-[64px] w-[250px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                <p className="text-xs">Где</p>
                <p className="text-sm">Поиск направлений</p>
            </li>

            <li className="search-param cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                <p className="text-xs">Прибытие</p>
                <p className="text-sm">Когда?</p>
            </li>

            <li className="search-param cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                <p className="text-xs">Выезд</p>
                <p className="text-sm">Когда?</p>
            </li>

            <li className="search-param cursor-pointer h-[64px] w-[250px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                <p className="text-xs">Кто</p>
                <p className="text-sm">Кто едет?</p>
            </li>
        </ul>
        </div>
        <div className="cursor-pointer p-2">
            <div className="p-4 bg-rose-500 hover:bg-rose-600 rounded-full transition duration-400 ntext-white" ><svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 32 32" aria-hidden="true" role="presentation" 
                    focusable="false" style={{color: '#fff' ,display: 'block', fill: 'none', 
                    height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 4, 
                    overflow: 'visible'}}><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg></div>
        </div>
    </div>
  )
}

export default SearchFilters