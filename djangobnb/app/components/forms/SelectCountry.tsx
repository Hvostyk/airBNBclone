'use client'
import Select from "react-select"
import useCountries from "@/app/hooks/useCountries"

export type SelectCountryValue = {
    label: string;
    value: string;
}

interface ISelectCountryProps {
    value?: SelectCountryValue;
    onChange: (value: SelectCountryValue) => void;
    className?: string,

}

const SelectCountry: React.FC<ISelectCountryProps>= ({
    value,
    onChange,
    className,
}
) => {
    const {getAll} =useCountries()

    return (
        <>
            <Select
                className={className}
                isClearable
                placeholder="Anywhere"
                options={getAll()}
                value = {value}
                onChange={(value) => onChange(value as SelectCountryValue)}
            />
        </>
    )
}

export default SelectCountry