import React from 'react';

import { Button, TextField, Typography } from '@material-ui/core';

import { Link, useHistory } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import axios from 'axios';

import { baseUrl } from '../../constants';



function LoginPage() {
    const history = useHistory();
    const { form, onChange } = useForm({
    emailOrNickname: "",
    password: ""
    });
    
    const handleLogIn = async (e) => {
        e.preventDefault()
        try {
        const body = {
        emailOrNickname: form.emailOrNickname,
        password: form.password
    }
        const response = await axios.post(`${baseUrl}/user/login`, body)
        window.localStorage.setItem("accessToken", response.data.accessToken)
        history.push("/home")
        } catch (err) {
        console.log(err)
        }
    }
    
    const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
    };
    return (
        <div>
            <Typography variant={'h2'} gutterBottom>RoadMusic</Typography>
        <form onSubmit={handleLogIn}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="emailOrNickname"
            label="E-mail or Nickname"
            name="emailOrNickname"
            autoFocus
            placeholder="Digite seu E-mail"
            type="text"
            value={form.emailOrNickname}
            onChange={handleInputChange}
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={form.password}
            onChange={handleInputChange}
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Entrar
            </Button>
        </form>
            <Link to={'/signup'}>
            <Button
                fullWidth
                variant="outlined"
                color="primary"
            >
                Cadastrar
            </Button>
            </Link>
        </div>
    );
}

export default LoginPage;