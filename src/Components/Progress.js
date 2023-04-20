export default function Progress(props) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${props.current}</span> of
        <span className="secondary"> $1000</span>
      </h2>
    </section>
  )
}
