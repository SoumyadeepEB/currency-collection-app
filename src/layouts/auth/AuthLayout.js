import { Outlet } from "react-router-dom";
import Header from './AuthHeader';
import Footer from './AuthFooter';
import { Container } from "reactstrap";
import "./Auth.css";

export default function UserLayout() {
  return (
    <main>
      <Header />
      <Container className="p-4 wrapper">
        <Outlet />
      </Container>
      <Footer />
    </main>
  )
}
