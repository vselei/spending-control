const Message = ({ children, type }) => (
  <div className={`alert ${type}`}>{children}</div>
);

export default Message;
