import {
  React,
  OcError,
}from '../utils/GlobalImport'
function Error404() {
  return (
    <div className="errorPageWrapper">
      <div className="container">
        <div className="row errorPge">
          <div className="col-md-6 mx-auto">
            <div className="errorPageContent text-center">
              <div className="errorImage">
                <img src={OcError} alt="" />
              </div>
              <h1 className='dark-100'>404</h1>
              <p className='dark-80'>Oops! Looks like you followed a bad link. <br /> If you think this is a problem with us, please tell us.</p>
              <a href="/" className='btn btn-primary'>Go back home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404