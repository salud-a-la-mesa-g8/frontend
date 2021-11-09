import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons"

const NoticiasSaludables = () => {
    return (

      <>
      <section>
        <div className="">

        <img src="" className="" alt="" />

        <h3 className="">Cuida el orgaqnismo y tu peso</h3>
        <p>
            La clave para alcanzar y mantener un peso saludable está en hacer ejercicio regularmente y tener unos buenos
            hábitos alimentarios. Algunas personas creen que hacer ejercicio y seguir unos buenos hábitos alimentarios
            requiere mucho esfuerzo y planificación pero esto no es cierto. De hecho, la mejor forma de modificar los
            hábitos cotidianos es haciendo pequeños cambios que gradualmente irán formando parte de nuestra rutina diaria.
          </p>
          <p>
            Todos sabemos lo que significa introducir cambios en nuestra vida diaria que ahora están firmemente establecidos
            en nuestro estilo de vida —por ejemplo, todos hemos aprendido a lavarnos los dientes y estamos acostumbrado a
            hacerlo varias veces cada día. He aquí la información que necesitas para que otros cambios saludables te
            resulten igual de fáciles.
          </p>
        
        <h4>Hábitos alimentarios saludables</h4>
        <p>
          Alimentarse bien no significa ponerse a dieta o a régimen una y otra vez. De hecho, los estudios han demostrado
          que ponerse a dieta a menudo no funciona —y las dietas de adelgazamiento pueden tener un efecto rebote, ya que
          mucha gente, al dejar de hacer dieta, gana incluso más peso del que tenía antes de ponerse a dieta.
          Una de la causas de que las dietas no funcionen es porque instan a pensar que hay alimentos "buenos" y "malos,"
          cuando lo cierto es que todo es bueno si se toma con moderación. Además en la mayoría de dietas de
          adelgazamiento se debe dejar de comer ciertos alimentos, lo que favorece los “antojos” de esos alimentos en
          concreto. Y muchas dietas y regimenes provocan en el organismo carencias de nutrientes importantes. Los jóvenes
          deben seguir una dieta variada, y no hay nada malo en permitirse algún manjar rico de sabor pero poco nutritivo
          de vez en cuando. Por ejemplo, una barrita de caramelo tiene un sabor más especial si nos la tomamos de vez en
          cuando que si lo hacemos cada día.
        </p>
        <p>
          La mejor forma de mantenerse en un peso saludable (o de perder peso en caso necesario) es hacer elecciones
          saludables en lo que a alimentos se refiere cada día. Para algunos, esto implicará modificar la mentalidad en lo
          que a la comida se refiere. En vez de pensar en la comida en términos emocionales (por ejemplo, como una
          recompensa por haber sacado buena nota en un examen o una forma de afrontar el estrés), vela tal y como es —una
          forma práctica de llenar de combustible tu cuerpo.
        </p>
        <p>
          He aquí 10 consejos para convertir la alimentación saludable en una parte de tu vida:
          <ul>
            <li>Sustituye los refrescos, los zumos de frutas y las bebidas para deportistas que sean ricas en azúcar por agua, leche semidesnatada o bebidas sin azúcar.</li>
            <li>Toma por lo menos cinco raciones de fruta y verdura al día. La fibra te saciará y obtendrás los nutrientes ysabores que necesita tu cuerpo para sentirse satisfecho.</li>
            <li>Come alimentos de todos los grupos. Aparte de la fruta y la verdura, incluye cereales integrales y proteínas magras en cada comida.</li>
            <li>Cuando comas en un establecimiento de comida rápida, haz elecciones saludables dentro de lo posible. Elige un bocadillo de hamburguesa apequeño (de un solo piso) en vez de uno inmenso (de varios pisos) y acompáñalo con una ensalada en vez de con patatas fritas. Elige siempre raciones normales, no super o extragrandes. Y todavía mejor: evita los establecimientos de comida rápida siempre que puedas.</li>
            <li>Ten siempre a mano alimentos saludables. Si la cocina de tu casa siempre está llena de alimentos saludables, como apio, pasas o manteca de cacahuete, tendrás muchas menos oportunidades de lanzarte sobre un paquete de pastas (¡Tal vez tengas que enseñarles a tus padres un par de cosas sobre los alimentos para asegurarte de que te compran cosas buenas!).</li>
            <li>Llévate de casa tus propios tentempiés para no caer en la tentación de utilizar las máquinas dispensadoras de alimentos o de entrar en un supermercado. Prueba a llevarte palitos de zanahoria, piezas de fruta o muesli hecho por ti en vez de un paquete de galletas, una bolsa de patatas fritas u otro alimento de fabricación industrial, que suelen estar cargados de grasas y calorías.</li>
            <li>Come cuando tengas hambre. Si tienes la tentación de picar algo por puro aburrimiento, intenta buscar otra forma de ocupar el tiempo.</li>
            <li>Desayuna de forma saludable cada día.</li>
            <li>No hagas las comidas principales ni tomes tentempiés viendo la televisión porque probablemente acabarás comiendo más de lo que necesitas.</li>
            <li>Fíjate en el tamaño de las porciones. Si una porción es demasiado grande, pártela por la mitad y déjate la otra mitad para más adelante o bien compártela con un amigo.</li>
          </ul>
        </p>
        <hr style="height:20px;color:rgb(9, 175, 51)"></hr>
        </div>
      </section>               
      
      {/* Comienza la sección de Recetas */}
      <section>

     <div className="container">
          
          <!-- Inicio de la primera receta -->
          <div className="row">
            <div className="col">
              <div className="noticias-card sombra" style="width: 30rem;">
                <img src="./img/receta pasta y esparragos ajustado.jpg" className="card-img-top" alt="imagen">
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
      <!-- Inicio de la segunda receta --> */}
      <div className="row">
        <div className="col">
          <div className="noticias-card sombra" style="width: 30rem;">
            <img src="./img/sirope de agave ajustado.jpg" className="card-img-top" alt="imagen">
            <div className="card-body">
              <p className="card-text">
                <h5>Sirope de ágave</h5>
                El sirope de agave también conocido como néctar de agave o miel de agave es el jugo vegetal dulce que se extrae de las hojas o pencas del agave, planta de aspecto parecido a una yuca o cactus pero que en realidad es una suculenta similar al aloe vera. Originaria de América tropical, subtropical y el Caribe, existen más de cien especies de plantas, pero para la producción del sirope se emplean principalmente el agave azul y el agave maguey.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="noticias-card sombra">
            <div className="card-body">
              <h5 className="card-title">Sirope de cereales</h5>              
              <p className="card-text">
                Edulcorante que resulta del proceso de convertir el almidón de los granos en azúcares simples, por la acción de las enzimas, de modo que el organismo pueda asimilarlos lentamente, según sus necesidades.
              </p>
              <p className="card-text">
                De este modo, y al contrario que el azúcar industrial, el sirope de cereales no sobrecarga el hígado o los riñones, no altera el metabolismo y la circulación, no causa desmineralización, obesidad, diabetes o caries dentales.
              </p>              
              <p className="card-text">
                Constituyen pues, la forma más equilibrada de endulzar tus postres y más recomendables que otros endulzantes naturales como la miel, fructosa o siropes de frutas. Su aspecto y textura es similar al de la miel y puedes elegir sirope de arroz, cebada, trigo o maíz, según tus preferencias.
              </p>              
            </div> 
          </div>
        </div>
      </div>
      {/* Fin de la segunda receta */}
     </div>
    </section>

      </>
    );
}      

export default NoticiasSaludables;