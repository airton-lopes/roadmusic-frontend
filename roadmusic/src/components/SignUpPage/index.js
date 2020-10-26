import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { baseUrl } from '../../constants/index';

const SignUpPage = () =>{
    const history = useHistory();
    const { form, onChange } = useForm({
    name: "",
    email: "",
    nickname: "",
    password: ""
    });

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
        const body = {
            name: form.name,
            email: form.email,
            nickname: form.nickname,
            password: form.password
        }
        const response = await axios.post(`${baseUrl}/user/signup`, body)
        window.localStorage.setItem("accessToken", response.data.accessToken)
        history.push("/home")
        } catch (error) {
        console.log(error.message)
        }
    }

    const handleInputChange = event => {
        const { name, value } = event.target;

        onChange(name, value);
    };

    return(
        <div>
            <Typography variant={'h2'} gutterBottom>Informe os dados abaixo</Typography>
            <form onSubmit={handleSignUp}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            id="user"
            label="Informe seu nome completo"
            name="name"
            type="text"
            value={form.name}
            onChange={handleInputChange}
            fullWidth
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Informe seu e-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleInputChange}
            fullWidth
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            id="nickname"
            label="Informe um nickname"
            name="nickname"
            type="text"
            value={form.nickname}
            onChange={handleInputChange}
            fullWidth
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            name="password"
            label="Informe uma senha"
            type="password"
            id="password"
            value={form.password}
            onChange={handleInputChange}
            fullWidth
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Cadastrar
            </Button>
            </form>
        </div>
    )
}

export default SignUpPage