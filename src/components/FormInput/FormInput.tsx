import { useState } from "react"
import "./FormInput.css"
import Dropdown from "./Dropdown/Dropdown"

export interface StatePair {
    value: string,
    valueSetter: React.Dispatch<React.SetStateAction<string>>
}

export interface DropdownHoverState {
    hoverItem: string,
    setHoverItem: React.Dispatch<React.SetStateAction<string>>
}

interface FormInputTextProps{
    labelText: string,
    inputType: "text" | "email" | "password" | "dropdown",
    stateValuePair: StatePair,
    dropdownHoverState?: DropdownHoverState, 
    dropdownOptions?: string[],
    customStyles?: string
}

interface StyleObjectLabelType {
    transform?: string,
    opacity: number
}

const FormInput = ({labelText, inputType, stateValuePair, dropdownHoverState, dropdownOptions, customStyles}: FormInputTextProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [styleObjectInput, setStyleObjectInput] = useState<StyleObjectLabelType>({opacity: 0.6})
    
    

    const onFocusHandlerInput = () => {
        setIsFocused(true)
        setStyleObjectInput({...styleObjectInput, transform: "translateY(-80%)", opacity: 1})
    }
    const onBlurHandlerInput = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false)
        console.log(e.target.value)
        if(e.target.value.length === 0){
            setStyleObjectInput({...styleObjectInput, transform: "translateY(0%)", opacity: 0.6})
        }
    }

    
    return (
        <section className={`form-input-text-wrapper flex flex-col justify-center relative ${customStyles}`}>
            {inputType !== "dropdown" && <label className="absolute" htmlFor={`${labelText}`} style={styleObjectInput}> {labelText}</label>}
            {inputType === "text" && <input type={inputType} className="form-input-text" onFocus={onFocusHandlerInput} onBlur={onBlurHandlerInput} value={(stateValuePair as StatePair).value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (stateValuePair as StatePair).valueSetter(e.target.value)}/>}
            {inputType === "email" && <input type={inputType} className="form-input-text" onFocus={onFocusHandlerInput} onBlur={onBlurHandlerInput}  value={(stateValuePair as StatePair).value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (stateValuePair as StatePair).valueSetter(e.target.value)}/>}
            {inputType === "password" && <input type={inputType} className="form-input-text" onFocus={onFocusHandlerInput} onBlur={onBlurHandlerInput}  value={(stateValuePair as StatePair).value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (stateValuePair as StatePair).valueSetter(e.target.value)}/>}
            {inputType === "dropdown" && <Dropdown selectionText={labelText} options={dropdownOptions as string[]} stateValuePair={stateValuePair} dropdownState={dropdownHoverState as DropdownHoverState} isFocused={isFocused} setIsFocused={setIsFocused}/>}
            <div className="input-underline-bar-background">
                <div className={`input-underline-bar-foreground ${isFocused ? "w-full h-full": "h-0 w-0"}`}/>    
            </div>
        
        </section>
    )
}

export default FormInput;