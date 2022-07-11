import { Address } from '../Address';

export const UserRow = (props) => {
  const { user, rowIdx } = props;

  if (!user) {
    return null;
  }

  const { address, email, name, username } = user;

  return (
    <tr>
      <td>{rowIdx + 1}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <Address address={address} oneLine />
      </td>
    </tr>
  );
};
