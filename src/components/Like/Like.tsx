// import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
interface Props {
  size: number;
  onClick: () => void;
}

const Like = ({ size, onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggler = () => {
    setStatus(!status);
    onClick();
  };
  return (
    <div>
      {status ? (
        <FaHeart size={size} onClick={toggler} color="#ff6b81" />
      ) : (
        <FaRegHeart size={size} onClick={toggler} />
      )}
    </div>
  );
};

export default Like;
