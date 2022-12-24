
import {
  React,
  useForm,
  BrandLogo,
  User,
}from '../utils/GlobalImport'

const authBgStyle={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/img/auth-bg.svg"})`,
}


function ForgotPassword() {
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
                      <h3 className="title-xl dark-100">Forget password</h3>
                      <p className="dark-80">Enter your registered email address or mobile number to reset password.</p>
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

export default ForgotPassword