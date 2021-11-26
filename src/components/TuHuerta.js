import React from 'react';
import { Link } from "react-router-dom"; //Eliminar ****+**

export const cardPasos = [
    {id: 1,
    imagen: "img/paso1.jpg",
    titulo: "Paso 1", 
    subtitulo: "Elige el lugar", 
    descripcion: `Empieza por definir el espacio que le asignaras  a la huerta ya que determina el fracaso o el éxito. ten en cuenta lo siguiente`,
    descripcion2 : <ul>
        <li>
            Decide si será horizontal o vertical
        </li>
        <li>
            Usa materiales usados: cajones y armarios viejos, botellas plásticas
        </li>
        <li>
            Si no tienes un espacio continuo puedes usar macetas de diferentes tamaños
        </li>
    </ul>
    
        
        
    },
    {
    id: 2,
    imagen: "img/paso2.jpg",
    titulo: "Paso 2",
    subtitulo: "Construir el huerto" ,
    descripcion:"Con el sitio definido es hora de poner manos a la obra y diseñar la estructura del huerto",
    descripcion2:
    <ul>
        <li>
            Decide si será horizontal o vertical
        </li>
        <li>
            Usa materiales usados: cajones y armarios viejos, botellas plásticas
        </li>
        <li>
            Si no tienes un espacio continuo puedes usar macetas de diferentes tamaños
        </li>
    </ul>
    },
    {
    id: 3,
    imagen: "img/paso3.jpg",
    titulo: "Paso 3",
    subtitulo: "Seleccionando tierra y semillas",
    descripcion:"Adquiere tierra fértil, lo más recomendable es que uses sustrato 100% orgánico puedes hacerlo tu mismo con una compostera. Para las semillas ",
    descripcion2:
        <ul>
            <li>
                Elige plantas de temporada
            </li>
            <li>
                Combina distintos tipos de plantas complementarias
            </li>
            <li>
                Crea o usa semilleros
            </li>
        </ul>
        }
]

export const cardMantenimiento = [
    {
    id: 1,
    imagen: "img/maleza.png",
    titulo: "Arranque la maleza",
    subtitulo:"Haga limpieza",
    descripcion:"Retire las hierbas indeseadas, que se encuentren en el suelo, puede realizarlo manualmente o con algún tipo de producto natural que elimine todas clases de hierbas de hoja ancha y angosta. Se puede aplicar rociándolo directamente en las malezas, esperando 10 días hasta que se sequen. Posteriormente, limpie con un rastrillo",
    descripcion2: "Ojo que las malezas compiten con las plantas de hortalizas por la luz, el agua, espacio y nutrientes, y por lo general ganan la competencia."
},
    {id: 2,
    imagen: "img/regar.png",
    titulo: "Riegue con Regularidad",
    subtitulo: "El agua: el mejor amigo",
    descripcion: "Si deja que las plantas de hortalizas se sequen, muchas dejarán de producir, y de lo contrario, sufrirá la calidad de la cosecha. En el caso de tomates, pimientos y lechugas, sufrirán podredumbre apical, y los pepinos tendrán un sabor amargo.",
    descripcion2: " Por lo tanto, mantenga el suelo húmedo especialmente durante los períodos cálidos y riegue profundamente (por lo menos hasta 10 cm de profundidad), permitiendo que el suelo se seque parcialmente y vuelva a regar. ",
},
    {id: 3,
    imagen: "img/seguir-plantando.png",
    titulo: "Continúe Plantando",
    subtitulo: "Una actividad sostenible",
    descripcion: "Una vez que coseche continúe plantando. En las zonas con inviernos más crudos, la cosecha se puede prolongar hasta el invierno, en zonas tropícales dependerá más de la temperatura a la que se encuentre.",
    descripcion2: "Opte por plantas de maduración rápida y en lo posible evite usar siempre la misma planta en la misma tierra. Cada planta tiene necesidades diferentes y absorbe diferentes nutrientes, si usa siempre las mismas plantas la tierra se degradará; por esta razón es importante la rotación de cultivos puede utilzar un orden como el siguiente: frutas, raices, hojas, flores. ",
},
    {id: 4,
    imagen: "img/fertilizar.png",
    titulo: "Fertilización de la Huerta",
    subtitulo: "Los cuidados básicos",
    descripcion: "Mantenga el crecimiento vigoroso de los vegetales de maduración tardía, aplicando fertilizante con nitrógeno en forma esporádica.",
    descripcion2: " No fertilice en exceso las plantas que ya están produciendo, debido a que provoca que algunas hortalizas, en especial los tomates, dejen de producir. En lo posible utilice fertilizantes naturales, abono orgánico proveniente del compost o de la vermicomposta.",
},
    {id: 5,
    imagen: "img/insecto.png",
    titulo: "Controle los Insectos",
    subtitulo: "Las plagas y sus peligros",
    descripcion: "Vigile de cerca el control de plagas de insectos. Si existen algunos, puede sacarlos con la mano y así eliminar los (píselas o vierta a un tarro de agua jabonosa) gusanos picudos del tomate, escarabajos del pepino y saltamontes, son algunos de ellos. Si el problema persiste, vea la posibilidad de aplicar una solución que pueda usarse en hortalizas.",
    descripcion2: "",
},
    {id: 6,
    imagen: "img/proteger.png",
    titulo: "Utilice Protectores para Extender la Estación",
    subtitulo: "Acerca del climas",
    descripcion: "En zonas de estaciones cortas donde las heladas pueden producirse en cualquier momento, es bueno proteger las plantas con cubiertas flotantes. Éstas, disponibles en viveros y centros de jardinería, están confeccionadas con un género ligero que transmite la luz y el agua, pero que atrapa el calor para acelerar la maduración y proteger del frío.",
    descripcion2: "",
},
    {id: 7,
    imagen: "img/siembra-frecuente.png",
    titulo: "Coseche con Frecuencia",
    subtitulo: "Cultivar y cosechar",
    descripcion: "Visite el jardín como mínimo día por medio para cosechar las hortalizas maduras. La mayoría de las plantas de hortalizas dejan de producir si no se cultivan con frecuencia. ",
    descripcion2: "",
}

]

function TuHuerta (){
    
    const tituloSecion={
        tituloPagina: <h1>Construye tu huerta</h1>,
        tituloPasos : <h2>Primeros Pasos </h2> ,
        tituloMantenimiento : <h2>Mantenimiento y Cuidados</h2>,
    }  
  
    return (
        <>
        

            <div className="container text-center pt-5">
                <div className="row">
                    <div className="col">
                        {tituloSecion.tituloPagina}
                    </div>
                </div>
                <div className="row">
                    <div className="col text-start pb-3">
                        {tituloSecion.tituloPasos}
                    </div>
                </div>
            </div>

            {cardPasos.map((item) =>
            
                <div className="container">
                        
                    <div className="card mb-3 max-width:540px;">
                        <div className="row g-0 image">
                            <div className="col-md-4 imageses-pasos">
                                <img src={item.imagen} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    
                                    <h4 className="card-title">{item.titulo}</h4>
                                    <h5>{item.subtitulo}</h5>
                                    <p className="card-text">
                                        {item.descripcion}
                                        {item.descripcion2}
                                     
                                    </p>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
            )}

            <div className="container text-center pt-3 pb-3">
                <div className="row">
                    <div className="col text-start pb-3">
                        {tituloSecion.tituloMantenimiento}
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {cardMantenimiento.map((item) =>
                    <div className="col">
                        <div className="card h-100">
                            <img src={item.imagen} className="card-img-top icono-arma-huerta" alt="..."/>
                            <div className="card-body text-start">
                                <h4 className="card-title">{item.titulo}</h4>
                                <h5 className="card-title">{item.subtitulo}</h5>
                                <p className="card-text">
                                {item.descripcion}<br/><br/>
                                {item.descripcion2}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
            
            <li className="nav-item">
        
				<Link className="nav-link" to="/crudmantenimiento">									
					Crud Mantenimiento
				</Link>
			</li>
            <li className="nav-item">         
                <Link className="nav-link" to="/crudpasos">									
                    Crud Pasos
                </Link>
            </li>


        </>
    );  
    
}
export default TuHuerta;

