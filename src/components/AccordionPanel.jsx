export default function AccordionPanel({
  title,
  children,
  isExpanded,
  onExpand
}) {
  return (
    <section className="panel">
      <button onClick={onExpand}>
        <h3>{title}</h3>
      </button>
      {isExpanded &&
        <div className="content">{children}</div>}
    </section>
  );
}
