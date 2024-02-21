import { useState } from "react"
import "./FormInputText.css"

interface FormInputTextProps{
    labelText: string,
    inputType?: string
}

interface StyleObjectLabelType {
    transform?: string,
    opacity: number
}

const FormInputText = ({labelText, inputType = "regular"}: FormInputTextProps) => {
    const [focused, setIsFocused] = useState<boolean>(false)
    const [styleObjectInput, setStyleObjectInput] = useState<StyleObjectLabelType>({opacity: 0.6})
    console.log(focused)

    const onFocusHandlerInput = () => {
        setIsFocused(true)
        setStyleObjectInput({...styleObjectInput, transform: "translateY(-50%)", opacity: 1})
    }
    const onBlurHandlerInput = () => {
        setIsFocused(false)
        setStyleObjectInput({...styleObjectInput, transform: "translateY(0%)", opacity: 0.6})
    }
    return (
        <section className="form-input-text-wrapper w-full flex flex-col justify-center relative">
            <label className="absolute" htmlFor={`${labelText}`} style={styleObjectInput} > {labelText}</label>
            {inputType === "regular" && <input type="text" className="form-input-text" onFocus={onFocusHandlerInput} onBlur={onBlurHandlerInput}/>}
            {inputType === "email" && <input type="email" className="form-input-text" onFocus={onFocusHandlerInput} onBlur={onBlurHandlerInput}/>}
            {inputType === "password" && <input type="password" className="form-input-text" onFocus={onFocusHandlerInput} onBlur={onBlurHandlerInput}/>}
            <div className={`input-underline-bar ${focused ? "opacity-[1]" : "opacity-[0.6]"}`}/>
        
        </section>
    )
}

export default FormInputText;