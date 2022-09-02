import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./screens/Account";
import SignUp from "./screens/SignUp";
import Protaction from "./components/protaction";
import LogIn from "./screens/LogIn";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<LogIn />} />
          <Route
            path="/account"
            element={
              <Protaction>
                <Account />
              </Protaction>
            }
          />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
