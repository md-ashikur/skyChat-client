import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { CgMenuGridO } from "react-icons/cg";
import { GiSplitCross } from "react-icons/gi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { MdCall, MdFavorite } from "react-icons/md";
import Inbox from "../../Components/Inbox/Inbox";
import SideNav from "../../Components/SideNav/SideNav";


const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-1 mx-4 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Recent</h2>
            <p className="text-sm">Chat from your friends</p>
          </div>
          <CgMenuGridO
            className="text-2xl text-green-400 w-10  rounded-full bg-green-100 hover:bg-green-200"
            onClick={toggleDrawer}
          />
        </div>

        <Drawer
          open={isOpen}
          enableOverlay={false}
          onClose={toggleDrawer}
          direction="left"
          size="70px"
          className="flex justify-center pt-10"
        >
          <div>
          <GiSplitCross
            className="text-2xl animate-spin text-green-300 w-10  rounded-full hover:text-red-500 hover:rotate-90 duration-300"
            onClick={toggleDrawer}
          />
          <SideNav/>
          </div>
        </Drawer>
        <div className="gap-1 flex my-5">
          <button className="bg-green-400 text-white flex items-center justify-center gap-2 w-20 px-1 shadow-lg shadow-green-100 rounded-full ">
            <BsFillChatDotsFill />
            Chat
          </button>
          <button className="hover:bg-green-400 hover:text-white flex items-center justify-center gap-2 w-20 px-1 shadow-lg shadow-green-100 rounded-full ">
            <MdCall />
            Call
          </button>
          <button className="hover:bg-green-400 hover:text-white flex items-center justify-center gap-2 w-28 px-1 py-1 shadow-lg shadow-green-100 rounded-full ">
            <IoMdContacts />
            Contact
          </button>
        </div>
        <h3 className="text-3xl font-bold">Chat</h3>
        <p className="text-sm">Start New Conversation</p>
        
      </div>
      <div className="col-span-4 bg-green-100	h-screen">
        <Inbox />
      </div>
    </div>
  );
};

export default Home;
