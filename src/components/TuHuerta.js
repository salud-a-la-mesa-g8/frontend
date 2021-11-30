import React from 'react'

const TuHuerta = props => {
  return (
    <>
      <div className="container text-center pt-5">
        <div className="row">
          <div className="col">
            <h1>Construye tu huerta</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-start pb-3">
            <h2>Primeros Pasos</h2>
          </div>
        </div>
      </div>
      <div className="container">

        <div className="card mb-3 max-width:540px;">
          <div className="row g-0 image">
            <div className="col-md-4 imageses-pasos">
              <img src={require("../img/paso1.jpg").default} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">Paso 1</h4>
                <h5>Elige el lugar</h5>
                <div className="card-text">
                  Empieza por definir el espacio que le asignaras a la huerta ya que determina el fracaso o el éxito. ten en cuenta lo siguiente <br />
                  <ul>
                    <li>
                      Cantidad de sol que recibe el lugar
                    </li>
                    <li>
                      Contar con un punto de agua cerca
                    </li>
                    <li>
                      Protección contra corrientes de aire
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 max-width:540px;">
          <div className="row g-0">
            <div className="col-md-4 imageses-pasos">
              <img src={require("../img/paso2.jpg").default} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">Paso 2</h4>
                <h5>Construir el huerto</h5>
                <div className="card-text">
                  Con el sitio definido es hora de poner manos a la obra y diseñar la estructura del huerto<br />
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
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 max-width:540px;">
          <div className="row g-0">
            <div className="col-md-4 imageses-pasos">
              <img src={require("../img/paso3.jpg").default} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">Paso 3</h4>
                <h5>Seleccionando tierra y semillas</h5>
                <div className="card-text">
                  Adquiere tierra fértil, lo más recomendable es que uses sustrato 100% orgánico puedes hacerlo tu mismo con una compostera. Para las semillas  <br />
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
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center pt-3 pb-3">
        <div className="row">
          <div className="col text-start pb-3">
            <h2>Mantenimiento y Cuidados</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={require("../img/maleza.png").default} className="card-img-top icono-arma-huerta" alt="..." />
              <div className="card-body text-start">
                <h4 className="card-title">Arranque la maleza</h4>
                <h5 className="card-title">Haga limpieza</h5>
                <p className="card-text">
                  Retire las hierbas indeseadas, que se encuentren en el suelo, puede realizarlo manualmente o con algún tipo de producto natural que elimine todas clases de hierbas de hoja ancha y angosta. Se puede aplicar rociándolo directamente en las malezas, esperando 10 días hasta que se sequen. Posteriormente, limpie con un rastrillo. <br /><br />
                  Ojo que las malezas compiten con las plantas de hortalizas por la luz, el agua, espacio y nutrientes, y por lo general ganan la competencia.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={require("../img/regar.png").default} className="card-img-top icono-arma-huerta" alt="..." />
              <div className="card-body text-start">
                <h4 className="card-title">Riegue con Regularidad</h4>
                <h5 className="card-title">El agua: el mejor amigo</h5>
                <p className="card-text">Si deja que las plantas de hortalizas se sequen, muchas dejarán de producir, y de lo contrario, sufrirá la calidad de la cosecha. En el caso de tomates, pimientos y lechugas, sufrirán podredumbre apical, y los pepinos tendrán un sabor amargo. <br /> <br />
                  Por lo tanto, mantenga el suelo húmedo especialmente durante los períodos cálidos y riegue profundamente (por lo menos hasta 10 cm de profundidad), permitiendo que el suelo se seque parcialmente y vuelva a regar.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={require("../img/seguir-plantando.png").default} className="card-img-top icono-arma-huerta" alt="..." />
              <div className="card-body text-start">
                <h4 className="card-title">ontinúe Plantando</h4>
                <h5 className="card-title">Una actividad sostenible</h5>
                <p className="card-text">Una vez que coseche continúe plantando. En las zonas con inviernos más crudos, la cosecha se puede prolongar hasta el invierno, en zonas tropícales dependerá más de la temperatura a la que se encuentre. <br /><br />
                  Opte por plantas de maduración rápida y en lo posible evite usar siempre la misma planta en la misma tierra. Cada planta tiene necesidades diferentes y absorbe diferentes nutrientes, si usa siempre las mismas plantas la tierra se degradará; por esta razón es importante la rotación de cultivos puede utilzar un orden como el siguiente: frutas, raices, hojas, flores.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={require("../img/fertilizar.png").default} className="card-img-top icono-arma-huerta" alt="..." />
              <div className="card-body text-start">
                <h4 className="card-title">Fertilización de la Huerta</h4>
                <h5 className="card-title">Los cuidados básicos</h5>
                <p className="card-text">Mantenga el crecimiento vigoroso de los vegetales de maduración tardía, aplicando fertilizante con nitrógeno en forma esporádica. <br /><br />
                  No fertilice en exceso las plantas que ya están produciendo, debido a que provoca que algunas hortalizas, en especial los tomates, dejen de producir. En lo posible utilice fertilizantes naturales, abono orgánico proveniente del compost o de la vermicomposta
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={require("../img/insecto.png").default} className="card-img-top icono-arma-huerta" alt="..." />
              <div className="card-body text-start">
                <h4 className="card-title">Controle los Insectos</h4>
                <h5 className="card-title">Las plagas y sus peligros</h5>
                <p className="card-text">
                  Vigile de cerca el control de plagas de insectos. Si existen algunos, puede sacarlos con la mano y así eliminar los (píselas o vierta a un tarro de agua jabonosa) gusanos picudos del tomate, escarabajos del pepino y saltamontes, son algunos de ellos. Si el problema persiste, vea la posibilidad de aplicar una solución que pueda usarse en hortalizas.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={require("../img/proteger.png").default} className="card-img-top icono-arma-huerta" alt="..." />
              <div className="card-body text-start">
                <h4 className="card-title">Utilice Protectores para Extender la Estación</h4>
                <h5 className="card-title">Acerca del climas</h5>
                <p className="card-text">En zonas de estaciones cortas donde las heladas pueden producirse en cualquier momento, es bueno proteger las plantas con cubiertas flotantes. Éstas, disponibles en viveros y centros de jardinería, están confeccionadas con un género ligero que transmite la luz y el agua, pero que atrapa el calor para acelerar la maduración y proteger del frío.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={require("../img/siembra-frecuente.png").default} className="card-img-top icono-arma-huerta" alt="..." />
              <div className="card-body text-start">
                <h4
                  className="card-title">Coseche con Frecuencia</h4>
                <h5 className="card-title">Cultivar y cosechar</h5>
                <p className="card-text">Visite el jardín como mínimo día por medio para cosechar las hortalizas maduras. La mayoría de las plantas de hortalizas dejan de producir si no se cultivan con frecuencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TuHuerta;
