import React from 'react'
import c11 from '../img/c1-1.png'
import c12 from '../img/c1-2.png'
import c13 from '../img/c1-3.png'
import c21 from '../img/c2-1.png'
import c22 from '../img/c2-2.png'
import c23 from '../img/c2-3.png'
import c31 from '../img/c3-1.png'
import c32 from '../img/c3-2.png'
import c33 from '../img/c3-3.png'
import c41 from '../img/c4-1.png'
import c42 from '../img/c4-2.png'
import c43 from '../img/c4-3.png'
// import PropTypes from 'prop-types'

const InicioSitio = props => {
  const prodCosecha = [
    {
      img:c11,
      titulo:"Almendras",
      texto: "Las almendras se pueden transformar en un sustituto de la leche llamado leche de almendras; La textura suave, el sabor suave y el color claro de la nuez (cuando se pela) lo convierten en un análogo eficiente de los lácteos y una opción sin soya para las personas intolerantes a la lactosa y los veganos"
    },
    {
      img:c12,
      titulo:"Frutas con más y menos azúcar",
      texto: "Este azúcar natural no es dañino para el organismo. Aunque no tenemos que preocuparnos por el azúcar en las frutas, todavía cuenta para nuestra ingesta diaria de calorías. Las personas que necesitan controlar sus niveles de azúcar en sangre deben saber qué frutas tienen un alto contenido de azúcar y no consumirlas."
    },
    {
      img:c13,
      titulo:"Tomate",
      texto: "El tomate es un alimento rico en vitaminas y minerales, fácil de combinar en muchos platos y un buen acompañante en la cocina. Contiene pocas calorías, un tomate de cien gramos proporciona 18 calorías, ya que la mayor parte de su peso corresponde a agua"
    }
  ];
  const tipsRecetas = [
    {
      img:c21,
      titulo:"Esalada con naranja, queso y pistachos",
      texto: "Esta ensalada con naranja, queso de cabra y pistachos aportan vitamina B1 y vitamina B6, riboflavina, vitamina E, vitamina K y ácido fólico. Si no tienes, sustitúyelos por otro fruto seco."
    },
    {
      img:c22,
      titulo:"Ensalada sencilla con aguacate",
      texto: "Fresas y aguacates son los ingredientes estrella de este plato que mejora la salud porque las primeras aportan vitamina C, entre otras, y los segundos son el conocido como 'oro verde'. Su potasio ayuda a reducir la presión arterial."
    },
    {
      img:c23,
      titulo:"Carpaccio de pepino con sardinas",
      texto: "Una receta para el confinamiento que mejora la salud y te cuida porque el pepino aporta fibra, vitaminas del grupo B, C, E y A y contiene importantes minerales como el hierro, el calcio, el fósforo, el magnesio y el potasio."
    },
  ];
  const armaTuHuerta = [
    {
      img:c31,
      titulo:"Rastrillo de jardinería",
      texto: "Instrumento agrícola y hortícola consistente en una barra dentada fijada transversalmente a un mango y usada para recoger hojas, heno, césped, etc., y, en jardinería, para aflojar el suelo, quitar yuyo y nivelar."
    },
    {
      img:c32,
      titulo:"Carretilla para huerta",
      texto: "Carro pequeño de mano normalmente de una sola rueda con un cajón para colocar carga, incorpora dos varas en la parte posterior diseñado para ser propulsado por una sola persona y utilizado para el transporte a mano de carga en distancias cortas"
    },
    {
      img:c33,
      titulo:"Regadera para huerta",
      texto: "Las regaderas son instrumento fundamental para nuestro jardín, ya que, cuando disponemos de macetas y plantas debemos de cuidarlas y mantenerlas en un buen estado. Existen muchos tipos de formas, colores y tamaños, además dependen también del tipo de planta a la que se va a regar."
    },
  ];
  const noticiasSaludables = [
    {
      img:c41,
      titulo:"Técnicas de relajación",
      texto: "Las técnicas de relajación pueden reducir los síntomas del estrés y ayudarte a disfrutar de una mejor calidad de vida, en especial, si padeces una enfermedad. Explora las técnicas de relajación que puedes hacer por tu cuenta"
    },
    {
      img:c42,
      titulo:"Stevia para controlar el peso",
      texto: "No hay pruebas de que ofrezcan una ventaja para la pérdida de peso en comparación con otros edulcorantes no nutritivos. Además, estos extractos de estevia altamente refinados pueden causar efectos secundarios leves, como náuseas o sensación de saciedad"
    },
    {
      img:c43,
      titulo:"meditación en la salud",
      texto: "La meditación aporta muchos beneficios para la salud, ya que puede ayudar a: Reducir el estrés. Aliviar las condiciones de salud relacionadas con el estrés, como el síndrome del intestino irritable y la fibromialgia. Fomentar la salud mental y emocional."
    },
  ];
  return (
    <>
      <section id="section1" data-speed="8" data-type="background">
				<div className="container">
					<h1>Vivir saludable es delicioso</h1>
				</div>
			</section>

			<section className="my-2">
        <div className="container">

          <div className="h1 text-center my-2">
              Productos en cosecha
          </div>

          <div className="row mt-4">
            {prodCosecha.map((prd, index) =>            
              <div className="col-sm-12 col-md-3 col-lg-4 d-flex align-items-md-stretch my-2" key={index} >
                <div className="card">
                  <img className="img card-img-top" src={prd.img} alt="img" />
                  <div className="card-body">
                    <h5 className="card-title text-center">{prd.titulo}</h5>
                    <p className="card-text">{prd.texto}</p>
                  </div>
                </div>            
              </div>              
            )}
         </div>           
        </div>
			</section>

			<section id="section2" data-speed="8" data-type="background">
				<div className="container">
					<h1>Mantenerse en forma no es opcional</h1>
				</div>
			</section>            

      <section className="my-2">
        <div className="container">

          <div className="h1 text-center my-2">
            Tips y recetas saludables
          </div>

          <div className="row mt-4">      
            {tipsRecetas.map((prd, index) =>             
              <div className="col-sm-12 col-md-3 col-lg-4 d-flex align-items-md-stretch my-2" key={index} >
                <div className="card">
                  <img className="img card-img-top" src={prd.img} alt="img" />
                  <div className="card-body">
                    <h5 className="card-title text-center">{prd.titulo}</h5>
                    <p className="card-text">{prd.texto}</p>
                  </div>
                </div>            
              </div>              
            )}
         </div>                                                  
        </div>
			</section>
			            
			<section id="section3" data-speed="8" data-type="background">
				<div className="container">
					<h1>Tu eres lo que comes</h1>
				</div>
			</section>

      <section className="my-2">
        <div className="container">
          
          <div className="h1 text-center my-2">
            Arma tu huerta
          </div>

          <div className="row mt-4">      
            {armaTuHuerta.map((prd, index) =>             
              <div className="col-sm-12 col-md-3 col-lg-4 d-flex align-items-md-stretch my-2" key={index} >
                <div className="card">
                  <img className="img card-img-top" src={prd.img} alt="img" />
                  <div className="card-body">
                    <h5 className="card-title text-center">{prd.titulo}</h5>
                    <p className="card-text">{prd.texto}</p>
                  </div>
                </div>            
              </div>              
            )}
         </div>                                                  
        </div>
			</section>      

      <section id="section4" data-speed="8" data-type="background">
				<div className="container">
					<h1>Sin dudarlo comienza a cuidarte</h1>
				</div>
			</section>
      
      <section className="my-2">
        <div className="container">

          <div className="h1 text-center my-2">
            Noticias saludables
          </div>

          <div className="row mt-4">      
            {noticiasSaludables.map((prd, index) =>             
              <div className="col-sm-12 col-md-3 col-lg-4 d-flex align-items-md-stretch my-2" key={index} >
                <div className="card">
                  <img className="img card-img-top" src={prd.img} alt="img" />
                  <div className="card-body">
                    <h5 className="card-title text-center">{prd.titulo}</h5>
                    <p className="card-text">{prd.texto}</p>
                  </div>
                </div>            
              </div>              
            )}
         </div>                                                  
        </div>
			</section>

      
		</>
  )
}

// InicioSitio.propTypes = {}

export default InicioSitio