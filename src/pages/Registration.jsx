
import {
  React,
  useForm,
  BrandLogo,
  LogoLogin,
  NavLink,
  User2,
  Email,
  Phone,
  AvatarUpload,
  CloundUpload,
  Lock,
  Eye,
}from '../utils/GlobalImport'

const authBgStyle={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/img/auth-bg.svg"})`,
}


function Registration() {
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
      password: '',
      
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
                      <h3 className="title-xl dark-100">Register</h3>
                      <div className="tabBtnLink">
                        <nav>
                          <ul>
                            <li>
                              <button type="button" className="btn btn-transparent active">School admin</button>
                            </li>
                            <li>
                              <button type="button" className="btn btn-transparent null">Teacher</button>
                            </li>
                          </ul>
                        </nav>
                      </div>
                  </div>
                </div>
                <div className="loginFormArea">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="imageUploadForm mb-4">
                      <div className="previewImageBox text-center">
                          <img className="img-fluid" src={AvatarUpload} alt="" />
                      </div>
                      <div className="uploadSelect">
                          <div className="input__file">
                              <input type="file" id="file__select" name="file" />
                              <label className="file__select__handle text-center" htmlFor="file__select">
                                  <img src={CloundUpload} className="injectable icon" alt="" />
                                  <span className="dark-40">Change photo</span>
                              </label>
                            </div>
                      </div>
                    </div>
                    {/* single input box */}
                    <div className="input__box">
                      <div className={`input-group ${errors.name ? "is-invalid" : ""} `}>
                      
                          <span className="input-group-text" id="basic-addon1">
                            <img src={User2} alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input {...register("name", { required: true, minLength: 5, } )}  type="text" 
                            className={`form-control ${errors.name ? "is-invalid" : ""}`} 
                            id="nameFloat" placeholder="Full name" />
                            <label htmlFor="nameFloat">Full name</label>
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
                            <label htmlFor="emailFloat">Email address</label>
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
                            <label htmlFor="phoneFloat">Phone number</label>
                          </div>
                      </div>
                      <div className="error-message">
                          {errors?.phone?.type === "required" && <p>Please enter your phone number</p>}
                          {errors?.phone?.type === "minLength" && <p>Please enter atlest 5 charecter</p>}
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
                    {/* single input box */}
                    <div className="input__box rightIconInput">
                      <div className={`input-group ${errors.password ? "is-invalid" : ""} `}>
                          <span className="input-group-text" id="basic-addon1">
                            <img src={Lock} className="injectable" alt="" />
                          </span>
                          <div className="form-floating floting__input flex-1">
                            <input {...register("password", { required: true, minLength: 6, })}  type="password" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="floatingInput2" placeholder="name@example.com" />
                            <label htmlFor="floatingInput2">Confirm password</label>
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

export default Registration