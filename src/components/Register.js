import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The passwordConfirm must be between 6 and 40 characters.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpasswordConfirm = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The passwordConfirm must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [passwordConfirm, setpasswordConfirm] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangepassword = (e) => {
        const password = e.target.value;
        setpassword(password);
    };

    const onChangepasswordConfirm = (e) => {
        const passwordConfirm = e.target.value;
        setpasswordConfirm(passwordConfirm);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, password, passwordConfirm).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response && error.response.data && error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="profile_pic.jpeg"
                    alt="profile-img"
                    className="profile-img-card container"
                />

                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div className="form-group">
                            <div>
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    validations={[required, vusername]}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onChangepassword}
                                    validations={[required, validpassword]}
                                />
                            </div>

                            <div>
                                <label htmlFor="passwordConfirm">Confirm password</label>
                                <Input
                                    type="passwordConfirm"
                                    className="form-control"
                                    name="passwordConfirm"
                                    value={passwordConfirm}
                                    onChange={onChangepasswordConfirm}
                                    validations={[required, vpasswordConfirm]}
                                />
                            </div>

                            <div>
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div
                                className={
                                    successful ? "alert alert-success" : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};

export default Register;
