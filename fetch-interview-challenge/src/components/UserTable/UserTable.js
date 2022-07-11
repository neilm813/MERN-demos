import { UserRow } from '../UserRow';
import styles from './styles.module.css';
const { striped } = styles;

export const UserTable = (props) => {
  const { users } = props;

  if (!users) {
    return null;
  }

  return (
    <table className={striped}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => {
          return <UserRow key={i} user={user} rowIdx={i} />;
        })}
      </tbody>
    </table>
  );
};
