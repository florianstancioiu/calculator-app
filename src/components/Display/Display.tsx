export type Display = {
  text: string;
};

const Display = ({ text }: Display) => {
  return (
    <div className="bg-bg-secondary text-right p-[1.5rem] mb-[1.5rem]">
      <p>{text}</p>
    </div>
  );
};

export default Display;
