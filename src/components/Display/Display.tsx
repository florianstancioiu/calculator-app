export type Display = {
  text: string;
};

const Display = ({ text }: Display) => {
  return (
    <div
      data-testid="display-component"
      className="bg-bg-secondary text-right p-[1.5rem] mb-[1.5rem]"
    >
      <p className="h-[1.5rem]">{text}</p>
    </div>
  );
};

export default Display;
