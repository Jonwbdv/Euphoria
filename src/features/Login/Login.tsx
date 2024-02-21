import { Link, useNavigate } from 'react-router-dom'
import EuphoriaLogo from '../../components/EuphoriaLogo/EuphoriaLogo'
import FormInput from '../../components/FormInputText/FormInput'
import './Login.css'
import Button from '../../components/Button/Button'

const Login = () => {
    
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
                        <h1 id="login-page-title">Login</h1>
                        <FormInput labelText='Email' inputType='email' customStyles='w-[75%]'/>
                        <FormInput labelText='Password' inputType='password' customStyles='w-[75%]'/>
                        <Link to="/reset-password-request" className='reset-password-link'>Reset password</Link>
                        
                        <Button buttonText='Login' buttonType='filled' clickEventHandler={loginClickEventHandler}/>
                        <h2 id='login-registration-title'>Or Get Started with a New Account</h2>
                        <Button buttonText="Register" buttonType='unfilled' clickEventHandler={registerClickEventHandler}/>

                    </form>


                </section>
            </section>
            <section id="login-right-container">
            </section>
        </section>
    )
}

export default Login