import { createSourceEventStream } from "graphql";
import { validateCaptcha } from "../utils/captcha";


export function ValidarReCaptcha(req, res) {
      try {
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