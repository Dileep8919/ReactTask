import { useState } from "react";
function Basicform() {
  const [name, setName] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted the name is: ", name);
    setName("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Basicform;