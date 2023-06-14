import Link from "next/link";
import Tcssidebyside from "./svg/Tcssidebyside";

const Footer = () => {
  return (
    <footer>
      <div className="logos">
        <Link href="/" className="circl-logos">
          <Tcssidebyside name="circl-logo" />
          <p>the circl studio</p>
        </Link>
      </div>
      <p>for clients</p>
    </footer>
  );
};

export default Footer;
