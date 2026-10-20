
const memories = [
  {
    title: "Worship Services",
    description: "Moments of worship, prayer, and fellowship.",
    image: "/images/gallery/worship.jpg",
  },
  {
    title: "Church Conferences",
    description: "Gatherings that strengthen our faith and community.",
    image: "/images/gallery/conference.jpg",
  },
  {
    title: "Community Outreach",
    description: "Serving others and sharing God's love.",
    image: "/images/gallery/outreach.jpg",
  },
  {
    title: "Youth Activities",
    description: "Young people growing together in faith.",
    image: "/images/gallery/youth.jpg",
  },
  {
    title: "Church Celebrations",
    description: "Celebrating milestones and special occasions.",
    image: "/images/gallery/celebrations.jpg",
  },
  {
    title: "Church Family",
    description: "The people and moments that make our church family special.",
    image: "/images/gallery/church-family.jpg",
  },
];

function Gallery() {
  return (
    <main className="page gallery-page">
      <section className="page-heading">
        <p className="eyebrow">OUR LIFE TOGETHER</p>
        <h1>Gallery & Memories</h1>
        <p>
          A collection of moments, milestones, and memories
          from our church family in Uganda.
        </p>
      </section>

      <section className="gallery-grid" aria-label="Church photo gallery">
        {memories.map((memory) => (
          <article className="gallery-card" key={memory.title}>
            <img
              src={memory.image}
              alt={memory.title}
              loading="lazy"
            />
            <div className="gallery-card-content">
              <h2>{memory.title}</h2>
              <p>{memory.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Gallery;
