import { Link } from "react-scroll";
import { ReactComponent as WatchIcon } from "../assets/img/svg/watchIcon.svg";

function BtnGroup() {
  return (
    <div className="btnGroup">
        <Link to="contacts" className="btn btnFilled">
            Join the circle
        </Link>
        <Link to="/" className="btn btnOutline">
            <WatchIcon />
            <span>Watch the video</span>
        </Link>
    </div>
  )
}

export default BtnGroup