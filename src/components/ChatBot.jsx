import { useState } from 'react';

export default function ChatBot() {
  const [prompt, setPrompt] = useState();
  const [sentPrompt, setSentPrompt] = useState();

  return (
    <div className="chatbot">
      <label htmlFor="chatbot-prompt">Prompt:</label>
      <textarea
        id="chatbot-prompt"
        onChange={(event) => setPrompt(event.target.value)}
        value={prompt}
      />
      <button onClick={() => setSentPrompt(prompt)}>Send ({prompt})</button>

      {!!sentPrompt &&
        <div className="chat">
          <div className="message">
            <img src="/images/user.svg" alt="user" className="avatar" />
            <p>{sentPrompt}</p>
          </div>

          <div className="message">
            <img src="/images/robot.svg" alt="robot" className="avatar" />
            <p>...</p>
          </div>
        </div>}
    </div>
  )
}
