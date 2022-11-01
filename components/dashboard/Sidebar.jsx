import Link from "next/link";
import React, { useState } from "react";
import { sideIcons, toggle } from "../../utilities";
import Icons from "../Icons";

function Sidebar() {
  const [expand, setExpand] = useState(false);
  const handleClick = () => toggle(expand, setExpand);
  return (
    <div className={`h-screen fixed ${"w-[120px]"} transparent duration-300`}>
      <div className="w-full h-full flex p-8 flex-col items-center relative">
        {/* <button onClick={handleClick}>icon</button> */}
        <div className="justify-self-center mt-24 flex flex-col items-center justify-center">
          {sideIcons.map((icon) => (
            <Link key={icon.id} href={icon.path}>
              <div className={`py-4 ${icon.top ? "mt-16" : "mt-0"}`}>
                <Icons icon={icon.name} hover={"hover:bg-secondary"} />
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="justify-self-end">end</div> */}
      </div>
    </div>
  );
}

export default Sidebar;
