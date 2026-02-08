import globe from "../assets/globe.png";

function Header() {
   return(
      <header className="header">
         <img src={globe} alt="world image" />
         <span>my travel journal</span>
      </header>
   )
}

export default Header;