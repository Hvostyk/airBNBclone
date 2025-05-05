import Image from "next/image"
import { PropertyType } from "./PropertyList"

interface IPropertyProps {
  property: PropertyType
}

const PropertyListItem : React.FC<IPropertyProps> = ({
  property
})=>{
  return (
    <div className="cursor-pointer ">
        <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image
            fill
            src={property.image_url}
            alt="category img"
            sizes="(max-width:768px) 768px,{max-width:1200px): 768px, 768px"
            className="hover:scale-110 object-cover transition h-full w-full"
            /> 
        </div>

        <div className="mt-2">
            <p className="text-lg ">{property.title}</p>
        </div>

        <div className="mt-2">
            <p className="text-sm text-gray-500"><strong>{property.price_per_night}</strong> за ночь</p>
        </div>
    </div>
  )
}

export default PropertyListItem