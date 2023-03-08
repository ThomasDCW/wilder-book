import blank_profile from "../assets/blank_profile.png";

export default function Wilder() {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>Jane Doe</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        <li>
          HTML
          <span className="votes">3</span>
        </li>
        <li>
          CSS
          <span className="votes">3</span>
        </li>
        <li>
          Typescript
          <span className="votes">3</span>
        </li>
        <li>
          React
          <span className="votes">3</span>
        </li>
        <li>
          Node <span className="votes">2</span>
        </li>
      </ul>
    </article>
  );
}
