import { useState, useEffect } from "react";
import axios from "axios";

export default function AddSkill({ names }) {
  const [wilder, setWilder] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSKills] = useState([]);
  console.log(wilder);
  console.log(skill);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:8000/api/skill");
      setSKills(wilders.data);
      console.log(skills.data);
    };
    fetchData();
  }, []);
  console.log(skills);
  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          axios.put("http://localhost:8000/api/wilder/addskill", {
            wilderName: wilder,
            skillName: skill,
          });
        }}
      >
        <label>Choose a wilder:</label>
        <select name="pets" onChange={(e) => setWilder(e.target.value)}>
          {names.map((name, key) => (
            <option key={key}>{name.name}</option>
          ))}
        </select>
        <label>Type a Skill :</label>
        <select name="pets" onChange={(e) => setSkill(e.target.value)}>
          {skills.map((skill, key) => (
            <option key={key}>{skill.name}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
