import React, { useState } from "react";
import { generate } from "shortid";
import MyForm from "./MyForm";
import MyTable from "./MyTable";

const App: React.FC = () => {
  const [rows, setRows] = useState([
    { id: "", firstName: "", lastName: "", email: "" },
  ]);
  return (
    <div style={{ textAlign: "center" }}>
      <MyForm
        onSubmit={(data) => {
          setRows((currentRows) => [
            ...currentRows,
            { id: generate(), ...data },
          ]);
        }}
      />
      <MyTable rows={rows} />
    </div>
  );
};

export default App;
