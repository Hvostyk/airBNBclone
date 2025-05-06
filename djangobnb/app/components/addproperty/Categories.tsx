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
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12"></div>
    </>
  )
}

export  default Categories