import FooterItem from "./FooterItem";
import FooterIcon from "./FooterIcon";
import logo from "/images/logo.svg";
import facebookIcon from "/images/icon-facebook.svg";
import twitterIcon from "/images/icon-twitter.svg";
import pinterestIcon from "/images/icon-pinterest.svg";
import instagramIcon from "/images/icon-instagram.svg";

function Footer() {
  return (
    <footer id="footer" className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <img src={logo} alt="" className="w-44 md:ml-3" />
            </div>

            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <FooterItem text="About" />
              <FooterItem text="Careers" />
              <FooterItem text="Events" />
              <FooterItem text="Products" />
              <FooterItem text="Support" />
            </div>
          </div>

          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <div className="flex items-center justify-center mx-auto space-x-4 md:mx-0 md:justify-end">
              <FooterIcon icon={facebookIcon} />
              <FooterIcon icon={twitterIcon} />
              <FooterIcon icon={pinterestIcon} />
              <FooterIcon icon={instagramIcon} />
            </div>
            <div className="font-bold">
              &copy; 2024 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
