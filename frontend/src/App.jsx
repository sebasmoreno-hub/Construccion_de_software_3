import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
    const [Documento, setDocumento] = useState("")/* Las comillas son para que 
    esté vacío el valor inicial, estará en blanco*/
  const [TipoDocumento, setTipoDoc] = useState("")
  const [Nombre, setNombre] = useState("")
  const [Apellido, setApellido] = useState("")
    const [Direccion, setDireccion] = useState("")
  const [Ciudad, setCiudad] = useState("")
  const [FechaNacimiento, setFechaNac] = useState("")
  const [Correo, setCorreo] = useState ("")
  const [edad, setEdad] = useState("")
//De una vez definimos los atributos del formulario
// Lista de personas y mensaje
  const [Persona,setPersona] = useState([])
  const [Mensaje,setMensaje] = useState([])

  async function gurdarPersonas (){
    const Personas = {//Creacion del objeto perona 
    TipoDocumento:TipoDocumento,
    Documento:Documento,
    Nombre:Nombre, //el atributo lo tomamos de la variable declarada, en este caso con el mismo nombre
    Apellido:Apellido,
    Direccion:Direccion,
    Ciudad: Ciudad,
    FechaN:FechaNacimiento,
    Correo:Correo,
    Edad:edad
    }
    const personaExiste = Persona.find((p) => p.Documento === Documento);
    //personas.push(persona)
    //setPersonas(personas)//Se hace para mapear el cambio con el método definido, setPersonas
    // Guardamos agregando la nueva persona al arreglo existente
    //Persona([...Persona, Personas]) //Hace lo mismo que las dos líneas de código anteriores. Los ... crean una copia del objeto
    
  if (personaExiste){
    // PUT
    let respuestaPut = await   fetch(`http://localhost:3001/personas/${personaExiste.id}`, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(Personas)
    });

    if (respuestaPut.ok){
      setMensaje ("Persona Actualizada Correctamente");
    }
    else {
      setMensaje("Error al actualizar la persona");
    }
    }

    else {
    // INICIO DEL POST 
    let respuestasPost = await fetch("http://localhost:3001/personas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Personas) // Enviamos objeto Personas
    });
    if (respuestasPost.ok) {
      setMensaje ("Persona Guardada Correctamente")

    } 
    else {
      setMensaje ("Error al guardar personas")
    }
  }

    // Limpiamos los campos
    setTipoDoc("")
    setDocumento("")
    setNombre("")
    setApellido("")
    setDireccion("")
    setCiudad("")
    setFechaNac("")
    setCorreo("")
    setEdad("")

    cargarPersonas();
  }

  //GET

  async function cargarPersonas(){
    let respuesta = await fetch ("http://localhost:3001/personas")
    let data = await respuesta.json();
    setPersona(data);
  }

  useEffect(() => {
    cargarPersonas();
  }, []
);

async function eliminarPersona(id) {
  let respuesta = await fetch (`http://localhost:3001/personas/${id}`, {
    method: "DELETE"
  });
  
  if (respuesta.ok) {
    setMensaje ("Persona Eliminada Correctamente");
    cargarPersonas();
  }
  else{
    setMensaje("Erro al eliminar la Persona");
  }
} 


  return <div>
  <h1>Registro de usuarios</h1>
  <input type="text" 
  placeholder='Tipo de Documento' 
  value={TipoDocumento} //obtenemos el valor de la variable
  onChange={(e) => setTipoDoc(e.target.value)}
  />
  <br/> <br/>
  <input type="text" 
  placeholder='Documento' 
  value={Documento} 
  onChange={(e) => setDocumento(e.target.value)}
  />
  <br/> <br/>
  <input type="text" 
  placeholder='Nombre' 
  value={Nombre} //obtenemos el valor de la variable
  onChange={(e) => setNombre(e.target.value)}
  />
  <br/> <br/>
  <input type="text" 
  placeholder='Apellido' 
  value={Apellido} 
  onChange={(e) => setApellido(e.target.value)}
  />
  <br/> <br/>
  <input type="text" 
  placeholder='Direccion (ej: calle 88 # 55 - 22)' 
  value={Direccion} //obtenemos el valor de la variable
  onChange={(e) => setDireccion(e.target.value)}
  />
  <br/> <br/>
  <input type="text" 
  placeholder='Ciudad' 
  value={Ciudad} //obtenemos el valor de la variable
  onChange={(e) => setCiudad(e.target.value)}
  />
  <br/> <br/>
    <input type="text" 
  placeholder= 'Fecha de Nacimiento (DD/MM/AAAA)'
  value={FechaNacimiento} //obtenemos el valor de la variable
  onChange={(e) => setFechaNac(e.target.value)}
  />
  <br/> <br/>
  <input type="email" 
  placeholder='Correo (ej: nombre@gmail.com)' 
  value={Correo} //obtenemos el valor de la variable
  onChange={(e) => setCorreo(e.target.value)}
  />
  <br/> <br/>
  <input type="number" 
  placeholder='Edad' 
  value={edad} 
  onChange={(e) => setEdad(e.target.value)}
  />
  <br/> <br/>
  <button onClick={gurdarPersonas}>Guardar</button>
  <h3>{Mensaje}</h3>
  <h2>Total de personas: {Persona.length}</h2>
  <table border="1" cellPadding="10">
    <thead>
      <tr>
        <th>Tipo de Documento</th>
        <th>Documento</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Direccion</th>
        <th>Ciudad</th>
        <th>Fecha de Nacimiento </th>
        <th>Correo</th>
        <th>Edad</th>
        <th>Acciones</th>
    </tr>
    </thead>
    <tbody>
      {Persona.map((persona, index) => (
        <tr key={index}>
          <td>{persona.TipoDocumento}</td>
          <td>{persona.Documento}</td>
          <td>{persona.Nombre}</td>
          <td>{persona.Apellido}</td>
          <td>{persona.Direccion}</td>
          <td>{persona.Ciudad}</td>
          <td>{persona.FechaN}</td>
          <td>{persona.Correo}</td>
          <td>{persona.Edad}</td>


          <td>
            <button onClick={() => eliminarPersona(persona.id)}>Eliminar</button>
          </td>

        </tr>
      ))}
    </tbody>
  </table>
</div>

}
export default App 
