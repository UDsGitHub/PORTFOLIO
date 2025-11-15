type Props = {
  skill: String;
};

const SkillChip = ({ skill }: Props) => {
  return (
    <div className="bg-amber-50 py-3 px-5 text-gray-800 rounded-3xl cursor-default duration-300 hover:bg-stone-500 hover:text-white">
      {skill}
    </div>
  );
};

export default SkillChip;
