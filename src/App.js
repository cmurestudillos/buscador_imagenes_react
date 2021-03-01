import React, { useState, useEffect, Fragment } from 'react';
// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
// Componentes
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';
import Footer from './components/Footer';

function App() {

  // state de la app
  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes] = useState([]);
  const [ paginaactual, guardarPaginaActual ] = useState(1);
  const [ totalpaginas, guardarTotalPaginas] = useState(5);

  useEffect(() => {
    const consultarApi = async () => {
        if(busqueda === '' ) return;

        const imagenesPorPagina = 30;
        const key = '20470204-c53f8a8ee90591b468254d283';
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;
    
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarImagenes(resultado.hits);

        // calcular el total de paginas
        const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina );
        guardarTotalPaginas(calcularTotalPaginas);

        // Mover la pantalla hacia arriba
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({ behavior: 'smooth' })
    }
    consultarApi();
  }, [busqueda, paginaactual])

  // definir la página anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;

    // Evitar numeros negativos en la paginacion
    if(nuevaPaginaActual === 0 ) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  // definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;

    // Evitar superar el numero total de paginas e ir mas alla
    if(nuevaPaginaActual > totalpaginas ) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="jumbotron m-2 shadow-lg p-3 mb-5 bg-white rounded">
            <Formulario guardarBusqueda={guardarBusqueda} />
        </div>

        <div className="row justify-content-center mb-5">
            <ListadoImagenes imagenes={imagenes} />

            { (paginaactual === 1) ? null : (
              <button type="button" className="btn btn-outline-info m-2" onClick={paginaAnterior} >&laquo; Anterior </button>
            ) }

            { (paginaactual === totalpaginas) ? null : (
              <button type="button" className="btn btn-outline-info m-2" onClick={paginaSiguiente} >Siguiente &raquo;</button>
            ) }
        </div>
      </div>
      <Footer />
    </Fragment>

  );
}

export default App;
