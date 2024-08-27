import { cx } from "class-variance-authority";

const LabelSelect = (props) => {
  return (
    <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {props.children}
    </p>
  );
};

export default LabelSelect;
