export default function Progress({ target, raised }) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${raised}</span> of
        <span className="secondary"> ${target}</span>
      </h2>
    </section>
  );
}
