import "./App.css";
import {Home} from "./components/main/Home";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import {Login} from "./components/main/login/Login";
import { PublishAdsTraveler } from "./components/main/publishAds/PublishAdsTraveler";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/publish-ad" element={<PublishAdsTraveler />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
