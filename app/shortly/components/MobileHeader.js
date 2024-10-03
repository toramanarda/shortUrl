"use client";
import Logo from "@/components/svgs/logo";


const MobileHeader = () => {
  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    if (menu) {
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <div className="mobileHeader">
      <Logo />
      <div className="hamburgerMenu">
        <div className="menu-container">
          <div className="menu-icon" onClick={toggleMenu}>☰</div>
          <nav id="menu" className="menu" style={{ display: 'none' }}>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li className="resources"><a href="#">Resources</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#" className="sign">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
