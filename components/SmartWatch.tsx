import Link from "next/link";
import Tcssidebyside from "@/components/svg/Tcssidebyside";

const SmartWatch = () => {
  return (
    <div className="smart-watch">
      <div className="logos">
        <Link href="/" className="circl-logos">
          <Tcssidebyside name="circl-logo" />
          <h1>the circl studio #stylescape</h1>
        </Link>
        <p>open the website in larger devices</p>
      </div>
    </div>
  );
};

export default SmartWatch;
