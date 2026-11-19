export const topics = [
  {
    slug: 'what-is-react', category: 'Fundamentals', title: 'What is React?', level: 'Beginner', readTime: '4 min',
    summary: 'Learn how React describes interfaces with reusable components.',
    intro: 'React is a JavaScript library for building user interfaces from reusable components. You describe the interface for the current data, and React updates the page when that data changes.',
    sections: [
      { title: 'Think in UI states', body: 'Describe what the screen should look like for the current data instead of manually changing individual page elements.', code: `function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>\n}` },
      { title: 'Compose a component tree', body: 'Pages are built by combining focused components such as headers, navigation, cards, and buttons.' },
    ],
  },
  {
    slug: 'setup', category: 'Fundamentals', title: 'Set up a React project', level: 'Beginner', readTime: '5 min',
    summary: 'Start a React app with Vite and identify its main files.',
    intro: 'Vite provides a development server and production build. A React project typically keeps its entry file and components under src/.',
    sections: [
      { title: 'Create a project', body: 'Start with the React template, install dependencies, and run the development server.', code: `npm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev` },
      { title: 'Render the app', body: 'The entry file connects your top-level component to the root element in the HTML page.', code: `import { createRoot } from 'react-dom/client'\nimport App from './App.jsx'\n\ncreateRoot(document.getElementById('root')).render(<App />)` },
    ],
  },
  {
    slug: 'jsx', category: 'Fundamentals', title: 'JSX', level: 'Beginner', readTime: '5 min',
    summary: 'Write markup-like expressions inside JavaScript.',
    intro: 'JSX lets you describe UI with a familiar markup syntax inside JavaScript. Expressions go inside braces, CSS classes use className, and elements must be closed.',
    sections: [
      { title: 'Add JavaScript expressions', body: 'Use braces to place a variable or expression inside the rendered markup.', code: `const user = 'Mina'\nconst heading = <h1 className="title">Welcome, {user}</h1>` },
      { title: 'Return sibling elements', body: 'Wrap sibling JSX in a semantic element or a Fragment when you do not need an extra DOM node.', code: `return (\n  <>\n    <h1>Plants</h1>\n    <p>Growing well</p>\n  </>\n)` },
    ],
  },
  {
    slug: 'components', category: 'Fundamentals', title: 'Components', level: 'Beginner', readTime: '5 min',
    summary: 'Break a screen into focused, reusable pieces.',
    intro: 'A component is a JavaScript function that returns React UI. Component names begin with a capital letter, and components can be composed together.',
    sections: [
      { title: 'Create a component', body: 'Keep components focused so they are easy to understand and reuse.', code: `function PlantCard() {\n  return <article>A happy plant</article>\n}\n\nfunction App() {\n  return <PlantCard />\n}` },
      { title: 'Export and import', body: 'A module can have one default export and multiple named exports. Match each import to its export style.', code: `export default function App() { return <main /> }\nexport function Badge() { return <span>New</span> }\n\nimport App, { Badge } from './App.jsx'` },
    ],
  },
  {
    slug: 'props', category: 'Fundamentals', title: 'Props', level: 'Beginner', readTime: '5 min',
    summary: 'Pass data and callbacks from parent components to children.',
    intro: 'Props are read-only inputs that let a parent configure the UI rendered by a child component.',
    sections: [
      { title: 'Pass values', body: 'Pass values as JSX attributes and destructure the props that the component needs.', code: `function PlantCard({ name, sunlight }) {\n  return <article><h2>{name}</h2><p>{sunlight}</p></article>\n}\n\n<PlantCard name="Fern" sunlight="Indirect light" />` },
      { title: 'Keep props read-only', body: 'Children should not mutate props. To request a change, call a callback supplied by the parent that owns the data.' },
    ],
  },
  {
    slug: 'state', category: 'Fundamentals', title: 'State with useState', level: 'Beginner', readTime: '6 min',
    summary: 'Store values that change and update the interface when they do.',
    intro: 'State is component memory. useState returns the current value and a setter; calling the setter schedules a render with the new value.',
    sections: [
      { title: 'Add state', body: 'Call useState at the top level of a component and use its setter in an event handler.', code: `const [count, setCount] = useState(0)\n\nreturn <button onClick={() => setCount(count + 1)}>Count: {count}</button>` },
      { title: 'Update from previous state', body: 'When a new value depends on the old one, use the functional setter form.', code: `setCount(currentCount => currentCount + 1)` },
    ],
  },
  {
    slug: 'events', category: 'Fundamentals', title: 'Events and interactions', level: 'Beginner', readTime: '4 min',
    summary: 'Respond to clicks, typing, and other browser events.',
    intro: 'Pass a function to an event prop such as onClick or onChange. React calls the handler when the user interacts with the element.',
    sections: [
      { title: 'Handle an event', body: 'Pass the handler itself instead of calling it during rendering.', code: `function SaveButton() {\n  function handleSave() {\n    console.log('Saved!')\n  }\n  return <button onClick={handleSave}>Save</button>\n}` },
      { title: 'Pass event data', body: 'Use an inline arrow function when a handler needs an additional argument.', code: `<button onClick={() => removeItem(item.id)}>Remove</button>\n<input onChange={event => setName(event.target.value)} />` },
    ],
  },
  {
    slug: 'conditional-rendering', category: 'Fundamentals', title: 'Conditional rendering', level: 'Beginner', readTime: '4 min',
    summary: 'Show or hide UI based on the current data.',
    intro: 'Use ordinary JavaScript conditions to choose what React renders. Ternaries work well for alternatives, and && works for optional content.',
    sections: [
      { title: 'Choose a condition', body: 'Use a condition that makes the UI behavior easy to read.', code: `{isLoading ? <Spinner /> : <PlantList plants={plants} />}\n{hasError && <p role="alert">Could not load plants.</p>}` },
      { title: 'Be explicit with numbers', body: 'Since 0 is rendered as a value, compare a number before using it with &&.', code: `{items.length > 0 && <PlantList plants={items} />}` },
    ],
  },
  {
    slug: 'lists-and-keys', category: 'Fundamentals', title: 'Lists and keys', level: 'Beginner', readTime: '4 min',
    summary: 'Render arrays of components and give items stable keys.',
    intro: 'Use map() to turn an array of data into UI. Each sibling needs a stable key so React can track it when the list changes.',
    sections: [
      { title: 'Render a list', body: 'Keep repeated content in data and map over it to create a consistent interface.', code: `const plants = [{ id: 'fern', name: 'Fern' }, { id: 'palm', name: 'Palm' }]\n\n{plants.map(plant => <li key={plant.id}>{plant.name}</li>)}` },
      { title: 'Choose stable keys', body: 'Prefer unique IDs from your data. Array indexes can cause issues when items are inserted, removed, or reordered.' },
    ],
  },
  {
    slug: 'forms', category: 'Fundamentals', title: 'Forms and inputs', level: 'Intermediate', readTime: '5 min',
    summary: 'Connect form fields to state and handle submissions.',
    intro: 'A controlled input gets its value from React state and updates that state in onChange, keeping the UI and application data in sync.',
    sections: [
      { title: 'Control a text field', body: 'Give an input both a value and an onChange handler.', code: `const [email, setEmail] = useState('')\n\n<input value={email} onChange={event => setEmail(event.target.value)} />` },
      { title: 'Handle form submission', body: 'Listen for submit, prevent a full page reload when appropriate, and validate before saving.', code: `function handleSubmit(event) {\n  event.preventDefault()\n  if (!email.includes('@')) return\n  saveEmail(email)\n}` },
    ],
  },
  {
    slug: 'hooks', category: 'Hooks', title: 'Rules of Hooks', level: 'Intermediate', readTime: '4 min',
    summary: 'Learn where Hooks can be called in a React app.',
    intro: 'Hooks add features such as state and effects to function components. Their call order must stay consistent between renders.',
    sections: [
      { title: 'Call Hooks at the top level', body: 'Call Hooks at the top of a component or custom Hook—not inside conditions, loops, or nested functions.', code: `function Panel({ active }) {\n  const [open, setOpen] = useState(false)\n  if (!active) return null\n  return <button onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'}</button>\n}` },
      { title: 'Use Hooks in React functions', body: 'Call Hooks from function components or custom Hooks, not ordinary utility functions.' },
    ],
  },
  {
    slug: 'useeffect', category: 'Hooks', title: 'Effects with useEffect', level: 'Intermediate', readTime: '6 min',
    summary: 'Synchronize a component with external systems.',
    intro: 'useEffect runs after rendering to synchronize with something outside React, such as a browser event, timer, or subscription.',
    sections: [
      { title: 'Set up and clean up', body: 'Return a cleanup function to undo setup when dependencies change or the component is removed.', code: `useEffect(() => {\n  const connection = createConnection(serverUrl)\n  connection.connect()\n  return () => connection.disconnect()\n}, [serverUrl])` },
      { title: 'Keep dependencies accurate', body: 'List the reactive values used by an effect. Use effects for synchronization, not for values that can be derived during render.' },
    ],
  },
  {
    slug: 'usecontext', category: 'Hooks', title: 'Context', level: 'Intermediate', readTime: '5 min',
    summary: 'Share values with many components without passing props through every layer.',
    intro: 'Context lets a parent provide a value to deeply nested components. It is useful for shared values such as a theme or signed-in user.',
    sections: [
      { title: 'Provide a value', body: 'Create a context and place its provider above the components that need the value.', code: `const ThemeContext = createContext('light')\n\n<ThemeContext.Provider value="dark">\n  <Toolbar />\n</ThemeContext.Provider>` },
      { title: 'Read context', body: 'Call useContext with the context object from a component that is inside its provider.', code: `function Toolbar() {\n  const theme = useContext(ThemeContext)\n  return <div className={theme}>Toolbar</div>\n}` },
    ],
  },
  {
    slug: 'custom-hooks', category: 'Hooks', title: 'Custom Hooks', level: 'Intermediate', readTime: '5 min',
    summary: 'Reuse stateful logic in functions that start with use.',
    intro: 'A custom Hook is a JavaScript function that composes other Hooks. Each component calling it gets its own state.',
    sections: [
      { title: 'Extract reusable behavior', body: 'Move related state and actions into a function whose name begins with use.', code: `function useToggle(initialValue = false) {\n  const [value, setValue] = useState(initialValue)\n  const toggle = () => setValue(current => !current)\n  return [value, toggle]\n}` },
      { title: 'Keep the API focused', body: 'Return only the values and actions that a component needs.' },
    ],
  },
  {
    slug: 'routing', category: 'Build apps', title: 'Routing between pages', level: 'Intermediate', readTime: '5 min',
    summary: 'Connect URL paths to screens in a multi-page React app.',
    intro: 'A router maps URL paths to UI, supports browser history, and lets people navigate without a full page reload.',
    sections: [
      { title: 'Use a routing library', body: 'A router library can handle nested routes, links, parameters, and loading states.', code: `import { BrowserRouter, Routes, Route } from 'react-router'\n\n<BrowserRouter>\n  <Routes>\n    <Route path="/" element={<HomePage />} />\n    <Route path="/plants/:plantId" element={<PlantPage />} />\n  </Routes>\n</BrowserRouter>` },
      { title: 'Choose the right element', body: 'Use links for navigation and buttons for actions. Make labels clear and indicate the current page.' },
    ],
  },
  {
    slug: 'data-fetching', category: 'Build apps', title: 'Loading data', level: 'Intermediate', readTime: '6 min',
    summary: 'Handle loading, success, empty, and error states.',
    intro: 'A robust data-driven screen accounts for loading, success, empty, and error states—not only the happy path.',
    sections: [
      { title: 'Represent request states', body: 'Store the data and status needed by the UI. Clean up requests so outdated results do not overwrite newer ones.', code: `useEffect(() => {\n  const controller = new AbortController()\n  fetch('/api/plants', { signal: controller.signal })\n    .then(response => response.json())\n    .then(setPlants)\n  return () => controller.abort()\n}, [])` },
      { title: 'Choose a data layer', body: 'Larger apps can use a framework loader or data-fetching library for caching, retries, and request status.' },
    ],
  },
  {
    slug: 'performance', category: 'Build apps', title: 'Performance basics', level: 'Advanced', readTime: '5 min',
    summary: 'Measure first, then optimize the work that matters.',
    intro: 'Most interfaces do not need manual optimization at first. Profile real slow interactions, then improve the work that profiling identifies.',
    sections: [
      { title: 'Keep rendering efficient', body: 'Use stable keys, keep state close to where it is used, and avoid needlessly lifting frequently changing state.', code: `const filteredPlants = plants.filter(plant =>\n  plant.name.toLowerCase().includes(query.toLowerCase())\n)` },
      { title: 'Memoize with a reason', body: 'Memoization can skip specific work, but adds complexity. Use it when profiling shows a meaningful benefit.' },
    ],
  },
  {
    slug: 'testing', category: 'Build apps', title: 'Testing React UI', level: 'Intermediate', readTime: '5 min',
    summary: 'Test behavior the way a person uses your interface.',
    intro: 'Useful UI tests verify user-visible behavior: render a component, find elements by accessible labels or roles, then interact with them.',
    sections: [
      { title: 'Test an interaction', body: 'A test runner and React Testing Library can render components and simulate user actions.', code: `render(<Counter />)\nawait user.click(screen.getByRole('button', { name: /increment/i }))\nexpect(screen.getByText('Count: 1')).toBeInTheDocument()` },
      { title: 'Prefer accessible queries', body: 'Queries such as getByRole and getByLabelText make tests resilient and encourage accessible markup.' },
    ],
  },
]

export const categories = [...new Set(topics.map((topic) => topic.category))]
