
const Footer = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-5 footer-container">
        <div className="row col-md-12">
          <div className="col-md-3 foot">
            <ul>
              <li><h4>Abstract</h4></li>
              <li>Branches</li>
            </ul>
          </div>
          <div className="col-md-3 foot">
            <ul>
              <li><h4>Resources</h4></li>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="col-md-3 foot">
            <ul>
              <li><h4> Community</h4></li>
              <li>Twitter</li>
              <li>LinkedIN</li>
              <li>Facebook</li>
              <li>Dribble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="col-md-3 foot">
            <ul>
              <li><h4>Company</h4></li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
              <br />
              <li><h4>Contact Us</h4></li>
              <li>info@abstract.com</li>
            </ul>
          </div>
        </div>
        <hr />

      </div>
      <div className="copyright container-fluid">
        <p>All right reserve</p>
      </div>
    </>
  )
}
export default Footer;