import { ThreeDot } from "react-loading-indicators";

const Loading = ({ height, margintop }) => {
  return (
    <div
      className={`relative flex items-center justify-center w-full ${height} ${margintop}`}
    >
      <ThreeDot
        variant="brick-stack"
        color="#fff"
        size="small"
        text=""
        textColor=""
      />
    </div>
  );
};

export default Loading;
