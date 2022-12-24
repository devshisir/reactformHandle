
import {
  React,
  BrandLogo,
}from '../utils/GlobalImport'

const authBgStyle={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/img/auth-bg.svg"})`,
}

function RegistrationSuccess() {

  return (
    <div className="loginBody">
      <div id="loginWrapper" style={authBgStyle}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-xxl-7">
              <div className="loginBox">
                <div className="emailPassReset">
                    <img className="img-fluid" src={BrandLogo} alt="" />
                    <h3 className="title-xl dark-100">Account is created and under review with principal or the school admin</h3>
                    <p className="dark-80">We will notify you once it is approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationSuccess