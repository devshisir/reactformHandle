
import {
  React,
  BrandLogo,
  AvatarUpload,
  CloundUpload
}from '../utils/GlobalImport'

const authBgStyle={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/img/auth-bg.svg"})`,
}

function UserImageUpload() {

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
                      <h3 className="title-xl dark-100">Upload your photo</h3>
                  </div>
                </div>
                <div className="loginFormArea">
                  <form action="#">
                    <div className="imageUploadForm">
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
                    <div className="actionsBtnForm">
                        <button className="btn btn-primary">Continue</button>
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

export default UserImageUpload