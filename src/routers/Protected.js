import { useEffect } from  'react';
import {useNavigate} from 'react-router-dom';
function Protected(props){
    const {Component} = props;
    const navigate = useNavigate();

    useEffect(() =>{
        let loginStatus = localStorage.getItem('loginStatus');
        if(!loginStatus){
            navigate('/');
        }
    });
    return(
        <>
    <Component />
    
        </>
    )
}
export default Protected;