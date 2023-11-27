import React from "react";
import '../archivos-style/body.css';


export function Body(){
    return( 
        <menu className="cuerpo">
        <section>
            <div className="titulo">
                <h2>Bienvenid@ a esta nueva experiencia!! <br />
                El poder del gaming a tu alcance </h2>
            </div>
            <div className="contacto">
                <h3>Contacto</h3>
                <div className="contacto-input">
                    <label htmlFor="nombre">Nombre y Apellido</label>
                    <input type="text" name="name" className="i-nombre" placeholder="ingrese su nombre..." />

                    <label htmlFor="phone">Teléfono</label>
                    <input type="number" name="phone" className="i-telefono" placeholder="ingrese su numero..." />

                    
                    <label htmlFor="correo">Correo</label>
                    <input type="email" name="correo" className="i-correo" placeholder="ingrese su correo electronico..." />
                    
                    <label htmlFor="message">Mensaje</label>
                    <input type="message" name="message" className="i-mensaje" placeholder="ingrese su mensaje..." />

                    <div className="politics-y-terms">
                        <a href="#">Términos y Condiciones</a>
                    </div>

                    <input className="btn" type="submit" value="enviar" />
                </div>
            </div>
            <div className="ventajas">
                <div className="ventaja">
                <div className="imagen-ventajas"><img src={require('../imagenes/biblio-modified.png')}/></div>
                <h4> Un catálogo exclusivo de juegos completamente gratis</h4>
                <p className="p-vent">Siendo suscriptor de nuestros servicios, contarás con una membresía a una biblioteca de más de 100 juegos, además de la oportunidad de jugar con tus creadores de contenido favoritos. Apoyando no solo a nuevos y antiguos creadores de contenido sino también a que te traigamos más juegos para disfrutar </p>
                </div>
                <div className="ventaja">
                <div className="imagen-ventajas"><img src={require('../imagenes/mic-vector-icon-modified.png')}/></div>
                    <h4>La oportunidad de conocer a tus ídolos</h4>
                    <p className="p-vent">¡Siendo suscriptor de la membresía gold de nuestros servicios, podés ganarte una tarde de juegos con tu streamer favorito, y si sos streamer, es mejor, ganas la posibilidad de tener colaboraciones inesperadas, además de conocer a más gente como vos!!</p>

                </div>
                <div className="ventaja">
                <div className="imagen-ventajas"><img src={require('../imagenes/padlock_77917.png')}/></div>
                    <h4>La seguridad es lo más importante</h4>
                    <p className="p-vent">Nuestros términos de servicio y normativas son lo que más nos enorgullece, tus datos son solo tuyos. ¿No te gustarían colabs inesperadas, o  te molesta que te interrumpan suscriptores? ¡Está bien!, puedes desactivarlas, o bloquearlos, además de contar con moderadores continuos las 24 horas.</p>
                </div>
                
            </div>
        </section>
        <section id="2-da-sec">  
        <div className="planes">
                    <div className="buttom-s"id="but-p">
                        
                            <p> la <strong>membresia silver</strong> te da los beneficios de:</p><br />
                            <p className="caracteristicas-ps">Beneficio1</p><br />
                            <p className="caracteristicas-ps">Beneficio2</p><br />
                            <p className="caracteristicas-ps">Beneficio3</p><br />
                            <b>A solo $5 USD !!</b>
                            <button className="silver" >
                            Membresía silver
                            </button>
                        
                    </div>
                    <div className="buttom-g" id="but-p">
                        
                            <p> la <strong>membresia gold</strong> te da los beneficios de:</p><br />
                            <p className="caracteristicas-pg">Beneficio 1</p><br />
                            <p className="caracteristicas-pg">Beneficio 2</p><br />
                            <p className="caracteristicas-pg">Beneficio 3</p><br />
                            <p className="caracteristicas-pg">Beneficio 4</p><br />
                            <b>A solo $7 USD !!</b>
                            <button className="gold" >
                            Membresía gold
                            </button>
                        
                    </div>
                    <div className="buttom-p" id="but-p">
                    
                            <p> la <strong>membresia platinum</strong> te da los beneficios de:</p><br />
                            <p className="caracteristicas-pp">Beneficio 1</p><br />
                            <p className="caracteristicas-pp">Beneficio 2</p><br />
                            <p className="caracteristicas-pp">Beneficio 3</p><br />
                            <p className="caracteristicas-pp">Beneficio 4</p><br />
                            <p className="caracteristicas-pp">Beneficio 5</p><br />
                            <p className="caracteristicas-pp">Beneficio 6</p><br />
                            <b>A solo $11 USD !!</b>
                            <button className="platinum"  >
                            Membresía platinum
                            </button>
                    </div>
                    
                </div>
        </section>
        </menu>
    );
}