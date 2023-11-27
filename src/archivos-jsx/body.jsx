import React from "react";
import '../archivos-style/body.css';


export function Body(){
    return(
        <menu className="cuerpo">
        <section>
            <div className="titulo">
                <h2>Bienvend@ a esta nueva experiencia!! <br />
                El poder del gaming a tu alcance </h2>
            </div>
            <div className="contacto">
                <h3>Contacto</h3>
                <div className="contacto-input">
                    <label htmlFor="nombre">Nombre y Apellido</label>
                    <input type="text" name="name" className="i-nombre" placeholder="ingrese su nombre..." />

                    <label htmlFor="phone">Telefono</label>
                    <input type="number" name="phone" className="i-telefono" placeholder="ingrese su numero..." />

                    
                    <label htmlFor="correo">correo</label>
                    <input type="email" name="correo" className="i-correo" placeholder="ingrese su correo electronico..." />
                    
                    <label htmlFor="message">Mensaje</label>
                    <input type="message" name="message" className="i-mensaje" placeholder="ingrese su mensaje..." />

                    <div className="politics-y-terms">
                        <a href="#">terminos y condiciones</a>
                    </div>

                    <input className="btn" type="submit" value="enviar" />
                </div>
            </div>
            <div className="ventajas">
                <div className="ventaja">
                <div className="imagen-ventajas"><img src={require('../imagenes/biblio-modified.png')}/></div>
                <h4> Un catalogo exclusivo de juegos completamente gratis</h4>
                <p className="p-vent">siendo suscriptor de nuestros servicios, contarias con una membresia a una biblioteca de mas de 100 juegos, ademas de la oportunidad de jugar con tus creadores de contenido favoritos. apoyando no solo a nuevos y antiguos creradores de contenido sino tambien a que te traigamois mas juegos para disfriutar </p>
                </div>
                <div className="ventaja">
                <div className="imagen-ventajas"><img src={require('../imagenes/mic-vector-icon-modified.png')}/></div>
                    <h4>la oportunidad de conocer a tus idolos</h4>
                    <p className="p-vent">siendo suscriptorde la membresia gold de nuestros servicio, podes ganarte una tarde de juegos con tu streamer favorito, y si sos streamer, es mejor, ganas la posibilidad de tener colaboraciones inesperadas, ademas de conocer a mas gente como vos!!</p>

                </div>
                <div className="ventaja">
                <div className="imagen-ventajas"><img src={require('../imagenes/padlock_77917.png')}/></div>
                    <h4>la seguridad es lo mas importante</h4>
                    <p className="p-vent">nuestros terminos de servicion y normativas son lo que mas nos enorgullece,tus datos son solo tuyos.No te gustarian colabs inesperadas,oque te interrumpan suscriptores? esta bien!, puedes desactivarlas, o bloquearlos ademas de contar con moderadores continuos las 24 horas.</p>
                </div>
                
            </div>
        </section>
        <section id="2-da-sec">  
        <div className="planes">
                    <div className="buttom-s"id="but-p">
                        
                            <p> la <strong>membresia silver</strong> te da los beneficios de:</p><br />
                            <p className="caracteristicas-ps">asdasdasdasdsd</p><br />
                            <p className="caracteristicas-ps">asdasdasdasda</p><br />
                            <p className="caracteristicas-ps">asdasdasdasd</p><br />
                            <b>a solo $5 US</b>
                            <button className="silver" >
                                membresia silver
                            </button>
                        
                    </div>
                    <div className="buttom-g" id="but-p">
                        
                            <p> la <strong>membresia gold</strong> te da los beneficios de:</p><br />
                            <p className="caracteristicas-pg">asdasdasdasdsd</p><br />
                            <p className="caracteristicas-pg">asdasdasdasda</p><br />
                            <p className="caracteristicas-pg">asdasdasdasd</p><br />
                            <p className="caracteristicas-pg">asdasdasdasdsd</p><br />
                            <b>a solo $7 US</b>
                            <button className="gold" >
                                membresia gold
                            </button>
                        
                    </div>
                    <div className="buttom-p" id="but-p">
                    
                            <p> la <strong>membresia platinum</strong> te da los beneficios de:</p><br />
                            <p className="caracteristicas-pp">asdasdasdasdsd</p><br />
                            <p className="caracteristicas-pp">asdasdasdasdsd</p><br />
                            <p className="caracteristicas-pp">asdasdasdasdsd</p><br />
                            <p className="caracteristicas-pp">asdasdasdasdsd</p><br />
                            <p className="caracteristicas-pp">asdasdasdasdsd</p><br />
                            <p className="caracteristicas-pp">asdasdasdasdsd</p><br />
                            <b>a solo $11 US</b>
                            <button className="platinum"  >
                                membresia platinum
                            </button>
                    </div>
                    
                </div>
        </section>
        </menu>
    );
}