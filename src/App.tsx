import "./App.css";
import { Home } from "./components/main/Home";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import { Login } from "./components/main/login/Login";
import { PublishAdsTraveler } from "./components/main/publishAds/PublishAdsTraveler";
import "react-toastify/dist/ReactToastify.css";
//import { ValidationCode } from "./components/common/validation/ValidationCode";
//import { GetUserMailEntry } from "./components/common/getUserMailEntry/GetUserMailEntry";
//import { ModifyPassword } from "./components/main/modifyPassword/ModifyPassword";
//import { UserPersonnalAds } from "./components/main/userPersonnalAds/UserPersonnalAds";
import { Register } from "./components/main/register/Register";
import { Title } from "./components/common/title/Title";
import { HandlerUserAdsTraveler } from "./components/main/userAds/HandlerUserAdsTraveler";
import { ManageNotifications } from "./components/main/manageNotifications/ManageNotifications";
import { ProfilInfo } from "./components/main/profilInfo/ProfilInfo";
import { useAuthStore } from "@/store/store";
import { AuthProvider } from "./components/common/provider/AuthProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  const { isAuth } = useAuthStore();

  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoutes />}>
              <Route
                path="/publish-ad"
                element={
                  <>
                    <Title title={"Publier une annonce"} />{" "}
                    <PublishAdsTraveler />
                  </>
                }
              />
              <Route
                path="/profil-info"
                element={
                  <div className=" overflow-x-hidden">
                    <Title title={""} /> <ProfilInfo />
                  </div>
                }
              />
              <Route
                path="/manage-notifications"
                element={
                  <>
                    <Title title={"Gérer les notifications"} />{" "}
                    <ManageNotifications />
                  </>
                }
              />
              <Route
                path="/your-ads"
                element={
                  <>
                    <Title title={"Vos annonces"} /> <HandlerUserAdsTraveler />
                  </>
                }
              />
            </Route>
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
