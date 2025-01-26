import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="footer md:footer-horizontal bg-base-200 text-base-content py-10 px-5 md:px-20">
        <aside>
          <h2 className="text-2xl font-medium">Career Hub</h2>
          <p>
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br /> suffered alteration in some form.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </aside>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-20">
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Contact</h6>
            <a className="link link-hover">524 Broadway , NYC</a>
            <a className="link link-hover">+1 777 - 978 - 5570</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
