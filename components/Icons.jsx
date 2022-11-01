import React from "react";

function Icons({ icon, hover, ...rest }) {
  return (
    <button
      className={`flex items-center  justify-center hover:cursor-pointer ${hover} lg:dark:hover:bg-AS-dark-200  lg:w-[80px] lg:h-[80px] rounded-[50%]`}
      {...rest}
    >
      <i className={`ri-${icon} dark:text-gray-200  text-3xl text-white`} />
    </button>
  );
}

export default Icons;
