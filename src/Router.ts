import express,{Application, Request, Response} from 'express'


class App{

    //Crear unos atributos
    public app:any
    private server:any

    constructor(){
        //crear un objeto de la biblioteca express
        this.app=express()
        //decirle a ese objeto que use caracteristicas de json
        this.app.use(express.json())
        //utilice una funcion donde se va a definir la ruta
        this.routes()
    }

    private routes():void{
        this.app.get(
            "/",
            (req:Request, res:Response)=>{
                res.send("Bienvenido a tyescript")
            }
        )
    }
    //Abrir el servidor utilizando express desde una clase de ts

    public start():void{
        //la funcion listen abre un puerto en el servidor para empezar a escuchar
       this.server=this.app.listen(
            3000,
            ()=>{console.log("El servidor esta escuchando en el puerto 3000")}
            )
    }

    //Cerrar el servidor utilizando express desde una clase de ts
    public close():void{
        this.server.close()
    }

} 

//exportamos como modulo la clase que acabamos de crear (app)

export default App

