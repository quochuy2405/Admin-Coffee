import { useSnackbar } from 'notistack';
import React, { memo, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './../../app/AuthContext';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './styles.scss';
 function SignIn(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [dataFrom, setDataform] = useState({
    username: '',
    email: '',
    sdt:'',
    password: '',
    confirm: '',
  });
  var rediect=useHistory();
  const { username,sdt, password,confirm,email } = dataFrom;
  const OnchangedataForm = (event) =>
    setDataform({ ...dataFrom, [event.target.name]: event.target.value });
  const { signInUser } = useContext(AuthContext);
  const SignIn = async (event) => {
    event.preventDefault();
    if(password.length>0 && password===confirm)
    {
      
          try {
            const signindata = await signInUser(dataFrom);
            console.log(signindata);
            enqueueSnackbar('Đăng ký thành công', { variant: 'success' });
            rediect.push("/login")
          } catch (error) {
            console.log(error``);
          }
    }
    else{
      enqueueSnackbar('Mật khẩu không khớp', { variant: 'error' });
    }
    
  };

  return (
   
      
      <div className='SignIn'>
        {' '}
        <div className='signinFrom'>
          <div className='img_group'>
            <i className='content'>Cùng thưởng thức một tách cà phê nào !!!</i>
            <img
              src='https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=2260&h=2750&dpr=1'
              alt=''
            />
          </div>
          <div className='signin'>
  
            <form onSubmit={SignIn} > {/* onSubmit={SignIn}*/}
              <h2 className='title'>Đăng Ký</h2>
              <div className='input_signin input_username'>
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
              <div className='input_signin input_username'>
              <i class="fad fa-envelope"></i>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  onChange={OnchangedataForm}
                  value={email}
                  required
                />
              </div>
              <div className='input_signin input_email'>
              <i class="fas fa-mobile-alt"></i>
                <input
                  type='text'
                  id='sdt'
                  name='sdt'
                  placeholder='Số điện thoại'
                  onChange={OnchangedataForm}
                  value={sdt}
                  required
                />
              </div>
              <div className='input_signin input_password'>
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
              <div className='input_signin input_password'>
              <i class="far fa-check-circle"></i>
                <input
                  type='password'
                  className='input_password'
                  name='confirm'
                  placeholder='Nhập lại mật khẩu'
                  value={confirm}
                  onChange={OnchangedataForm}
                  required
                />
              </div>

              <button type='submit' className='btn btn-success'>
                <b>Đăng ký</b>
              </button>
            </form>
  
          </div>

          <div className='dot'></div>
        </div>
      </div>
  );
}
export default SignIn;