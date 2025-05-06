import {create} from "zustand"

interface IPropertyModalStore{
    isOpen:boolean;
    open:()=>void;
    close:()=>void;
}

export const usePropertyModal= create<IPropertyModalStore>((set)=>({
    isOpen:false,
    open:()=>set({isOpen:true}),
    close:()=>set({isOpen:false})
}))