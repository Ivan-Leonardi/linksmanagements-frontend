import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Background } from "./styles";
import { api } from "../../services/api";
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

export function SignUp() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário caadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        });
    }

    return (
        <Container>

            <Background />

            <Form>
                <h1>Meus Links</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    type="text"
                    placeholder="E-mail"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}                    
                />

                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/">
                    Voltar para o login
                </Link>

            </Form>


        </Container>
    )
}