import { useState } from "react";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../utils/helpers";

function RegisterForm({ setUserDetails }) {
    const [state, setState] = useState({
        username: "",
        first_name: "",
        last_name: "",
        password1: "",
        password2: "",
    });

    const checkSamePass = (e) => {
        if (state.password1 !== state.password2) {
            alert("Passwords do not match.");
            return;
        } else {
            handleSubmit(e);        }
        };
    

    const [userType, setUserType] = useState();

    const navigate = useNavigate();

    const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    };
// alert("Please enter matching passwords.");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
          },
          body: JSON.stringify(state),
        };
        const response = await fetch("/dj-rest-auth/registration/", options).catch(handleError);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        } else {
          const data = await response.json();
          Cookies.set("Authorization", `Token ${data.key}`);
          //
          setUserDetails({
            isAuth: true,
            username: data.username,
            user_profile: data.profile
           });
           navigate("/");
        }
      };
    return (
        <div>
            <Form onSubmit={checkSamePass}>
                <h1>Create New Player</h1>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Username"
                        name="username" 
                        value={state.username}
                        onChange={handleInput}
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="First Name"
                        name="first_name" 
                        value={state.first_name}
                        onChange={handleInput}
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Last Name"
                        name="last_name" 
                        value={state.last_name}
                        onChange={handleInput}
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        name="password1"
                        value={state.password1}
                        onChange={handleInput}
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password2">
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={state.password2}
                        onChange={handleInput}
                        />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
      );
}

export default RegisterForm;