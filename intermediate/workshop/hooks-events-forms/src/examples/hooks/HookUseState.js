import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function HookUseState() {
  const [name, setName] = useState("John");

  return (
    <div>
      <Title>useState()</Title>
      <hr />
      <div>
        <Title level={4}>Hello, {name}!</Title>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

// export default function HookUseState() {
//   const [name, setName] = useState("John");
//   const updateName = e => {
//     setName(e.target.value);
//   };

//   return (
//     <div>
//       <h2 className="is-size-4">Hooks</h2>
//       <h3 className="is-size-5">01: useState()</h3>
//       <br />
//       <div>
//         <h4>Hello, {name}!</h4>
//         <input type="text" value={name} onChange={updateName} />
//       </div>
//     </div>
//   );
// }
