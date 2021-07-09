import React, { useState } from "react";

import styles from "./ProfilePreview.module.css";

const ProfilePreview = (props) => {
  const [likes, setLikes] = useState(props.profile.likeCount);

  return (
    <div className={styles.profilePreview}>
      <img
        className={styles.pic}
        src={props.profile.imgUrl}
        alt={props.profile.username}
        width="100%"
      />
      <h3>
        {props.profile.username} {likes >= 10 && "🔥"}
      </h3>
      <p>{props.profile.bio}</p>
      <p>
        <span
          className={styles.heart}
          onClick={(e) => {
            setLikes(likes + 1);
          }}
        >
          {likes} {Array(likes).fill(<span>&hearts;</span>)}
        </span>
      </p>
    </div>
  );
};

export default ProfilePreview;
