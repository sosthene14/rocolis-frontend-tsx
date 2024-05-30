import { Footer } from "@/components/common/footer/Footer";
import { NavBar } from "@/components/common/navbar/NavBar";
import { SearchForm } from "@/components/main/searchForm/SearchForm";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = { token: true };

  return auth.token ? (
    <div>
      <NavBar />
      <div className="mt-32">
        <SearchForm />
      </div>
      <Outlet />
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
