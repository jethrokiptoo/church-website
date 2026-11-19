export default function OverviewPage({ topics, completed, query }) {
  const searchTerm = query.trim().toLowerCase()
  const visibleTopics = topics.filter((topic) =>
    `${topic.title} ${topic.summary} ${topic.category}`.toLowerCase().includes(searchTerm),
  )
  const groups = [...new Set(visibleTopics.map((topic) => topic.category))]
  const nextTopic = topics.find((topic) => !completed.includes(topic.slug)) || topics[0]

  return (
    <div className="overview-page">
      <div className="welcome-banner">
        <div className="banner-copy">
          <span className="overline">THE REACT FIELD GUIDE</span>
          <h1>Learn React,<br /><em>one idea at a time.</em></h1>
          <p>Clear explanations and practical examples to help you build a strong foundation in React.</p>
          <a className="primary-button" href={`#/topics/${nextTopic.slug}`}>
            {completed.length ? 'Continue learning' : 'Start learning'} <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="banner-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="atom-core">⚛</div>
          <span className="orbit-dot dot-one" />
          <span className="orbit-dot dot-two" />
          <span className="orbit-dot dot-three" />
          <span className="visual-caption">UI, composed.</span>
        </div>
      </div>

      <section className="learning-overview">
        <div className="overview-heading">
          <div><p className="section-kicker">YOUR LEARNING PATH</p><h2>Explore the topics</h2></div>
          <span className="topic-total">{completed.length} of {topics.length} complete</span>
        </div>
        {groups.map((category, groupIndex) => {
          const groupTopics = visibleTopics.filter((topic) => topic.category === category)
          return (
            <section className="overview-group" key={category}>
              <div className="group-heading"><span>{String(groupIndex + 1).padStart(2, '0')}</span><h3>{category}</h3><span className="group-rule" /></div>
              <div className="topic-card-grid">
                {groupTopics.map((topic, index) => (
                  <a className="topic-card" href={`#/topics/${topic.slug}`} key={topic.slug}>
                    <div className="topic-card-top"><span className="card-number">{String(index + 1).padStart(2, '0')}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
                    <h4>{topic.title}</h4>
                    <p>{topic.summary}</p>
                    <div className="topic-card-meta"><span>{topic.level}</span><span>{topic.readTime} read</span>{completed.includes(topic.slug) && <span className="card-done">✓ Done</span>}</div>
                  </a>
                ))}
              </div>
            </section>
          )
        })}
        {searchTerm && visibleTopics.length === 0 && (
          <p className="empty-search">No topics match “{query}”. Try a different search.</p>
        )}
      </section>
    </div>
  )
}
