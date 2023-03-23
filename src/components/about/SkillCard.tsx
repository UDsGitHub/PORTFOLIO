import React from "react";

type Props = {
  skill: String;
};

const SkillCard = ({ skill }: Props) => {
  return (
    <div className="bg-amber-50 p-4 text-gray-800 rounded-xl cursor-default duration-300 hover:bg-stone-500 hover:text-white">
      {skill}
    </div>
  );
};

export default SkillCard;
