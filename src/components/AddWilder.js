import axios from "axios";
import { useState } from "react";

export default function AddWilder() {
  const [name, setName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        axios.post("http://localhost:8000/api/wilder", { name });
      }}
    >
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Wilder</button>
    </form>
  );
}
