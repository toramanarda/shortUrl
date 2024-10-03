import FacebookIcon from "@/components/svgs/icon-facebook";
import TwitterIcon from "@/components/svgs/icon-twitter";
import PinterestIcon from "@/components/svgs/icon-pinterest";
import InstagramIcon from "@/components/svgs/icon-instagram";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Shortly</h1>
      <div className="footerItem">
        <div className="secondCol">
          <div className="features">
            <h3>Features</h3>
            <a href="#">Link Shortening</a>
            <a href="#">Branded Links</a>
            <a href="#">Analytics</a>
          </div>
          <div className="resourcesFooter">
            <h3>Resources</h3>
            <a href="#">Blog</a>
            <a href="#">Developers</a>
            <a href="#">Support</a>
          </div>
          <div className="company">
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Our Team</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="socialMedias">
          <a href="/">
            <FacebookIcon />
          </a>
          <a href="/">
            <TwitterIcon />
          </a>
          <a href="/">
            <PinterestIcon />
          </a>
          <a href="/">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
