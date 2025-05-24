import {create} from "zustand"

interface ISignupModalStore{
    isOpen:boolean;
    open:()=>void;
    close:()=>void;
}

export const useSignupModal= create<ISignupModalStore>((set)=>({
    isOpen:false,
    open:()=>set({isOpen:true}),
    close:()=>set({isOpen:false})
}))