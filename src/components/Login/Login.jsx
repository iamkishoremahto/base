import './Login.scss';
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    const Navigate = useNavigate();
    localStorage.setItem('loginStatus',false)

     const isValidEmail = async(email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    const loginHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const formDataObject = {};
        formData.forEach((value,key) => {
            formDataObject[key] = value;
        })
        if(formDataObject.email !== undefined && formDataObject.password !== undefined && formDataObject.email !== null && formDataObject.password !== null && formDataObject.email !== '' && formDataObject.password !== ''){
            let emailStatus = await isValidEmail(formDataObject.email)
            if(emailStatus){
                localStorage.setItem('loginStatus',true)
                Navigate('/dashboard')
                
            }
        }
    }
    return (
        <>
            <Container fluid className='mainLoginPageWrapper'>
                <Row className='LoginPageWrapper'>
                    <Col md={12} xl={6} className='loginInfoWrapper'>
                        {/* <img src={process.env.PUBLIC_URL + '/images/Left side.svg'} alt="backgroundImage" className="img-fluid backgroundImage" /> */}
                        <div className="logoWrapper">
                            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo" className="img-fluid logo" />
                        </div>
                        <div className="brandNameWrapper">
                            <h1>base</h1>
                        </div>
                        <div className="socialMediaIconsWrapper">
                            <FaGithub className='socialIcon' />
                            <AiFillTwitterCircle className='socialIcon' />
                            <FaLinkedin className='socialIcon' />
                            <IoLogoDiscord className='socialIcon' />
                        </div>
                    </Col>

                    <Col md={12} xl={6} className='loginFormWrapper'>
                        <div className="signInHeading">
                            <h1>Sign In</h1>
                            <p>Sign in to your account</p>
                        </div>
                        <div className="socialAuth">
                            <div className="googleAuth">
                                <img src={process.env.PUBLIC_URL + 'images/google-icon.svg'} alt="googleIcon" className="img-fluid authIcon" />
                                <p>Sign in with Google</p>
                            </div>
                            <div className="appleAuth">
                                <img src={process.env.PUBLIC_URL + 'images/apple.svg'} alt="appleIcon" className="img-fluid authIcon" />
                                <p>Sign in with Apple</p>
                            </div>
                            </div>
                            <div className="formWrapper">
                                <form onSubmit =  {loginHandler}>
                                    <div className="inputWrapper">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" name="email" id='email' required />
                                    </div>

                                    <div className="inputWrapper">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password"  required/>
                                    </div>
                                    <div className="forgotPasswordWrapper">
                                        <p>Forgot password?</p>
                                    </div>
                                    <div className="submitButtonWrapper">
                                        <button  type="submit">Sign In</button>
                                    </div>


                                </form>
                            </div>
                            <div className="registerWrapper">
                                <p>Don’t have an account? <span>Register here</span></p>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}