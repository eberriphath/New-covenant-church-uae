const ministries = [
  {
    title: "Worship",
    description: "Growing together through worship and praise.",
  },
  {
    title: "Youth",
    description: "Encouraging young people to grow in faith.",
  },
  {
    title: "Children",
    description: "Helping children learn about faith and God's love.",
  },
  {
    title: "Outreach",
    description: "Serving our communities and sharing the Gospel.",
  },
];

function Ministries() {
  return (
    <main className="page">
      <section className="page-heading">
        <p className="eyebrow">SERVE AND GROW</p>
        <h1>Our Ministries</h1>
        <p>Discover opportunities to grow, connect, and serve.</p>
      </section>

      <section className="ministry-grid">
        {ministries.map((ministry) => (
          <article className="ministry-card" key={ministry.title}>
            <h2>{ministry.title}</h2>
            <p>{ministry.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Ministries;
