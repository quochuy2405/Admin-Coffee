import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../app/AuthContext';
import './styles.scss';
 function Login(props) {
  const [dataFrom, setDataform] = useState({
    username: '',
    password: '',
  });
  const { username, password } = dataFrom;
  const OnchangedataForm = (event) =>
    setDataform({ ...dataFrom, [event.target.name]: event.target.value });
  const { loginUser } = useContext(AuthContext);
  const Login = async (event) => {
    event.preventDefault();
    try {
      const logindata = await loginUser(dataFrom);
      console.log(logindata);
    } catch (error) {
      console.log(error``);
    }
  };
  // console.log(Login())

  return (
      <div className='Login'>
        {' '}
        <div className='loginFrom'>
          <div className='img_group'>
            <i className='content'>Cùng thưởng thức một tách cà phê nào !!!</i>
            <img
              src='https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=2260&h=2750&dpr=1'
              alt=''
            />
          </div>
          <div className='login'>
  
            <form action="/auth/admin"  > {/* onSubmit={Login} */}
              <h2 className='title'>Đăng nhập</h2>
              <div className='input_login input_username'>
              <i className='fas fa-user-astronaut'></i>
                <input
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Tên đăng nhập'
                  onChange={OnchangedataForm}
                  value={username}
                  required
                />
              </div>

              <div className='input_login input_password'>
              <i class="fal fa-lock-alt"></i>
                <input
                  type='password'
                  className='input_password'
                  name='password'
                  placeholder='Mật khẩu'
                  value={password}
                  onChange={OnchangedataForm}
                  required
                />
              </div>

              <button type='submit' className='btn btn-success'>
                <b>Đăng nhập</b>
              </button>
            </form>
            <Link href='#' className='forgot_pass'>
              {' '}
              Quên mật khẩu ?
            </Link>
          </div>

          <div className='dot'></div>
        </div>
      </div>

  );
}
export default Login;