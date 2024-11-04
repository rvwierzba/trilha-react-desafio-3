// src/components/SignupScreen.js
import React from 'react';
import './SignupScreen.css';

function SignupScreen() {
  return (
    <div className="signup-screen">
      <header className="signup-header">
        <h1 className="logo">DIO</h1>
        <nav className="nav-buttons">
          <button className="nav-button">Home</button>
          <button className="nav-button">Entrar</button>
          <button className="nav-button">Cadastrar</button>
        </nav>
      </header>
      <div className="signup-content">
        <div className="signup-info">
          <h2>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h2>
        </div>
        <div className="signup-form">
          <h3>Comece agora grátis</h3>
          <p>Crie sua conta e make the change._</p>
          <form>
            <input type="text" placeholder="Nome completo" required />
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="submit-button">Criar minha conta</button>
          </form>
          <p className="terms-text">
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
          </p>
          <p>
            Já tenho conta. <a href="/login">Fazer login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
