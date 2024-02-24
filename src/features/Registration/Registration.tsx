
import { Link, useNavigate } from 'react-router-dom';
import EuphoriaLogo from '../../components/EuphoriaLogo/EuphoriaLogo';
import FormInput from '../../components/FormInput/FormInput';
import './Registration.css'
import Button from '../../components/Button/Button';
import { useState } from 'react';

const Registration = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [securityQuestion, setSecurityQuestion] = useState("")
    const [securityAnswer, setSecurityAnswer] = useState("")

    const securityQuestionOptions = [
        "option1 option1  option1 option1 option1 option1 option1 option1 option1", "option2", "option3"  
    ]


    const [dropdownHoverState, setDropdownHoverState] = useState("")

    const navigate = useNavigate()

    const loginClickEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate("/", {replace: true})
    }
    const registerClickEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate("/register")
    }

    return (
        <section id="login-outer-container">
        <section id="login-left-container">
            <section id="login-left-container-wrapper">

                <EuphoriaLogo customStyles='w-[50%]'/>
                
                <form id="login-form-wrapper" className='w-[75%] mb-5 p-5'>
                    <h1 id="login-page-title">Registration</h1>
                    <FormInput labelText='Email' inputType='email' stateValuePair={{value: email, valueSetter: setEmail}} customStyles='w-[75%]'/>
                    <FormInput labelText='Password' inputType='password' stateValuePair={{value: password, valueSetter: setPassword}} customStyles='w-[75%]'/>
                    <FormInput labelText='Confirm Password' inputType='password' stateValuePair={{value: confirmPassword, valueSetter: setConfirmPassword}} customStyles='w-[75%]'/>
                    <FormInput labelText='Select Security Question' inputType='dropdown' stateValuePair={{value: securityQuestion, valueSetter: setSecurityQuestion}}  dropdownOptions={securityQuestionOptions} dropdownHoverState={{hoverItem: dropdownHoverState, setHoverItem: setDropdownHoverState}}  customStyles='w-[75%]'/>
                    <FormInput labelText='Answer' inputType='text' stateValuePair={{value: securityAnswer, valueSetter: setSecurityAnswer}} customStyles='w-[75%]'/>                    
                    <Button buttonText='Register' buttonType='filled' clickEventHandler={loginClickEventHandler}/>

                </form>


            </section>
        </section>
        <section id="login-right-container">
        </section>
    </section>
    )
}

export default Registration;