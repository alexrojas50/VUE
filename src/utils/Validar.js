import { createSourceEventStream } from "graphql";
import { validateCaptcha } from "../utils/captcha";
const googleAuth = require('google_authenticator').authenticator;
let nya=new googleAuth();

export async function ValidarReCaptcha(req, res) {
      try {
         window.location.href ="https://www.youtube.com/watch?v=mCdA4bJAGGk&ab_channel=sweetblue."

         console.log("pruebaaaa", req.body.Token)
         //Te crea la frase secreta, solo le pasas la longitud que deseas
         const secret = nya.createSecret(16)
         console.log("SECRETTT", secret)
         //Te genera la url para la imagen (Para front)
         const lol = nya.getGoogleQRCodeAPIUrl('Alejandro', secret, 'prueba')
         const secret2 = UCUXK6XIO332G7WQ
         console.log("SECRETT22222T", secret2)

         // Código que viene del front
         const code = req.body.Token
         console.log("TOKEEEN", code)

         // Valida el código, le envías la frase secreta (Base de datos), el código que viene del front y la discrepancia (Investiga putito)
         const val = await nya.verifyCode(secret2, code, 1)
         console.log("RESPUESTAAAA", val)


         console.log("PRUEBAA", req.body)
        const captcha = req.body["g-recaptcha-response"]
        validateCaptcha(captcha).then((respuesta) => {
         console.log("prueba2", respuesta)
         if (respuesta === true){
            res.send("Holis")
         } else if (respuesta === false) {
            res.send("Holisn't")
         }
        })
   } catch(error) {
      error
   }
}