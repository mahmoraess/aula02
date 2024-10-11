import { useEffect, useState } from "react";

export default function App() {
  
  const [usuarios, setUsuarios] = useState({});

  useEffect(() => { 
    const  buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuarios(dados.results[0]) 
    }
    buscarUsuario();
  }, {});

  return (
    <>
      <h1>Usuário</h1>
      <ul>
      <h2>{usuarios?.gender}</h2>
      <p>{usuarios?.email}</p>
      </ul>
    </>
  );
}
