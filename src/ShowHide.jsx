import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false); // Thudakkam hide

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Details
      </button>

      {show && <p>Iam Hasna, study React!</p>}
    </div>
  );
}
export default ShowHide;