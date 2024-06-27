import { Footer } from "@/components/common/footer/Footer";
import { NavBar } from "@/components/common/navbar/NavBar";
import { SearchForm } from "@/components/main/searchForm/SearchForm";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/store";
import { SplashScreen } from "@/components/common/splashScreen/SplashScreen";


const PrivateRoutes = () => {
  const { isAuth } = useAuthStore();
  const auth = { token: isAuth };

 
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
    <SplashScreen />
  );
};

export default PrivateRoutes;
