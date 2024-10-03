import Logo from "@/components/svgs/logo";

const DesktopHeader = () => {
  return (
    <div className="desktopHeader">
      <Logo />
      <div className="desktopNav">
        <div className="nav">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
      </div>
      <div className="loginNav">
        <a href="#">Login</a>
        <a  href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default DesktopHeader;
