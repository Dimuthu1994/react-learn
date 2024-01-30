import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart size={20} color="#ff6b81" onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
