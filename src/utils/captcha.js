export function validateCaptcha(captchaToken) {

  let promise = new Promise(async (resolve, reject) => {
     

     if (!captchaToken)  reject("Invalid Token")
    
     /**
      * Clave secreta para conectar con Google
      */
     const secretKey = "6Ld6ZD8hAAAAAKD8wn0lzJZGBMrAUb1Xuun0e6dr"
 
     /**
      * Url para hacer Fetch con Google, incluye la llave secreta y el CaptchaToken
      */
     const urlReCaptcha = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
 
     /**
      * Retorna un JSON con una propiedad "success" (Boolean)
      * Indica si el token es válido o no
      * 
      * Si la llave secreta es incorrecta, responderá con el siguiente JSON = { success: false, 'error-codes': [ 'invalid-input-secret' ] }
      */
      await process.nextTick(() => {});
      return fetch(urlReCaptcha)
      .then((respuesta) => respuesta.json())
      .then((token) => {
        if(token['error-codes'] && token['error-codes'][0] != token['error-codes'].find(element => element == 'invalid-input-response' )) reject("Error al validar el captcha -----"+ token['error-codes'][0] )
        resolve(token.success? true: false)
      })
      .catch((error) => {
        console.error("Error ----" ,error)
      })
  }).catch((error) => console.error("Error -----", error))
      
      return promise
    }