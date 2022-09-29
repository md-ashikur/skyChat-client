import React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import avater1 from "../../Images/avater1.jpg";
import { MdCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { CgMoreVerticalO } from "react-icons/cg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Inbox = () => {
  const [moreOpen, setMoreOpen] = React.useState(false);
  const toggleDrawer = () => {
    setMoreOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="bg-white w-auto h-20 rounded px-5 mx-5 my-10 flex items-center justify-between">
        <div className="flex items-center">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            variant="dot"
          >
            <Avatar variant="circular" alt="Remy Sharp" src={avater1} />
          </StyledBadge>

          <div className="mx-3">
            <h3 className="font-bold text-xl">Josephin water</h3>
            <p>active</p>
          </div>
        </div>

        {/* inbox call section================ */}
        <div className="flex gap-2">
          <MdCall className="bg-green-100 rounded-full w-10 h-8 p-1" /> {/*audio call icon*/}
          <FaVideo className="bg-green-100 rounded-full w-10 h-8 p-2" /> {/*video call icon*/}
          
          {/*Inbox more option icon*/}
          <Drawer
            open={moreOpen}
            enableOverlay={false}
            onClose={toggleDrawer}
            direction="right"
            size="350px"
            className="flex justify-right"
          >
            <MdOutlineArrowBackIosNew
              onClick={toggleDrawer}
              className="my-5 text-2xl rounded-full w-20 h-10 p-2 hover:rotate-180 duration-300"
            />
          </Drawer>
          <CgMoreVerticalO
            onClick={toggleDrawer}
            className="bg-green-100 rounded-full w-10 h-8 p-2"
          />
        </div>
      </div>

      <div className="absolute bottom-0 flex h-10 bg-white z-50">
<div></div>
      </div>
    </div>
  );
};

export default Inbox;
