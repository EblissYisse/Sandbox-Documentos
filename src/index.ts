import SwaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./swagger.conf"

//Creamos un objeto de la clase app
import App from "./Router"

const program= new App()
program.start()