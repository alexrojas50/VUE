import express from "express";
import { ValidateCaptcha } from "../utils/captcha";
import { ValidarReCaptcha } from "../utils/Validar";
const router = express.Router()

router.post("/pruebas", ValidarReCaptcha)

module.exports = router