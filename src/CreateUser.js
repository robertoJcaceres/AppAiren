import React, { useState } from 'react';
import './CreateUser.css'; // Asegúrate de que este archivo CSS esté creado y vinculado


function CreateUser() {
  // Estados para los valores de los inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Manejador para el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar la creación del usuario (e.g., llamada a API)
    console.log('Usuario creado:', fullName, email, password);
  };

  return (
    <div className="create-user-container">
      <div className="create-user-form">
        <h2>Crear Usuario nuevo de Airen</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="full-name">Nombre Completo</label>
          <input 
            id="full-name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required 
          />

          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <button type="submit">Crear Usuario</button>
        </form>
        <button onClick={() => window.history.back()}>Regresar</button>
      </div>
    </div>
  );
}

export default CreateUser;
