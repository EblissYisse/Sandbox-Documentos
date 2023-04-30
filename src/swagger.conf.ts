//importar la biblioteca de trabajo

import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions={

    //1 llave: variables de configuracion
    definition:{
        openapi:"3.0.0",
        info:{
            title:"API de la AteneaIPS",
            version:"1.0.0",
            description:"En esta API tenemos la funcionalidad que soprta la operacion de la IPS ateneaIPS"  
        },
        //llave que va a decir donde se encuentra los servidores donde se va a documentar los servidores de la API
        servers:[
            {
                url:"http:localhost:3000",
                description:"Servidor local de documentacion de la API"
            }
        ]

    },

    //1 llave, es un arreglo: desde donde se va a tomar la informacion para documentar las apis

    apis:["src/index.ts", "./swagger/*.swagger.ts"]

}

export const swaggerSpec=swaggerJSDoc(swaggerOptions)