export default function Skill({ title, votes }) {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
}
