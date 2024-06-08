import { useRoutes } from "react-router-dom";
import routes from "./routes/Router";

function App() {
  const routing = useRoutes(routes);

  return (
    <div className="dark">{routing}</div>
  );
};

export default App;
