export default function ImageSelector({ onChange }) {
  const blackSeal = '/images/cornell-seal-black.svg'
  const redSeal = '/images/cornell-seal-red.svg'

  return (
    <div className="selector">
      <button onClick={() => onChange(blackSeal)}>
        <img src={blackSeal} />
      </button>
      <button onClick={() => onChange(redSeal)}>
        <img src={redSeal} />
      </button>
      <button onClick={() => onChange(undefined)}>
        <em>None</em>
      </button>
    </div>
  )
}
