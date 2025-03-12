import { useState } from 'react'

export default function DarkModeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className="flex-end"
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
        padding: '1rem',
      }}>
      <div>
        <input
          type="checkbox"
          id="dark-mode-switch"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
      </div>
      <label htmlFor="dark-mode-switch">Dark Mode</label>
    </div>
  )
}
