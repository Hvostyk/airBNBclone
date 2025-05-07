import Image from "next/image";

interface ICategoriesProps{
    dataCategory: string;
    setCategory: (category: string) => void
}

const Categories:React.FC<ICategoriesProps>= ({
    dataCategory,
    setCategory
}) => {
  return (
    <>
<div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div 
        onClick={()=>setCategory('Beach')}
        className={`w-[60px] pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory== 'Beach' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200`}>
            <Image
                src='/bath-category.jpg'
                alt="bath-category"
                width={25}
                height={25}
            />
            <span className="text-xs">Beach</span>
        </div>

        <div 
        onClick={()=>setCategory('Villas')}
        className={`w-[60px] pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory== 'Villas' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200`}>
            <Image
                src='/bath-category.jpg'
                alt="bath-category"
                width={25}
                height={25}
            />
            <span className="text-xs">Villas</span>
        </div>

        <div 
        onClick={()=>setCategory('Cabins')}
        className={`w-[60px] pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory== 'Cabins' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200`}>
            <Image
                src='/bath-category.jpg'
                alt="bath-category"
                width={25}
                height={25}
            />
            <span className="text-xs">Cabins</span>
        </div>

        <div 
        onClick={()=>setCategory('Tiny house')}
        className={`w-[60px] pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory== 'Tiny house' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200`}>
            <Image
                src='/bath-category.jpg'
                alt="bath-category"
                width={25}
                height={25}
            />
            <span className="text-xs">tiny house</span>
        </div>
    </div>
    </>
  )
}

export  default Categories