import { useState } from 'react';

import styles from './ProfilePreview.module.css';

console.log(styles);

export const ProfilePreview = (props) => {
  const [likes, setLikes] = useState(props.user.likeCount);

  return (
    <div className={styles.profilePreview}>
      <img
        className={styles.pic}
        src={props.user.imgUrl}
        alt="Thumbnail"
        width="100%"
      />

      <h3>
        {props.user.username} - {likes}
      </h3>

      {/* Create an array full of numbers based on the amount of likes JUST so we can use .map to display a certain number of things */}
      {[...Array(likes).keys()].map((n, i) => (
        <span
          key={i}
          onClick={(e) => {
            setLikes(likes + 1);
          }}
          className={styles.heart}
        >
          &#10084;
        </span>
      ))}
      <p>{props.user.bio}</p>
    </div>
  );
};
