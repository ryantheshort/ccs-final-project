import { useState } from "react";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, Link } from "react-router-dom";

function LoginForm({ appState, setAppState }) {
    const [state, setState] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

}