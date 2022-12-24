
import {
  React,
  useForm,
  BrandLogo,
  Lock,
  Eye,
}from '../utils/GlobalImport'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'





const authBgStyle={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/img/auth-bg.svg"})`,
}


function ResetPassword() {




// password mismatch 
const formSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is mendatory')
    .min(3, 'Password must be at 3 char long'),
  passwordConfirm: Yup.string()
    .required('Password is mendatory')
    .oneOf([Yup.ref('password')], 'Passwords does not match'),
})
const formOptions = { resolver: yupResolver(formSchema) }

// handle form submit
const { register, handleSubmit, formState } = useForm(formOptions)
const { errors } = formState
function onSubmit(data) {
  console.log(JSON.stringify(data, null, 4))
  return false
}


  return (
    <div className="loginBody">
      <div id="loginWrapper" style={authBgStyle}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-xxl-7">
              <div className="loginBox">
                <div className="lginTopHeader">
                  <div className="leftBox">
                      <img className="img-fluid" src={BrandLogo} alt="" />
                  </div>
                  <div className="rightBox">
                      <h3 className="title-xl dark-100">Reset password</h3>
                      <p className='dark-80'>Set a new password for your account</p>
                  </div>
                </div>
                <div className="loginFormArea">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    
                    {/* single input box */}
                    <div className="input__box rightIconInput">
                      <div className={`input-group ${errors.password ? "is-invalid" : ""} `}>
                          <span className="input-group-text" id="basic-addon1">
                            <img src={Lock} className="injectable" alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input {...register("password", { required: true, minLength: 6, })}  type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} id="floatingInput2" placeholder="new password" />
                            <label htmlFor="floatingInput2">Enter new passsword</label>
                          </div>
                          <div className="rightIconBox">
                            <a href="/">
                              <img className="injectable" src={Eye} alt="" />
                            </a>
                          </div>
                      </div>
                      <div className="error-message">
                          <p>{errors.password?.message}</p>
                      </div>
                    </div>
                    {/* single input box */}
                    <div className="input__box rightIconInput">
                      <div className={`input-group ${errors.passwordConfirm ? "is-invalid" : ""} `}>
                          <span className="input-group-text" id="basic-addon1">
                            <img src={Lock} className="injectable" alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input {...register("passwordConfirm", { required: true, minLength: 6, })}  type="password" className={`form-control ${errors.passwordConfirm ? "is-invalid" : ""}`} id="floatingInput3" placeholder="Confirm new password" />
                            <label htmlFor="floatingInput3">Confirm new passsword</label>
                          </div>
                          <div className="rightIconBox">
                            <a href="/">
                              <img className="injectable" src={Eye} alt="" />
                            </a>
                          </div>
                      </div>
                      <div className="error-message">
                          <p>{errors.passwordConfirm?.message}</p>
                      </div>
                    </div>
                    {/* form actions */}
                    <div className="actionsBtnForm">
                        <button type='submit' className="btn btn-primary">Reset password</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword