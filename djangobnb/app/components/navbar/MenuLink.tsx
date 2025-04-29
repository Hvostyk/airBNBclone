'use client'
interface IMenuLinkProps{
    label:string,
    onClick:()=>void
}

const MenuLink:React.FC<IMenuLinkProps>= ({
    label,
    onClick
}) => {
    
    return (
        <div onClick={onClick} className="px-5 py-4 hover:bg-gray-100 transition duration-500 rounded-xl">{label}</div>
    )
}
export default MenuLink