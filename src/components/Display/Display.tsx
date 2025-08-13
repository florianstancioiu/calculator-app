export type Display = {
  primaryText: string;
  secondaryText: string;
};

const Display = ({ primaryText, secondaryText }: Display) => {
  return (
    <div className="bg-bg-secondary text-right p-[1.5rem] mb-[1.5rem]">
      <p>{primaryText}</p>
      <p>{secondaryText}</p>
    </div>
  );
};

export default Display;
