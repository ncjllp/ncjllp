import "./ProcessFlow.css";

const cards = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  href: "/auth",
}));

export default function ProcessFlow() {
  return (
    <section className="process-flow panel" aria-labelledby="process-flow-heading">
      <div className="process-flow__inner">
        <header className="process-flow__header">
          <h2 id="process-flow-heading" className="process-flow__title">
            Got an Idea? Let&apos;s Make It Official
          </h2>
        </header>

        <div className="process-flow__grid">
          {cards.map((card) => (
            <article key={card.id} className="process-flow__card">
              <div className="process-flow__empty" aria-hidden="true" />
              <a href={card.href} className="process-flow__learn-more">
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
