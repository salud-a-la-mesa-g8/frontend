import React from 'react'

const AsesoriaNutricional = () => {
    return (
        <>
            <div className="container text-black pt-5 pb-5 my-5">
            <section className="text-center">
            <h1>SERVICIOS DE ASESORIA NUTRICIONAL</h1>
            </section> 

            <hr style={{ color: "blue", backgroundColor: "blue", height: 20 }}/>
            
                <div className="row pb-5 pt-5">

                    <div className="col">
                        <div className="card sombra">
                            <img src="img/Asesoría-Nutricional-Foto1.jpg" className="card-img-top" alt="imagen" />
                            <div className="card-body">
                                <p className="card-text">
                                    <h5>Consulta Nutricional Presencial y Online</h5>
                                    No importa cuál sea tu objetivo nutricional, podemos ayudarte.
                                </p>
                                <p>
                                    Tenemos un grupo selecto grupo de profesionales, expertos en nutrición, dispuestos a estudiar tu caso y a atender todas tus inquietudes al respecto. Ofrecemos consultas presenciales en nuestras instalaciones o, si lo prefiere, la consulta puede ser virtual. En ambos casos es necesario hacer una cita previa.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card sombra">
                            <img src="img/Asesoría-Nutricional-Foto2.jpg" className="card-img-top" alt="imagen" />
                            <div className="card-body">
                                <p className="card-text">
                                    <h5>Plan de Recetas Saludables Personalizadas</h5>
                                    ¿No sabes qué preparar y terminas comiendo cualquier cosa?
                                </p>
                                    Nuestro grupo de nutricionistas está en capacidad de elaborar para tí un detallado Plan de Recetas Saludables (desayuno, almuerzo, cena), teniendo en cuenta tus necesidades y condiciones físicas, al alcance todos los bolsillos. 
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                
                </div>

            <hr style={{ color: "blue", backgroundColor: "blue", height: 20 }}/>

                <div className="row pb-5 pt-5 ">    
                    <div className="col">
                        <div className="card sombra">
                            <img src="img/Asesoría-Nutricional-Foto3.jpg" className="card-img-top" alt="imagen" />
                            <div className="card-body">
                                <p className="card-text">
                                    <h5>Asesorías Empresariales</h5>
                                    La alimentación saludable mejora el rendimiento laboral y reduce el ausentismo.
                                </p>
                                <p>
                                Promovemos y motivamos la alimentación saludable en las diversas áreas generando un valor agregado para el recurso humano de la empresa y/o institución. Realizamos en sus propias instalaciones evaluación y diagnóstico nutricional, charlas y talleres de alimentación saludable, supervición e inspección sanitaria de comedores, desarrollo de programas de salud, entre otros aspectos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card sombra">
                            <img src="img/Asesoría-Nutricional-Foto4.jpg" className="card-img-top" alt="imagen" />
                            <div className="card-body">
                                <p className="card-text">
                                    <h5>Cursos, Talleres y Encuentros</h5>
                                    La mejor forma de mantenerse actualizado y con información veraz.
                                </p>
                                <p>
                                    Constantemente estamos ofreciendo a los interesados diferentes Cursos y/o Talleres especializados en temas de nutrición saludable en nuestras instalaciones. Contamos con el personal docente más idóneo para conducir estas actividades. Adicionalmente, de manera mensual, organizamos encuentros nutricionales en donde se comparten experiencias, se conocen testimonios y se atienden a expertos internacionales. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr style={{ color: "blue", backgroundColor: "blue", height: 20 }}/>

            </div>

        </>
            );
    }

            export default AsesoriaNutricional;