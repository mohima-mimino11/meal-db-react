

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#FFC1070D] text-base-content p-10 mt-32">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover text-[#403F3F]">Branding</a>
    <a className="link link-hover text-[#403F3F]">Design</a>
    <a className="link link-hover text-[#403F3F]">Marketing</a>
    <a className="link link-hover text-[#403F3F]">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover text-[#403F3F]">About us</a>
    <a className="link link-hover text-[#403F3F]">Contact</a>
    <a className="link link-hover text-[#403F3F]">Jobs</a>
    <a className="link link-hover text-[#403F3F]">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover text-[#403F3F]">Terms of use</a>
    <a className="link link-hover text-[#403F3F]">Privacy policy</a>
    <a className="link link-hover text-[#403F3F]">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-warning join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    </div>
  );
};

export default Footer;