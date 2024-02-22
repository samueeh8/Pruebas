import { useState } from "react";

export default function TwittetrFollowCard({ name, username }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followcard-button is-following"
    : "tw-followcard-button";

  const handleClickButton = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followcard">
      <header className="tw-followcard-header">
        <img
          className="tw-followcard-avatar"
          src={`https://unavatar.io/${username}`}
          alt="avatar de midu"
        />
        <div className="tw-followcard-info">
          <strong className="tw-followcard-name">{name}</strong>
          <span className="tw-followcard-username">@{username}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClickButton}>
          {text}
        </button>
      </aside>
    </article>
  );
}
