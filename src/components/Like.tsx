import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
const Like = (props: Props) => {
  const { onClick } = props;
  const [clicked, setClicked] = useState(true);
  const COLOR = "ff6b81";
  const SIZE = 40;

  const toggle = () => {
    setClicked(!clicked);
    onClick();
  };

  if (clicked)
    return <AiFillHeart onClick={toggle} color={COLOR} size={SIZE} />;

  return <AiOutlineHeart onClick={toggle} size={SIZE} />;
};

export default Like;
