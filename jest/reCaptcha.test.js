import {validateCaptcha} from '../src/utils/captcha'
import axios from 'axios'

describe('reCaptcha Test', done => {
    
    test('Envío de token incorrecto', async () => {
        validateCaptcha("Esto es un token incorrecto")
        .then((response) => expect(response).toBe(false))
        done()
       
    })

})