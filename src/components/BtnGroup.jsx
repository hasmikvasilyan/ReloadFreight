import { useState } from "react";
import { Link } from "react-scroll";
import { ReactComponent as WatchIcon } from "../assets/img/svg/watchIcon.svg";
import Player from "./Player";


function BtnGroup() {
  const[open, setOpen]=useState(false);

  const handleToggleModal = () => {
    setOpen((prevState) =>!prevState);
  };
  return (
    <div className="btnGroup">
        <Link to="contacts" className="btn btnFilled">
            Join the circle
        </Link>
        <button className="btn btnOutline" onClick={handleToggleModal}>
            <WatchIcon />
            <span>Watch the video</span>
        </button>
        <Player open={open} onCloseModal={handleToggleModal} />
    </div>
  )
}

export default BtnGroup