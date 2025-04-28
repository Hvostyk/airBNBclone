import Image from "next/image"
function Categories() {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div className="w-[60px] pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200">
            <Image
                src='/bath-category.jpg'
                alt="bath-category"
                width={25}
                height={25}
            />
            <span className="text-xs">Beach</span>
        </div>

        <div className="w-[60px] pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200">
            <Image
                src='/bath-category.jpg'
                alt="bath-category"
                width={25}
                height={25}
            />
            <span className="text-xs">Villas</span>
        </div>

        <div className="w-[60px] pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200">
            <Image
                src='/bath-category.jpg'
                alt="bath-category"
                width={25}
                height={25}
            />
            <span className="text-xs">Cabins</span>
        </div>

        <div className="w-[60px] pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200">
            <Image
                src='/bath-category.jpg'
                alt="bath-category"
                width={25}
                height={25}
            />
            <span className="text-xs">tiny house</span>
        </div>
    </div>
  )
}

export default Categories