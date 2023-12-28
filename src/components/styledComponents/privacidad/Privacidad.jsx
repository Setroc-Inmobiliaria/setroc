import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Privacidad = ({ handleClose, open }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>AVISO DE PRIVACIDAD</DialogTitle>
      <DialogContent>
        {/* <DialogContentText id="alert-dialog-slide-description"> */}
        <strong>SETROC GRUPO KONSTRUCTOR S.A de C.V</strong> con domicilio en
        Calz. Gral. Mariano Escobedo 476-piso 12, Chapultepec, Anzures, Miguel
        Hidalgo, 11590 Ciudad de México, CDMX.
        <br />
        <br />
        <strong>¿Qué datos personales utilizaremos para estos fines?</strong>
        <br />
        <br />
        <span>
          Para llevar a cabo las finalidades descritas en el presente aviso de
          privacidad, utilizaremos los siguientes datos personales:{" "}
        </span>
        <br />
        <br />
        <ul className="list-item">
          <li>Nombre</li>
          <li>Estado civil</li>
          <li>Teléfono celular</li>
          <li>Correo electrónico</li>
          <li>Edad</li>
        </ul>
        <br />
        <strong>¿Para que fines utilizaremos sus datos personales?</strong>
        <br />
        <br />
        <span>
          Los datos personales que recabamos de usted, los utilizaremos para las
          siguientes finalidades que son necesarias para el servicio que
          solicita:
        </span>
        <br />
        <br />
        <ol>
          <li>
            1. Verificar y confirmar su identidad y situación patrimonial.
          </li>
          <li>
            2. Mandar información sobre la venta de inmuebles (terrenos y
            casas).
          </li>
          <li>3. Realizar cotizaciones sobre su proyecto arquitectónico</li>
          <li>4. Enviar ofertas sobre los inmuebles.</li>
          <li>5. inmuebles disponibles.</li>
        </ol>
        <br />
        <span>
          De manera adicional, utilizaremos su información personal para las
          siguientes finalidades que no son necesarias para el servicio
          solicitado pero que nos permiten brindarle una mejor atención.{" "}
        </span>{" "}
        <br />
        <br />
        <ol>
          <li>1. Encuesta de calidad en el servicio.</li>
          <li>
            2. Encuesta sobre los gustos y necesidades que usted tiene al
            momento de adquirir un inmueble.
          </li>
          <li>3. Estadística de las prospecciones llevadas a cabo.</li>
        </ol>
        <br />
        <strong>
          Usted puede revocar o limitar el uso de sus datos personales.
        </strong>
        <br />
        <br />
        <span>
          En caso de que no desee que sus datos personales sean tratados para
          estos fines adicionales, usted puede presentar un correo electrónico a
          la dirección <strong>setroc-central@hotmail.com</strong> manifestando
          lo anterior.
        </span>
        <br />
        <br />
        <span>
          La negativa para el uso de sus datos personales para estas finalidades
          no será un motivo para que le neguemos los servicios y productos que
          le ofrecemos. Para llevar a cabo las finalidades descritas en el
          presente aviso de privacidad, utilizaremos los siguientes datos
          personales: nombre completo, edad, teléfono y correo electrónica.
        </span><br/><br/>
        <strong>¿Con quién compartimos sus datos?</strong><br/><br/>
        <span>Le informamos que sus datos personales no son compartidos ni dentro ni fuera del 
país. Nosotros SETROC GRUPO KONSTRUCTOR es el único que tiene acceso a sus 
datos personales, que también se puede hacer alusión con el nombre comercial 
SETROC INMBILIARIO.</span><br/><br/>

<strong>Derechos ARCO para el usuario.</strong><br/><br/>
<span>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los 
utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho 
solicitar la corrección de su información personal en caso de que esté desactualizada, 
sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o 
bases de datos cuando considere que la misma no está siendo utilizada conforme a los 
principios, deberes y obligaciones previstas en la normativa (Cancelación); así como 
oponerse al uso de sus datos personales para fines específicos (Oposición). Estos 
derechos se conocen como derechos ARCO.<br/><br/>

Para el ejercicio de cualquiera de los derechos ARCO, para conocer el procedimiento y 
requisitos para el ejercicio de los derechos ARCO, usted podrá llamar al siguiente 
número telefónico 5552039848 donde le haremos llegar una solicitud de cancelación a
su correo electrónico o número telefónico para compartir sus datos personales con 
nosotros, atenderemos cualquier duda que pudiera tener al respecto al tratamiento de 
su información. <br/><br/>

Para esto acreditaremos su identidad con alguna identificación oficial (INE, 
PASAPORTE, LICENCIA DE CONDUCIR, CEDULA PROFECIONAL) o también lo 
puede hacer a través de un apoderado legal, el cual debe presentar el poder legal que 
lo acredite con la facultad de realizar el trámite correspondiente, copia identificación 
oficial del titular, y original y copia de su identificación. Usted puede revocar el 
consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos 
personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos 
podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible 
que por alguna obligación legal requiramos seguir tratando sus datos personales. 
Asimismo, usted deberá considerar que, para ciertos fines, la revocación de su 
consentimiento implicará que no le podamos seguir prestando el servicio que nos 
solicitó, o la conclusión de su relación con nosotros.</span><br/><br/>

<strong>¿Cómo puedo limitar mis datos?</strong><br/><br/>
<span>Con objeto de que usted pueda limitar el uso y divulgación de su información personal, 
le ofrecemos los siguientes medios:<br/><br/>

Su inscripción en el Registro Público para Evitar Publicidad, que está a cargo de la 
Procuraduría Federal del Consumidor, con la finalidad de que sus datos personales no 
sean utilizados para recibir publicidad o promociones de empresas de bienes o servicios. 
Para mayor información sobre este registro, usted puede consultar el portal de Internet 
de la PROFECO, o bien ponerse en contacto directo con ésta.
<br/><br/>

A fin de que sus datos personales no sean tratados para fines mercadotécnicos, 
publicitarios o de prospección comercial por nuestra parte. Para mayor información 
llamar al número telefónico 5552039848 o bien enviar un correo electrónico a la 
siguiente dirección <strong>setroc-central@hotmail.com</strong><br/><br/>

El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones 
derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los 
productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios 
en nuestro modelo de negocio, o por otras causas</span><br/><br/>

<strong>¿Dónde puedo visualizar si es que hubiera algún cambio?</strong><br/><br/>
<span>Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el 
presente aviso de privacidad, a través de correo electrónico donde adjuntaremos el 
nuevo aviso de privacidad de sus datos personales o a su número telefónico por lo que 
si en algún momento usted cambia alguno de ellos es importante que nos haga la 
actualización correspondiente para que lo podamos mantener informado sobre dichas
modificaciones. <br/><br/>
Si usted considera que su derecho a la protección de sus datos personales ha sido 
lesionado por alguna conducta u omisión de nuestra parte, o presume alguna violación 
a las disposiciones previstas en la Ley Federal de Protección de Datos Personales en 
Posesión de los Particulares, su Reglamento y demás ordenamientos aplicables, podrá 
interponer su inconformidad o denuncia ante el Instituto Nacional de Transparencia, 
Acceso a la Información y Protección de Datos Personales (INAI). Para mayor 
información, le sugerimos visitar su página oficial de Internet www.inai.org.mx.<br/><br/>

Al llenar el formulario usted expresa su respectivo consentimiento para que sus datos 
personales sean tratados conforme a lo señalado en el presento aviso de privacidad.</span>
        {/* </DialogContentText> */}
      </DialogContent>
    </Dialog>
  );
};
