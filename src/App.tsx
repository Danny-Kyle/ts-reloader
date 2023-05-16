import React, { useContext, useState, createContext } from "react";
import ReactDOM from 'react-dom/client';

const userContext = createContext<string | null>(null);

const UserPage: React.FC = () => {
  const context = useContext(userContext);
  return <div>{context}</div>;
};

const NewComponent: React.FC = () => {
  const context = useContext(userContext);
  return (
    <div>
      This is a new component
      <br />
      {context}
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState("Initial Value");
  const handleClick = () => {
    setUser("Hello from button " + new Date().toDateString());
  };
  console.log(user)
  return (
    <div>
      <userContext.Provider value={user}>
        <p>Hello from homepage</p>
        <div onClick={handleClick}>Change Value</div>
        <UserPage />
        ----
        <NewComponent />
      </userContext.Provider>
    </div>
  );
}
