import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./DashHeader";
import { Container } from "reactstrap";

const DashboardLayout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
