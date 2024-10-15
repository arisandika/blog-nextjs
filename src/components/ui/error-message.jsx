const ErrorMessage = ({ text }) => {
  return text ? <small className="text-red-500">{text}</small> : null;
};

export default ErrorMessage;
