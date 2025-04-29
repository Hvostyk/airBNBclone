interface ICustomButtonProps{
    label:string,
    onClick:()=>void,
    className:string
}

const CustomButton: React.FC<ICustomButtonProps> = (
    {label,
    onClick,
    className
    })=>{
    return (
    <div 
    onClick={onClick}
    className={`py-4 cursor-pointer bg-rose-500 hover:bg-rose-600 text-white transition duration-500 rounded-xl ${className}`}>
        {label}
    </div>
    )
}

export default CustomButton