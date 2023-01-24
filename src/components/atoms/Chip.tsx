import classNames from "classnames";

type Props = {
  className?: string;
  text: string;
};

function Chip({ className, text }: Props) {
  return (
    <div
      className={classNames(className, "inline-block rounded-md px-1 py-1/2")}
    >
      {text}
    </div>
  );
}

export default Chip;
