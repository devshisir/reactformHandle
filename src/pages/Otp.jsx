
import {
  React,
  useForm,
  BrandLogo,
}from '../utils/GlobalImport'

const authBgStyle={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/img/auth-bg.svg"})`,
}


function Otp() {

const {
  register,
  handleSubmit,
  formState: { errors },
  setFocus,
} = useForm({
  defaultValues: {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  }
});



const onSubmit = (data) => {
  console.log(data);
}

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
                      <h3 className="title-xl dark-100">Enter OTP</h3>
                      <p className='dark-80'>We have send a one time password to <br /> “+91-9988776655”.</p>
                  </div>
                </div>
                <div className="loginFormArea">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="otpBox">
                      {/* single input box */}
                      <div className="otpInput">
                        <div className="input__box normal__input">
                          <input {...register("otp1", { required: true, minLength: 1,maxLength:1, } )} 
                            type="text" 
                            className={`form-control ${errors.otp1 ? "otp-error" : ""}`}
                            />
                        </div>
                      </div>
                      {/* single input box */}
                      <div className="otpInput">
                        <div className="input__box normal__input">
                          <input {...register("otp2", { required: true, minLength: 1,maxLength:1, } )} 
                            type="text" 
                            className={`form-control ${errors.otp2 ? "otp-error" : ""}`}
                            />
                        </div>
                      </div>
                      {/* single input box */}
                      <div className="otpInput">
                        <div className="input__box normal__input">
                          <input {...register("otp3", { required: true, minLength: 1,maxLength:1, } )} 
                            type="text" 
                            className={`form-control ${errors.otp3 ? "otp-error" : ""}`}
                            />
                        </div>
                      </div>
                      {/* single input box */}
                      <div className="otpInput">
                        <div className="input__box normal__input">
                          <input {...register("otp4", { required: true, minLength: 1,maxLength:1, } )} 
                            type="text" 
                            className={`form-control ${errors.otp4 ? "otp-error" : ""}`}
                            />
                        </div>
                      </div>
                    </div>
                    {/* form actions */}
                    <div className="actionsBtnForm">
                        <button type='submit' className="btn btn-primary">Enter OTP</button>
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

export default Otp