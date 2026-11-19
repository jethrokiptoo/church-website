export default function TopicPage({ topic, previousTopic, nextTopic, isCompleted, onToggleComplete }) {
  return (
    <article className="topic-page">
      <div className="breadcrumbs"><a href="#/">All topics</a><span>/</span><span>{topic.category}</span></div>
      <header className="topic-page-header">
        <div className="topic-page-meta"><span className="topic-category-pill">{topic.category}</span><span>{topic.level}</span><span className="meta-divider">·</span><span>{topic.readTime} read</span></div>
        <h1>{topic.title}</h1>
        <p className="topic-summary">{topic.summary}</p>
      </header>
      <div className="topic-content">
        <section className="concept-card">
          <span className="concept-icon" aria-hidden="true">✳</span>
          <div><p className="concept-label">THE BIG IDEA</p><p>{topic.intro}</p></div>
        </section>
        {topic.sections.map((section, index) => (
          <section className="lesson-section" key={section.title}>
            <div className="lesson-title"><span>{String(index + 1).padStart(2, '0')}</span><h2>{section.title}</h2></div>
            <p>{section.body}</p>
            {section.code && (
              <div className="code-card">
                <div className="code-card-header"><span className="window-dots"><i /><i /><i /></span><span>Example</span><button type="button" className="copy-label" onClick={() => navigator.clipboard?.writeText(section.code)}>Copy</button></div>
                <pre><code>{section.code}</code></pre>
              </div>
            )}
            {section.note && <aside className="lesson-note"><span aria-hidden="true">✦</span><p>{section.note}</p></aside>}
          </section>
        ))}
        <button className={`complete-button ${isCompleted ? 'is-completed' : ''}`} onClick={onToggleComplete} type="button">
          <span>{isCompleted ? '✓' : '○'}</span>{isCompleted ? 'Completed — mark as unfinished' : 'Mark this topic complete'}
        </button>
      </div>
      <nav className="lesson-pagination" aria-label="Topic pagination">
        {previousTopic ? <a href={`#/topics/${previousTopic.slug}`} className="page-direction"><span>← PREVIOUS</span><strong>{previousTopic.title}</strong></a> : <span />}
        {nextTopic && <a href={`#/topics/${nextTopic.slug}`} className="page-direction next-page"><span>NEXT TOPIC →</span><strong>{nextTopic.title}</strong></a>}
      </nav>
    </article>
  )
}
