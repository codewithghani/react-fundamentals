// import React from "react";
interface Props {
  itemsCount: number;
}
const NavBar = ({ itemsCount }: Props) => {
  return <div>Nav Bar - Products in Shopping Cart: {itemsCount}</div>;
};

export default NavBar;
