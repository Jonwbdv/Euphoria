
import './Button.css'


interface ButtonProps {
    buttonText: string,
    buttonType: "filled" | "unfilled",
    clickEventHandler?:  React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({buttonText, buttonType, clickEventHandler}: ButtonProps) => {

    const determineDesiredButton = () => {
        if(buttonType ===  "filled"){
            if(clickEventHandler){
                return <button type="button" className="button filled-button" onClick={clickEventHandler}>{buttonText.toUpperCase()}</button> 
            }else{
                return <button type="button" className="button filled-button">{buttonText.toUpperCase()}</button>
            }
        }
        else{
            if(clickEventHandler){
                return <button type="button" className="button unfilled-button" onClick={clickEventHandler}>{buttonText.toUpperCase()}</button> 
            }else{
                return <button type="button" className="button unfilled-button">{buttonText.toUpperCase()}</button>
            }
        }
    }

    return (
        <>
            {determineDesiredButton()}
        </>

    )
}

export default Button;