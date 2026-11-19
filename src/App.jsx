import { useState } from 'react'
import './App.css'

const EMAIL_ADDRESS = 'jethrokiptoo0@gmail.com'
const CSV_HEADERS = [
  'Full name',
  'Phone number',
  'Email address',
  'Age',
  'Member group',
  'Marital status',
  'Ministry or area',
  'Date registered',
]

function csvCell(value) {
  const safeValue = /^[=+\-@]/.test(String(value)) ? `'${value}` : value
  return `"${String(safeValue ?? '').replaceAll('"', '""')}"`
}

function downloadSpreadsheet(registrations) {
  const rows = [
    CSV_HEADERS,
    ...registrations.map((member) => [
      member.name,
      member.phone,
      member.email,
      member.age,
      member.group,
      member.maritalStatus,
      member.ministry,
      member.date,
    ]),
  ]
  const csv = `\uFEFF${rows.map((row) => row.map(csvCell).join(',')).join('\r\n')}`
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const link = document.createElement('a')
  link.href = url
  link.download = 'hope-celebration-center-members.csv'
  document.body.append(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function App() {
  const [members, setMembers] = useState([])
  const [isYouth, setIsYouth] = useState('')
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const member = {
      name: formData.get('name').trim(),
      phone: formData.get('phone').trim(),
      email: formData.get('email').trim(),
      age: formData.get('age'),
      group: isYouth === 'yes' ? 'Youth' : 'Adult',
      maritalStatus: isYouth === 'yes' ? formData.get('maritalStatus') : 'Not applicable',
      ministry: formData.get('ministry').trim() || 'Not specified',
      date: new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date()),
    }
    const updatedMembers = [...members, member]

    try {
      downloadSpreadsheet(updatedMembers)
    } catch (error) {
      setNotice(`Registration was not completed because the spreadsheet could not be created: ${error.message}`)
      return
    }

    setMembers(updatedMembers)
    setNotice('Member registered. Your spreadsheet has been downloaded; attach it to the email draft before sending.')
    form.reset()
    setIsYouth('')

    const subject = encodeURIComponent('Hope Celebration Center — Member Registration')
    const body = encodeURIComponent(
      `Hello,\n\nPlease find the attached Hope Celebration Center member registration spreadsheet.\n\nNew member registered:\nName: ${member.name}\nPhone: ${member.phone}\nEmail: ${member.email || 'Not provided'}\nAge: ${member.age}\nGroup: ${member.group}\nMarital status: ${member.maritalStatus}\nMinistry or area: ${member.ministry}\nDate registered: ${member.date}\n\nPlease attach the downloaded file: hope-celebration-center-members.csv`,
    )
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Hope Celebration Center home">
          <img className="brand-mark" src="/hope-mark.svg" alt="" />
          <span>Hope Celebration Center</span>
        </a>
        <a className="header-link" href="#registration">Member registration <span aria-hidden="true">↗</span></a>
      </header>

      <main id="home">
        <section className="hero">
          <img className="hero-illustration" src="/church-background.svg" alt="" />
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-line" />WELCOME HOME</p>
            <h1>There’s a place<br />for <em>you here.</em></h1>
            <p className="hero-copy">
              Join the Hope Celebration Center family. Share a few details so we can welcome you and stay connected.
            </p>
            <a className="hero-link" href="#registration">Register as a member <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-bottom">
            <span>HOPE CELEBRATION CENTER</span>
            <span>GROWING TOGETHER IN FAITH</span>
          </div>
        </section>

        <section className="registration-section" id="registration">
          <div className="section-intro">
            <p className="eyebrow"><span className="eyebrow-line" />TAKE YOUR NEXT STEP</p>
            <h2>Become a <em>member.</em></h2>
            <p>Fill in the form below. Your details help our church family keep in touch and serve you better.</p>
            <div className="privacy-note">
              <span className="privacy-icon" aria-hidden="true">♡</span>
              <p><strong>Your information matters.</strong><br />Details stay in this page session. Download the spreadsheet before refreshing or leaving.</p>
            </div>
            <div className="email-note">
              <span aria-hidden="true">✉</span>
              <p>After registering, a spreadsheet downloads and an email draft opens. Attach the downloaded CSV before you send it to <strong>{EMAIL_ADDRESS}</strong>.</p>
            </div>
          </div>

          <div className="form-card">
            <div className="form-card-heading">
              <span className="form-step">01</span>
              <div>
                <h3>Member details</h3>
                <p>Fields marked <span aria-hidden="true">*</span> are required.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full name <span>*</span></label>
                <input id="name" name="name" type="text" placeholder="e.g. Jethro Kiptoo" autoComplete="name" required />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="phone">Phone number <span>*</span></label>
                  <input id="phone" name="phone" type="tel" placeholder="+254 700 000 000" autoComplete="tel" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="age">Age <span>*</span></label>
                  <input id="age" name="age" type="number" min="1" max="120" placeholder="Your age" required />
                </div>
                <div className="field">
                  <label htmlFor="youth">Are you a youth? <span>*</span></label>
                  <select id="youth" name="youth" value={isYouth} onChange={(event) => setIsYouth(event.target.value)} required>
                    <option value="" disabled>Select one</option>
                    <option value="yes">Yes, I am a youth</option>
                    <option value="no">No, I am an adult</option>
                  </select>
                </div>
              </div>
              {isYouth === 'yes' && (
                <fieldset className="field marital-field">
                  <legend>Marital status <span>*</span></legend>
                  <div className="choice-row">
                    <label className="choice-card">
                      <input type="radio" name="maritalStatus" value="Married" required />
                      <span className="choice-indicator" />
                      <span>Married</span>
                    </label>
                    <label className="choice-card">
                      <input type="radio" name="maritalStatus" value="Not married" required />
                      <span className="choice-indicator" />
                      <span>Not married</span>
                    </label>
                  </div>
                </fieldset>
              )}
              <div className="field">
                <label htmlFor="ministry">Ministry or area of interest</label>
                <input id="ministry" name="ministry" type="text" placeholder="e.g. Worship, youth, community" />
              </div>
              <button className="submit-button" type="submit">
                Register &amp; prepare email <span aria-hidden="true">↗</span>
              </button>
              <p className="form-footnote">Your email app will open with a message ready. Please attach the downloaded spreadsheet and press send.</p>
              {notice && <p className="notice" role="status">{notice}</p>}
            </form>
          </div>
        </section>

        <section className="registry-section">
          <div className="registry-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" />YOUR REGISTRY</p>
              <h2>Registered <em>members.</em></h2>
            </div>
            <button className="download-button" type="button" onClick={() => downloadSpreadsheet(members)} disabled={members.length === 0}>
              Download spreadsheet <span aria-hidden="true">↓</span>
            </button>
          </div>
          {members.length ? (
            <div className="table-wrap">
              <table>
                <thead><tr><th>Name</th><th>Phone</th><th>Group</th><th>Marital status</th><th>Registered</th></tr></thead>
                <tbody>
                  {members.map((member, index) => (
                    <tr key={`${member.phone}-${index}`}>
                      <td>{member.name}</td><td>{member.phone}</td><td>{member.group}</td><td>{member.maritalStatus}</td><td>{member.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-registry">
              <span className="empty-icon" aria-hidden="true">＋</span>
              <p>Your new registrations will appear here.</p>
              <span>Submitted members are included in the spreadsheet download.</span>
            </div>
          )}
        </section>
      </main>
      <footer className="footer">
        <a className="footer-brand" href="#home"><img className="brand-mark" src="/hope-mark.svg" alt="" /> Hope Celebration Center</a>
        <span>Welcoming every generation into a family of faith.</span>
      </footer>
    </div>
  )
}

export default App
