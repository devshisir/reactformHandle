
import {
  React,
  useForm,
  BrandLogo,
  NavLink,
  User2,
  Email,
  Phone,
}from '../utils/GlobalImport'

const authBgStyle={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/img/auth-bg.svg"})`,
}


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    defaultValues: { 
      name: "",
      admincode: '',
      email: '',
      phone: '',
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
                      <h3 className="title-xl dark-100">Register</h3>
                  </div>
                </div>
                <div className="loginFormArea">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* single input box */}
                    <div className="input__box">
                      <div className={`input-group ${errors.name ? "is-invalid" : ""} `}>
                      
                          <span className="input-group-text" id="basic-addon1">
                            <img src={User2} alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input {...register("name", { required: true, minLength: 5, } )}  type="text" 
                            className={`form-control ${errors.name ? "is-invalid" : ""}`} 
                            id="nameFloat" placeholder="Enter your name" />
                            <label htmlFor="nameFloat">Enter your name</label>
                          </div>
                      </div>
                      <div className="error-message">
                          {errors?.name?.type === "required" && <p>Please enter your name</p>}
                          {errors?.name?.type === "minLength" && <p>Please enter atlest 5 charecter</p>}
                      </div>
                    </div>
                    {/* single input box */}
                    <div className="input__box">
                      <div className={`input-group ${errors.admincode ? "is-invalid" : ""} `}>
                      
                          <span className="input-group-text" id="basic-addon1">
                            <img src={User2} alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input {...register("admincode", { required: true, minLength: 5, } )}  type="text" 
                            className={`form-control ${errors.admincode ? "is-invalid" : ""}`} 
                            id="codeFloat" placeholder="Enter admin code" />
                            <label htmlFor="codeFloat">Admin code</label>
                          </div>
                      </div>
                      <div className="error-message">
                          {errors?.admincode?.type === "required" && <p>Please enter admin code</p>}
                          {errors?.admincode?.type === "minLength" && <p>Please enter atlest 5 charecter</p>}
                      </div>
                    </div>
                    {/* single input box */}
                    <div className="input__box">
                      <div className={`input-group ${errors.email ? "is-invalid" : ""} `}>
                      
                          <span className="input-group-text" id="basic-addon1">
                            <img src={Email} alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input 
                            {...register("email", { required: true, minLength: 5, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })}

                            type="email" 
                            className={`form-control ${errors.email ? "is-invalid" : ""}`} 
                            id="emailFloat" placeholder="Enter your email" />
                            <label htmlFor="emailFloat">Enter your email</label>
                          </div>
                      </div>
                      <div className="error-message">
                          {errors?.email?.type === "required" && <p>Please enter your email</p>}
                          {errors?.email?.type === "minLength" && <p>Please enter atlest 5 charecter</p>}
                          {errors?.email?.type === "pattern" && <p>Please insert valid email address</p>}
                      </div>
                    </div>
                    {/* single input box */}
                    <div className="input__box">
                      <div className={`input-group ${errors.phone ? "is-invalid" : ""} `}>
                      
                          <span className="input-group-text" id="basic-addon1">
                            <img src={Phone} alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input {...register("phone", { required: true, minLength: 5, } )}  type="text" 
                            className={`form-control ${errors.phone ? "is-invalid" : ""}`} 
                            id="phoneFloat" placeholder="Enter phone" />
                            <label htmlFor="phoneFloat">Enter phone number</label>
                          </div>
                      </div>
                      <div className="error-message">
                          {errors?.phone?.type === "required" && <p>Please enter your phone number</p>}
                          {errors?.phone?.type === "minLength" && <p>Please enter atlest 5 charecter</p>}
                      </div>
                    </div>
                    {/* form actions */}
                    <div className="actionsBtnForm">
                        <button type='submit' className="btn btn-primary">Create new account</button>
                    </div>
                    <div className="alreadyLogin text-center">
                        <NavLink to='/' className="btn btn-transparent no-hover">Already have an account? Login here</NavLink>
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