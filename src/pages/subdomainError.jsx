import {
  React,
  SubdomainErrorImg,
}from '../utils/GlobalImport'
function subDomainError() {
  return (
    <div className="errorPageWrapper">
      <div className="container">
        <div className="row errorPge">
          <div className="col-md-6 mx-auto">
            <div className="errorPageContent text-center">
              <div className="errorImage">
                <img src={SubdomainErrorImg} alt="" />
              </div>
              <h4 className='dark-100'>Sub-domain not Exist!</h4>
              <p className='dark-80'>Oops! Looks like you followed a bad link. <br /> If you think this is a problem with us, please tell us.</p>
              <a href="/" className='btn btn-primary'>Go back home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default subDomainError