// import { Home } from "../pages/home/Home"
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { AppRouter } from "../RouterDOM/AppRouter";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
};
