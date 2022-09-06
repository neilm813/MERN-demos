// Not named Error because of the built in Error class.

export const ShowError = (props) => {
  const { error, children } = props;

  if (!error) {
    return null;
  }

  return (
    <div
      style={{
        display: 'inline-block',
        border: '1px solid red',
        borderRadius: '5px',
        padding: '1rem',
      }}
    >
      <p style={{ color: 'red' }}>{error.message}</p>
      {children}
    </div>
  );
};
