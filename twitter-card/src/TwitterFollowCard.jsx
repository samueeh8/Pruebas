export default function TwittetrFollowCard() {
  return (
    <article className="tw-followcard">
      <header className="tw-followcard-header">
        <img
          className="tw-followcard-avatar"
          src="https://unavatar.io/midudev"
          alt="avatar de midu"
        />
        <div className="tw-followcard-info">
          <strong className="tw-followcard-name">Miguel Angel Duran</strong>
          <span className="tw-followcard-username">@midudev</span>
        </div>
      </header>
      <aside>
        <button className="tw-followcard-button">Seguir</button>
      </aside>
    </article>
  );
}
