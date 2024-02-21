import { EventHandler, useState } from "react"
import "./FormInputText.css"

interface FormInputTextProps{
    labelText: string,
    inputType?: string,
    customStyles?: string
}

interface StyleObjectLabelType {
    transform?: string,
    opacity: number
}

const FormInputText = ({labelText, inputType = "regular", customStyles}: FormInputTextProps) => {
    const [focused, setIsFocused] = useState<boolean>(false)
    const [styleObjectInput, setStyleObjectInput] = useState<StyleObjectLabelType>({opacity: 0.6})
    console.log(focused)

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
            <label className="absolute" htmlFor={`${labelText}`} style={styleObjectInput} > {labelText}</label>
            {inputType === "text" && <input type={inputType} className="form-input-text" onFocus={onFocusHandlerInput} onBlur={onBlurHandlerInput}/>}
            {inputType === "email" && <input type={inputType} className="form-input-text" onFocus={onFocusHandlerInput} onBlur={onBlurHandlerInput}/>}
            {inputType === "password" && <input type={inputType} className="form-input-text" onFocus={onFocusHandlerInput} onBlur={onBlurHandlerInput}/>}
            <div className="input-underline-bar-background">
                <div className={`input-underline-bar-foreground ${focused ? "w-full h-full": "h-0 w-0"}`}/>    
            </div>
        
        </section>
    )
}

export default FormInputText;