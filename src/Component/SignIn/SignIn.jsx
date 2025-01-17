import { useEffect, useState } from 'react';
import styles from './Sign.module.css';
import { BsPersonCircle } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai'
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { asyncThunkLogin } from '../../redux/createAsyncThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SingIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { LoginData: { usertoken, expiry } } = useSelector((store) => store.admin)

    const handleLogin = (event) => {
        event.preventDefault();

        dispatch(asyncThunkLogin({ "email": email, "password": password }))
        setTimeout(() => {
            setTimeout(() => { usertoken && navigate('/contractorform'); }, 1000);
        }, 0);
    };

    useEffect(() => {
    }, [usertoken])

    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h5 className={styles.heading} style={{ textAlign: 'center' }}>Login to your account</h5>
                <p style={{ textAlign: 'center', columnGap: '-10px' }} className='para'>Enter your credentials below</p>

                <form onSubmit={handleLogin}>
                    <label className="py-2">Email</label>

                    <div className="input-group input-group-lg mb-3 flex-nowrap">
                        <span className="input-group-text" id="basic-addon1"><BsPersonCircle />
                        </span>
                        <input type="email" className="form-control py-2" placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required

                        />
                    </div>
                    <label className="py-2">Password</label>
                    <div className="input-group input-group-lg mb-3 ">
                        <span className="input-group-text" id="basic-addon1"><AiFillLock />
                        </span>
                        <input type="password" className="form-control" placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Grid container style={{ paddingTop: '10px' }}>
                        <Grid item xs >
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                        </Grid>
                        <Grid item>
                            <Link variant="body2" >
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>

                    <div className={styles.footer}>
                        <button>Sign  in</button>
                    </div>
                    <div className='container py-2 mt-4'>
                        <div className='row'>
                            <div className={styles.Circal} style={{
                                textAlign: 'center', width: '50px',
                                height: '50px',
                                border: '1px solid #3700ff',
                                borderradius: '50%',

                            }} >
                                <div className='col'>
                                    <span className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16" style={{ color: '#3700ff' }}>
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg></span>
                                </div>
                            </div>
                            <div className={styles.Circal} style={{
                                textAlign: 'center', width: '50px',
                                height: '50px',
                                border: '1px solid red',
                                borderradius: '50%'
                            }} >
                                <div className='col'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-globe2-circle" viewBox="0 0 16 16" style={{ color: 'red' }}>
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                    </svg>
                                </div>
                            </div>


                            <div className={styles.Circal} style={{
                                textAlign: 'center', width: '50px',
                                height: '50px',
                                border: '1px solid #00008b',
                                borderradius: '50%'
                            }} >
                                <div className='col' style={{ marginEnd: '50rem' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" style={{ color: '#00008b' }}>
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </div>
                            </div>

                            <div className={styles.Circal} style={{
                                textAlign: 'center', width: '50px',
                                height: '50px',
                                border: '1px solid #00aced',
                                borderradius: '50%',
                                marginRight: '20px'

                            }} >
                                <div className='col'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16" style={{ color: '#00aced' }}>
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.paragraph}>
                        <p>By continuing, you're confirming that you've read our <span style={{ color: 'blue' }}>Tearms & Condition
                            <span style={{ color: 'black' }}> and </span>
                            Cookie Policy</span></p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SingIn
