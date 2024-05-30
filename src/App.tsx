import "./App.css";
import {Home} from "./components/main/Home";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import {Login} from "./components/main/login/Login";
import { PublishAdsTraveler } from "./components/main/publishAds/PublishAdsTraveler";
import 'react-toastify/dist/ReactToastify.css';
//import { ValidationCode } from "./components/common/validation/ValidationCode";
//import { GetUserMailEntry } from "./components/common/getUserMailEntry/GetUserMailEntry";
//import { ModifyPassword } from "./components/main/modifyPassword/ModifyPassword";
//import { UserPersonnalAds } from "./components/main/userPersonnalAds/UserPersonnalAds";
import { Register } from "./components/main/register/Register";
import { UserAdsTraveler } from "./components/main/userAds/UserAdsTraveler";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/publish-ad" element={<PublishAdsTraveler />} />
            <Route path="/your-ads" element={<UserAdsTraveler />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
