import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = (props: Props) => {
  const { children, maxChars = 25 } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  return (
    <>
      <span>{isExpanded ? children : children.slice(0, maxChars) + "..."}</span>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More..."}
      </button>
    </>
  );
};

export default ExpandableText;
