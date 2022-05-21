# turtleTask
<p align='left'>
    <img src='https://media-exp1.licdn.com/dms/image/C511BAQEmaxJnH-ZtAA/company-background_10000/0/1556527668231?e=1653768000&v=beta&t=l1YvlbN_dN9yX5BmbuiqHBf7ZBeYmk4P_FpFmoaOAik' </img>
</p>

# Challenge Fullstack - Turtle Venture

## Objectives
Meet the following points:
- 01: LightSwitch
- HTML / CSS / Javascript / DomElements
### Your task would be creating a web page containing a bulb. If I click on the bulb it should be
switched on or off.
<p align="left">
  <img height="150"  src="./lightBulbOff.png" />
</p>
<p align="left">
  <img height="150"  src="./lightBulbOn.png" />
</p>



API desarrollada en node y express.
Datos persistidos en postgreSQL. Sequelize ORM.
Cliente desarrollado en React JS y redux como state managment. 



La aplicación cuenta con autenticación de usuarios y verificación JWT.  

## Home
<p align="left">
  <img height="150"  src="./tablet_home.png" />
</p>
Esta pantalla muesta las ultimas 10 operaciones cargadas por el usuario, junto con el balance TOTAL (incluyendo las demas operaciones, llegado el caso en que sean mas de 10) y un gráfico que muestra las porciones de ingresos y egresos totales de dinero.

## Apartado de Operaciones
<p align="left">
  <img height="150"  src="./tablet_ops.png" />
</p>
Esta pantalla muesta la totalidad de las operaciones. Podemos agregar nuevas, editar y actualizar en la DB las que ya están cargadas, así como eliminarlas. No se puede editar el tipo de operación, ingreso o egreso (tal como pide la consigna).

## Registro y Login 
<p align="left">
  <img height="150"  src="./mobile_register.png" />
</p>
El visitante que desee utilizar Alkemy Wallet deberá registrarse mediante Email y Password. El backend le devolvera un JWT que será utilizado para verificar la identidad del usuario en cada petición.

## Diseño responsive con Next UI. 
<p align="left">
  <img height="150"  src="./tablet_delete.png" />
</p>

Deploy: Heroku y Vercel.

Link:
<a href="https://alkemy-fullstack.vercel.app/">https://alkemy-fullstack.vercel.app/</a>


Para correrlo localmente:
- clonar el repositorio
- instalar las dependencias (npm install).
- Crear base de datos postgreSQL y declarar variables de entorno: DB_USER, DB_PASSWORD, DB_HOST, DB_NAME.  
- Desde la carpeta api/, ejecutar npm start para iniciar el servidor. 
- Desde la carpeta client/, ejecutar npm start para darle inicio al browser. 

