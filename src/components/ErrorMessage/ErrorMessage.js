import './ErrorMessage.css';

function ErrorMessage({message}) {
  return (
    <article className={message ? 'error-message' : 'error-message error-message_type_disabled'}>
      {message}
    </article>
  );
};

export default ErrorMessage;
