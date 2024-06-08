import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(event){
    event.preventDefault();
    console.log("here")
    return navigate("/dashboard/home");
  }

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center">
        <Card style={{minWidth: "300px", maxWidth: "600px", width: "100%"}}>
          <CardTitle tag="h5" className="border-bottom p-3 mb-0 text-center">
            <i className="bi bi-key me-2"> </i>
            Welcome to SG Currency Collection Login
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleLogin}>
              <FormGroup>
                <Label for="loginEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="loginPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </FormGroup>
              <div className="text-center">
                <Button type="submit" className="mt-2 btn-success">Login</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
