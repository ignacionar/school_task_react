import './App.css';

function App() {
  return (
    <div className="App">
      <header> 
        <h1 className='title'>Destareado 📝</h1>
      </header>
      <div className='image-div'>
        <div className='wrapper'>
          <div className='about-us'>
            <h2 className='about-title' id='tit1'>¿QUIÉNES SOMOS?</h2>
            <p>&nbsp;Somos un grupo de jóvenes emprendedores cuyo objetivo es asistirte en tu cursada de la educación secundaria.
            <br/>
            &nbsp;Sabemos lo pesado que puede volverse no tener tiempo al transitar la escuela secundaria, y por eso venimos a ayudarte!
            </p>
          </div>
          <div className='about-us'>
            <h2 className='about-title' id='tit2'>¿QUÉ HACEMOS?</h2>
            <p>&nbsp;Nostoros nos encargamos de tus tareas! No importa si tenés que hacer escritos, presentaciones, o guías de estudio.   
            <br/>
            &nbsp;Trabajamos con todos los procesadores de texto del paquete office, y, de ser necesario que la actividad sea manuscrita, podemos hacerlo.
            </p>
          </div>
          <div className='about-us'>
            <h2 className='about-title' id='tit3'>¿CUÁL ES SU CONTACTO?</h2>
            <p>&nbsp;Podes contactarnos por <p className='whatsapp'>Whatsapp (351 3050-835)</p> <p className='email'>Mail (destareadoarg@gmail.com).</p>  
            &nbsp;Envianos cuál es el trabajo que necesitas, consignas, y tiempo de plazo, y nosotros te brindamos un presupuesto para realizar la tarea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
