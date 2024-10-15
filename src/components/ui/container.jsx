import { cx } from "class-variance-authority";

const Container = (props) => {
  return (
    <div
      className={cx("flex flex-col items-center w-full px-4 md:px-10 mt-28")}
    >
      {props.children}
    </div>
  );
};

export default Container;
