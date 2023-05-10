import { MdHoMdOutlineHome, MdOutlineSearch } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";

const SidebarCard = () => {
  return (
    <>
      <div>
        <div className="fw-semibold d-flex align-items-center">
          {/* { React.createElement()  }/> */}
          Home
        </div>
        <div>
          <MdHome size={20} />
          Home
        </div>
        <div>
          <MdHome size={20} />
          Home
        </div>
      </div>
    </>
  );
};

export default SidebarCard;
