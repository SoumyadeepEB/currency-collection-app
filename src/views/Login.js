import React,{ useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
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
import { firebaseLogin } from "../model/firebase";
import { toast, ToastContainer } from 'react-toastify';
import { setLSData } from "../model/localStorage";

export default function Login() {
  const navigate = useNavigate();
  const {authInfo, setAuthInfo} = useContext(AuthContext);
  
  useEffect(() => {
    const isSignedIn = authInfo ? true : false;
    if(isSignedIn){
      navigate("/dashboard/home");
    }
  }, [authInfo, navigate]);

  const [credentials, setCredentials] = useState({});

  function handleInputChange(event) {
    const target = event.currentTarget;

    setCredentials({
      ...credentials,
      [target.name]: target.value,
    })
  }


  function handleLogin(event){
    event.preventDefault();
    firebaseLogin(credentials)
    .then((res) => {
      setAuthInfo(res.user);
      setLSData("authInfo", res.user.accessToken);
      toast.success("Successfully logged in!");
      navigate("/dashboard/home");
    })
    .catch((err) => {
      console.warn(err)
      toast.error("Invalid login credentials");
    });
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
              <ToastContainer />
              <FormGroup>
                <Label for="loginEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="loginPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <div className="d-grid">
                <Button type="submit" className="mt-2 btn-success">Login</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
