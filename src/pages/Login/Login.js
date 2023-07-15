import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth'
import './Login.css'
import loginPic from '../../images/loginPic.png'
const Login = () => {
    const [user, setUser] = useState('')
    const auth= useAuth()
    const navigate=useNavigate()
    const handleLogin=()=>{
        auth.login(user)
        navigate('/',{replace:true})
    }
  return (
    <div> 
      <img src={loginPic} className='loginPic' alt='login'/>
        <label>
            UserName:{' '}
            <input type='text'className='logininput' onChange={(e)=>setUser(e.target.value)} />
            <div>
              <button data-testid="login" onClick={handleLogin} className='btn btn-info' >Login</button>
            </div>
        </label>
    </div>
  )
}

export default Login