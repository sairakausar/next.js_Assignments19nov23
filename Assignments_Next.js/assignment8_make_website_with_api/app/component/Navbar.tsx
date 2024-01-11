import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around align-middle  h-20 bg-gradient-to-l from-lime-400 to-emerald-600    ">
        <div className="grid grid-cols-1 rounded-full border border-black h-full">Home</div>
        <div className="grid grid-cols-2">Logo</div>
        <div className="grid grid-cols-1">3</div>
        <br />

        
        <br />
      </div>
      <hr className="w-full mt-2 border-t-2 border-gray-700" />
    </>
  );
}

export default Navbar