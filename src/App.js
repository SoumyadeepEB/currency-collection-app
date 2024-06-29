import { useRoutes } from "react-router-dom";
import routes from "./routes/Router";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./context/AuthProvider";

function App() {
  const routing = useRoutes(routes);

  return (
    <AuthProvider>
      <div className="dark">{routing}</div>
    </AuthProvider>
  );
};

export default App;
