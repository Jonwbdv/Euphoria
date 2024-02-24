import './Dropdown.css'
import { useEffect, useState } from 'react'
import {DropdownHoverState} from '../FormInput'
import { StatePair } from '../FormInput'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp} from 'react-icons/io';

interface DropdownProps {
    selectionText: string,
    options: string[],
    dropdownState: DropdownHoverState,
    stateValuePair: StatePair
    isFocused: boolean,
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
}




const Dropdown = ({selectionText, options, dropdownState, stateValuePair, isFocused, setIsFocused}: DropdownProps) => {
    const [isDropdownSelected, setIsDropdownSelected] = useState(false);
    
    const handleWindowClick = (e:MouseEvent) => {
        
        if(isFocused){
            setIsDropdownSelected(!isDropdownSelected)
            setIsFocused(false)
        }
    }
    const handleDropdownClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        setIsDropdownSelected(!isDropdownSelected);
        setIsFocused(!isFocused)
    }



    useEffect(() => {
    }, [])

    useEffect(() => {
        window.addEventListener("click",handleWindowClick)
        return () => {
            window.removeEventListener("click", handleWindowClick)
        }
    }, [isFocused])

    return (
        <section className="dropdown-container relative flex justify-between hover:cursor-pointer"  onClick={handleDropdownClick}>
            
            {!stateValuePair.value ? <span className='opacity-[0.6]'>{selectionText}</span> : stateValuePair.value}
            {isDropdownSelected ? <IoIosArrowUp style={{color: "#E66A00"}}/>:<IoIosArrowDown style={{color: "#E66A00"}}/>}
            <section className='dropdown-options-wrapper absolute w-full' style={{top: "150%", zIndex: 1}}>
                {isFocused && options.map((option, index) => <section key={option} className={`dropdown-option flex items-center gap-[0.5em] pl-4 p-2`}  onMouseEnter={() => dropdownState.setHoverItem(option)} onClick={() => stateValuePair.valueSetter(option)}>
                    {<div className='vertical-bar' style={dropdownState.hoverItem === option ? {opacity: 1}: {}}/>}
                    <span className='dropdown-item-text' style={dropdownState.hoverItem === option ? {transform: "translateX(1em)", color: "#e66a00"}: {}}>{option}</span>
                </section>)}
            </section>
        </section>
    )
}

export default Dropdown;