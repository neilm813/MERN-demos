import styles from './User.module.css';

import { CircleImg } from '../CircleImg';

export const User = (props) => {
  const { user } = props;

  if (!user) {
    return null;
  }

  const { email, image, firstName, lastName, username } = user;

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CircleImg src={image} alt={`${firstName} ${lastName}`} width="50%" />
      </div>
      <h2>
        {firstName} {lastName} ({username})
      </h2>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
};
