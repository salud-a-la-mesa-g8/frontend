import axios from 'axios'
import React, { useState, useEffect } from 'react'
require('dotenv').config();


function NoticiasSaludables () {

  const [datos, setDatos] = useState([]);
 

  useEffect(() => {
    cargarDatos()
  }, [])

  const cargarDatos = async () => {


    const respuesta = await axios.get(process.env.REACT_APP_URL_API+"noticia/list_one")
    
    setDatos(respuesta.data)
        
  }

  return (

    <>
      {/* Inicia sección de Noticias dinamica*/}

      <div className="container border bg-secondary text-white pt-5 pb-5 my-5">
        <section className="text-center pb-5">
        <h1>NOTICIAS SALUDABLES</h1>
        </section>

      { datos.map((item)=>{
        
          return (
            <section >
                
                <div className="noticias-articulo">
        
                  
                  <img src={item.imagen} className="col-md-3 float-md-end mb-3 ms-md-3" alt="..." />
          
                  <h3 className="noticias-titulo text-white">{item.titulo}</h3>
                  <h5>Autor: {item.autor}</h5>
                  <p>{item.texto_corto}</p>  
                    
                  <p>{item.texto_largo}</p>

                  <hr style={{
                    color: "black",
                    backgroundColor: "black",
                    height: 10
                  }}/>

                </div>
              
            </section>   
          
          );
       })
      }
       </div>
      {/* Termina seccion de Noticias dinamica */}
          

      {/* Comienza la sección de Tips y Recetas */}
    <section>
     <div className="container">
     <section className="text-center">
      <h1>TIPS Y RECETAS</h1>
      </section>
      {/* Inicio de la primera receta */}         
          <div className="row">
            <div className="col">
              <div className="noticias-card sombra" >
                <img src="img/receta pasta y esparragos ajustado.jpg" className="card-img-top" alt="imagen"/>
                <div className="card-body">
                  <p className="card-text">
                    <h5>Ingredientes para 4 porciones</h5>
                    <ul>
                      <li>300 grs de pasta</li>
                      <li>3 alcachofas</li>
                      <li>12 espárragos trigueros</li>
                      <li>2 dl de crema de leche</li>
                      <li>100 grs de jamón</li>
                      <li>Aceite de oliva virgen extra</li>
                      <li>Sal y pimienta</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="noticias-card sombra">
                <div className="card-body">
                  <h5 className="card-title">Pasta con jamón, espárragos y alcachofas</h5>
                  <p className="card-text">
                    1. Limpiar las alcachofas quitando las hojas exteriores y cortando las en láminas longitudinales. Limpiar y cortar la base dura de los espárragos verdes. Salar alcachofas y espárragos. Poner una sartén al fuego con 1 cucharada de aceite de oliva. Saltear los espárragos a fuego fuerte. Y mantener hasta que queden al dente. Añadir 2 cucharadas más de aceite y freír las alcachofas hasta que cojan color. Reservar.
                  </p>
                  
                  <p className="card-text">
                    2. Cortar en tiras el jamón. Poner una sartén al fuego con un chorrito de aceite y saltear el jamón 2 o 3 minutos. Añadir la nata y dejar reducir 3 o 4 minutos. Salpimentar y reservar.
                  </p>
              
                  <p className="card-text">
                    3. Poner una olla con abundante agua al fuego. Echar la pasta, salar y cocer siguiendo las instrucciones
                    del fabricante de la pasta. Servir la pasta con la salsa, y los espárragos y alcachofas fritas.
                  </p>
              
                  <p className="card-text">
                    4. Siempre será una buena idea acompaãr el plato con una copa de vino blanco previamente enfriado.
                  </p>
              
                </div>
              </div>
            </div>
          </div> 
      {/* <!-- Fin de la primera receta -->
      
      <!-- Inicio del primer Tip --> */}
      <hr style={{
            color: "green",
            backgroundColor: "green",
            height: 10
        }}/>
        <div className="row">
          <div className="col">
            <div className="noticias-card sombra">
              <img src="img/sirope de agave ajustado.jpg" className="card-img-top" alt="imagen"/>
              <div className="card-body">
                <p className="card-text">
                  <h5>Sirope de ágave</h5>
                  El sirope de agave también conocido como néctar de agave o miel de agave es el jugo vegetal dulce que se
                  extrae de las hojas o pencas del agave, planta de aspecto parecido a una yuca o cactus pero que en
                  realidad es una suculenta similar al aloe vera. Originaria de América tropical, subtropical y el Caribe,
                  existen más de cien especies de plantas, pero para la producción del sirope se emplean principalmente el
                  agave azul y el agave maguey.
                </p>
              </div>
            </div>
          </div>
        
          <div className="col">
            <div className="noticias-card sombra">
              <div className="card-body">

              <h5 className="card-title">Sirope de cereales</h5>
              
              <p className="card-text">
                Edulcorante que resulta del proceso de convertir el almidón de los granos en azúcares simples, por la
                acción de las enzimas, de modo que el organismo pueda asimilarlos lentamente, según sus necesidades.
              </p>

              <p className="card-text">
                De este modo, y al contrario que el azúcar industrial, el sirope de cereales no sobrecarga el hígado o
                los riñones, no altera el metabolismo y la circulación, no causa desmineralización, obesidad, diabetes o
                caries dentales.
              </p>
              
              <p className="card-text">
                Constituyen pues, la forma más equilibrada de endulzar tus postres y más recomendables que otros
                endulzantes naturales como la miel, fructosa o siropes de frutas. Su aspecto y textura es similar al de
                la miel y puedes elegir sirope de arroz, cebada, trigo o maíz, según tus preferencias.
              </p>
              </div> 
            </div>
          </div>
        </div>
      {/* Fin del primer tip */}

      {/* Inicio del segundo Tip */}
      <hr style={{
          color: "green",
          backgroundColor: "green",
          height: 10
      }}/>
      <div className="row">
          <div className="col">
            <div className="noticias-card sombra">
              <img src="img/tips de cocina saludable ajustado.jpg" className="card-img-top" alt="imagen"/>
              <div className="card-body">
                <p className="card-text">
                  <h5>10 maneras de cocinar más saludable</h5>
                  Cuando se trata de cocinar de manera saludable, nos enfocamos en elegir buenos ingredientes con los nutrientes que tú y tu familia necesitan. Pero la verdad es que la forma en que preparas la comida puede ser tan importante como lo que compras.A continuación te ofrecemos una lista de 10 consejos para cocinar de forma más saludable que ayudarán a resaltar el sabor de tus alimentos.
                  <ul>
                      <li>1. Trata tus vegetales correctamente</li>
                      <li>2. Prueba la comida antes de agregar sal</li>
                      <li>3. Enjuaga las verduras</li>
                      <li>4. No enjuagues la carne</li>
                      <li>5. Deshecha la grasa de la carne molida</li>
                      <li>6. Freír en el horno, no en sartén</li>
                      <li>7. Agrega un poco de grasa buena a la ensalada</li>
                      <li>8. No cocines demasiado el ajo fresco</li>
                      <li>9. Trata bien tu aceite de oliva</li>
                      <li>10. Varía el menú</li>
                    </ul>
                </p>
              </div>
            </div>
          </div>
          </div>
        {/* Fin segundo Tip */}

      </div>
    </section>
    {/* Fin de la sección de Tips y recetas */}
      
      </>
    )
}      

export default NoticiasSaludables;