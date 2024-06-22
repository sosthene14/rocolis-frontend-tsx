import { Footer } from "@/components/common/footer/Footer";
import { NavBar } from "@/components/common/navbar/NavBar";
import { SearchForm } from "@/components/main/searchForm/SearchForm";
import { Navigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const PrivateRoutes = () => {
  const auth = { token: true };

  return auth.token ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <div className="mt-32">
        <SearchForm />
      </div>
      <Outlet />
      <Footer />
    </motion.div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
