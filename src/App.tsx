import React from "react";
import MyForm from "./MyForm";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MyForm
        onSubmit={({ firstName, lastName, email }) => {
          alert(
            "firstName: " +
              firstName +
              "\nlastName: " +
              lastName +
              "\nemail: " +
              email
          );
        }}
      />
    </div>
  );
};

export default App;
