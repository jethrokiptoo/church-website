export default function TopicSidebar({ categories, topics, activeSlug, completed, query }) {
  const normalizedQuery = query.trim().toLowerCase()

  return (
    <aside className="sidebar" aria-label="Course navigation">
      <nav className="topic-navigation" aria-label="React topics">
        {categories.map((category) => {
          const visibleTopics = topics.filter((topic) =>
            topic.category === category &&
            (!normalizedQuery || `${topic.title} ${topic.summary} ${topic.category}`.toLowerCase().includes(normalizedQuery)),
          )

          if (!visibleTopics.length) return null

          return (
            <section className="nav-group" key={category}>
              <h2>{category}</h2>
              {visibleTopics.map((topic, index) => (
                <a
                  className={`topic-nav-link ${topic.slug === activeSlug ? 'is-active' : ''}`}
                  href={`#/topics/${topic.slug}`}
                  key={topic.slug}
                  aria-current={topic.slug === activeSlug ? 'page' : undefined}
                >
                  <span className="topic-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="topic-nav-title">{topic.title}</span>
                  {completed.includes(topic.slug) && <span className="completed-dot" aria-label="Completed">✓</span>}
                </a>
              ))}
            </section>
          )
        })}
        {normalizedQuery && !topics.some((topic) => `${topic.title} ${topic.summary} ${topic.category}`.toLowerCase().includes(normalizedQuery)) && (
          <p className="no-results">No topics found. Try another search.</p>
        )}
      </nav>
    </aside>
  )
}
