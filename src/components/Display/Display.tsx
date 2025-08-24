export type Display = {
  text: string;
};

const Display = ({ text }: Display) => {
  return (
    <div
      data-testid="display-component"
      className="bg-secondary text-right p-[1.5rem] mb-[1.5rem] rounded-[0.625rem] overflow-hidden inline-block align-middle w-full"
    >
      <p data-testid="display-text" className="h-[1.875rem] text-3xl font-bold">
        {text}
      </p>
    </div>
  );
};

export default Display;
