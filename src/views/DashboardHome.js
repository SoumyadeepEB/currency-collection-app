import { Col, Row } from "reactstrap";
import TopCards from "../components/dashboard/TopCards";

const DashboardHome = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="12" lg="4">
          <TopCards
            bg="bg-success bg-gradient text-white"
            title="Profit"
            subtitle="Total Collection"
            data="0"
            icon="bi bi-cash-coin"
          />
        </Col>
        <Col sm="12" lg="4">
          <TopCards
            bg="bg-primary bg-gradient text-white"
            title="Refunds"
            subtitle="Indian Collection"
            data="0"
            icon="bi bi-cash-coin"
          />
        </Col>
        <Col sm="12" lg="4">
          <TopCards
            bg="bg-secondary bg-gradient text-white"
            title="New Project"
            subtitle="Foreign Collection"
            data="0"
            icon="bi bi-cash-coin"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="4">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Sales"
            subtitle="Coin Wishlist"
            data="0"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="12" lg="4">
          <TopCards
            bg="bg-light-primary text-primary"
            title="Sales"
            subtitle="Indian Coin Collection"
            data="0"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="12" lg="4">
          <TopCards
            bg="bg-light text-secondary"
            title="Refunds"
            subtitle="Foreign Coin Collection"
            data="0"
            icon="bi bi-coin"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="4">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Sales"
            subtitle="Note Wishlist"
            data="0"
            icon="bi bi-cash"
          />
        </Col>
        <Col sm="12" lg="4">
          <TopCards
            bg="bg-light-info text-info"
            title="Profit"
            subtitle="Indian Note Collection"
            data="0"
            icon="bi bi-cash"
          />
        </Col>
        <Col sm="12" lg="4">
          <TopCards
            bg="bg-light-success text-success"
            title="New Project"
            subtitle="Foreign Note Collection"
            data="0"
            icon="bi bi-cash"
          />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardHome;
