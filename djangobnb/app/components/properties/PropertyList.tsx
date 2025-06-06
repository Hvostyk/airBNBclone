'use client'
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react"
import PropertyListItem from "./PropertyListItem"
import { error } from "console";

import apiService from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  image_url:string;
  price_per_night:number;
  is_favorite: boolean;
}

interface IPropertyListProps {
  landlord_id?: string | null;
  favorites?: boolean | null;
}

const PropertyListContent: React.FC<IPropertyListProps> = ({
  landlord_id,
  favorites,
}) => {
  const params = useSearchParams()
  const [properties, setProperties]=useState<PropertyType[]>([])
  const markFavorite = (id: string, is_favorite:boolean) => {
    const tmpProperties = properties.map((property: PropertyType) => {
      if (property.id == id){
        property.is_favorite = is_favorite
        if(is_favorite){
          console.log('added to list of favorited properties')
        } else {
          console.log('removed from list')
        }
      }
      return property
    })
    setProperties(tmpProperties)
  }

  const getProperties = async () => {
    let url = '/api/properties/'

    if (landlord_id){
      url+=`?landlord_id=${landlord_id}`
    }else if (favorites){
      url += `?is_favorites=true `
    }
    const tmpProperties = await apiService.get(url)

    setProperties(tmpProperties.data.map((property: PropertyType) => {
      if (tmpProperties.favorites.includes(property.id)){
        property.is_favorite = true
      } else{
        property.is_favorite = false
      }
      return property
    }))
  };

  useEffect(()=>{
    getProperties();
  },[params.has("added")])

  return (
    <>
    {properties.map((property)=>{
      return(
        <PropertyListItem 
        key={property.id}
        property={property}
        markFavorite = {(is_favorite : any) => markFavorite(property.id, is_favorite)}
        />
      )
    })}
    </>
  )
}

const PropertyList: React.FC<IPropertyListProps> = (props) => {
  return (
    <>
    <Suspense fallback={<div>Loading properties...</div>}>
      <PropertyListContent {...props} />
    </Suspense>
    </>
  )
}

export default PropertyList