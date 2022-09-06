export const User = (props) => {
  const { user } = props;

  if (!user) {
    return null;
  }

  const { email, firstName, lastName, username } = user;

  return (
    <div>
      <h2>
        {firstName} {lastName} ({username})
      </h2>
      <p>{email}</p>
    </div>
  );
};
