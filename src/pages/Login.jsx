
import {
  React,
  useForm,
  BrandLogo,
  LogoLogin,
  User,
  Lock,
  Eye,
  NavLink
}from '../utils/GlobalImport'

const authBgStyle={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/img/auth-bg.svg"})`,
}


function Login() {
// handle form submit

const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
  setFocus,
} = useForm({
  defaultValues: { 
    email: "",
    password: '',
    pinPass: '',
  }
});



const onSubmit = (data) => {
  console.log(data);
}
console.log(watch("email"));

// this is for autofocus after getting error
React.useEffect(() => {
  const firstError = Object.keys(errors).reduce((field, a) => {
    return !!errors[field] ? field : a;
  }, null);
  if (firstError) {
    setFocus(firstError);
  }
}, [errors, setFocus]);


  return (
    <div className="loginBody">
      <div className="loginHeader">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="logoArea">
                <a href="https://habrie.com/">
                  <img className="img-fluid" src={LogoLogin} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="loginMobileHeader">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-8">
              <div className="logoBox">
                <a href="https://habrie.com/">
                  <img
                    className="injectable"
                    src={LogoLogin}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                      <h3 className="title-xl dark-100">Login</h3>
                  </div>
                </div>
                <div className="loginFormArea">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* single input box */}
                    <div className="input__box">
                      <div className={`input-group ${errors.email ? "is-invalid" : ""} `}>
                      
                          <span className="input-group-text" id="basic-addon1">
                            <img src={User} alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input {...register("email", { required: true, minLength: 7, } )}  type="text" 
                            className={`form-control ${errors.email ? "is-invalid" : ""}`} 
                            id="floatingInput1" placeholder="name@example.com" />
                            <label htmlFor="floatingInput1">Enter Email/Mobile</label>
                          </div>
                      </div>
                      <div className="error-message">
                          {errors?.email?.type === "required" && <p>Please enter your email or phone number</p>}
                          {errors?.email?.type === "minLength" && <p>Please enter atlest 7 charecter</p>}
                      </div>
                    </div>
                    {/* single input box */}
                    <div className="input__box rightIconInput">
                      <div className={`input-group ${errors.password ? "is-invalid" : ""} `}>
                          <span className="input-group-text" id="basic-addon1">
                            <img src={Lock} className="injectable" alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input {...register("password", { required: true, minLength: 6, })}  type="password" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="floatingInput2" placeholder="name@example.com" />
                            <label htmlFor="floatingInput2">Enter passsword</label>
                          </div>
                          <div className="rightIconBox">
                            <a href="/">
                              <img className="injectable" src={Eye} alt="" />
                            </a>
                          </div>
                      </div>
                      <div className="error-message">
                          {errors?.password?.type === "required" && <p>Please enter your password</p>}
                          {errors?.password?.type === "minLength" && <p>Please enter atlest 6 charecter</p>}
                      </div>
                    </div>
                    <p style={{ cursor: 'default' }} className="btn">OR</p>
                    {/* single input box */}
                    <div className="input__box">
                      <div className={`input-group ${errors.pinPass ? "is-invalid" : ""} `}>
                          <span className="input-group-text" id="basic-addon1">
                            <img src={Lock} className="injectable" alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input {...register("pinPass", { minLength: 6, })}  type="text" className={`form-control ${errors.pinPass ? "is-invalid" : ""}`} id="floatingInput3" placeholder="name@example.com" />
                            <label htmlFor="floatingInput2">Enter pin number</label>
                          </div>
                      </div>
                      <div className="error-message">
                          {errors?.pinPass?.type === "minLength" && <p>Please enter atlest 6 charecter</p>}
                      </div>
                    </div>
                    {/* forgot pass */}
                    <div className="forgotPass">
                        <NavLink to="forgot-password">Forget password?</NavLink>
                    </div>
                    {/* form actions */}
                    <div className="actionsBtnForm">
                        <button type='submit' className="btn btn-primary">Login</button>
                        <NavLink to='registration' className="btn btn-transparent">Create a new account</NavLink>
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

export default Login