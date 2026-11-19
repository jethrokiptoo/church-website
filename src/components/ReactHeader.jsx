export default function ReactHeader({ query, onSearch }) {
  return (
    <header className="topbar">
      <a className="brand" href="#/" aria-label="React Atlas home">
        <span className="brand-mark" aria-hidden="true">⚛</span>
        <span>react<span className="brand-dot">.</span>atlas</span>
      </a>
      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          placeholder="Search topics..."
          aria-label="Search React topics"
          value={query}
          onChange={(event) => onSearch(event.target.value)}
        />
      </label>
    </header>
  )
}
