import { Form } from 'react-router-dom'
import EuphoriaLogo from '../../components/EuphoriaLogo/EuphoriaLogo'
import FormInputText from '../../components/FormInputText/FormInputText'
import './Login.css'

const Login = () => {
    return (
        <section id="login-outer-container">
            <section id="login-left-container">
                <section id="login-left-container-wrapper">

                    <EuphoriaLogo customStyles='w-[50%]'/>
                    
                    <form id="login-form-wrapper" className='w-[75%]'>
                        <h1 id="main-title">Login</h1>
                        <FormInputText labelText='Email'/>
                        <FormInputText labelText='Password' />
                    </form>


                </section>
            </section>
            <section id="login-right-container">
            </section>
        </section>
    )
}

export default Login