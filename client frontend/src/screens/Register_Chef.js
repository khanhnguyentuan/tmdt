import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { register } from "../Redux/Actions/userActions";
import Header from "../components/Header";
import { Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Button } from '@mui/material';
import { convertToBase64 } from "../utils/convert";

const ChefRegister = ({ location, history }) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telephone, setTelephone] = useState("");
    const [description, setDescription] = useState("");
    const [certification, setCertification] = useState("");
    const [sex, setSex] = useState("");

    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userRegister = useSelector((state) => state.userRegister);
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [userInfo, history, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, username, email, password, telephone, sex, 'Đầu bếp', description, certification));
    };

    const handleChangeImage = async (e) => {
        const base64 = await convertToBase64(e);
        setCertification(base64);
    }


    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center login-center">
                {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}

                <form
                    className="Login col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Giới thiệu bản thân"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label>Bằng cấp</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleChangeImage(e)}
                    />

                    <FormControl sx={{ mt: 2 }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Giới tính</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={(e) => setSex(e.target.value)}
                        >
                            <FormControlLabel value="Nam" control={<Radio />} label="Nam" />
                            <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
                            <FormControlLabel value="Khác" control={<Radio />} label="Khác" />
                        </RadioGroup>
                    </FormControl>

                    <button type="submit">Register</button>
                    <p>
                        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                            I Have Account <strong>Login</strong>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default ChefRegister;
