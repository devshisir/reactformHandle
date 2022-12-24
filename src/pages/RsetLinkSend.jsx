
import {
  React,
  BrandLogo,
}from '../utils/GlobalImport'

const authBgStyle={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/img/auth-bg.svg"})`,
}

function ResetLinkSend() {

  return (
    <div className="loginBody">
      <div id="loginWrapper" style={authBgStyle}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-xxl-7">
              <div className="loginBox">
                <div className="emailPassReset">
                    <img className="img-fluid" src={BrandLogo} alt="" />
                    <h3 className="title-xl dark-100">Password reset link has been sent successfully</h3>
                    <p className="dark-80">Password reset link not received? <br />
                      <a href="/">Resend link</a>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetLinkSend