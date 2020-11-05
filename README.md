# ¿Qué es create-app?
`create-app` provee una estructura estandarizada para construir aplicaciones de frontend totalmente basadas en lenguaje `JavaScript` de forma fácil y rápida ofreciendo una solución `out of the box` en donde el desarrollador solo tiene que pensar en los aspectos de negocio de su aplicación.

#### Tecnologías en las que se basa
`create-app` está pensado para construir aplicaciones `React` e implementa `Server Side Rendering (SSR)` por defecto, `Node` como tecnología de `Backend For Frontend (BFF)` y `Jest` como herramienta de testing.

#### Módulos más importantes
|Módulos principales|
|-------------------|
|[Node.js](https://github.com/nodejs/node)|
|[Express.js](https://github.com/expressjs/express)|
|[React.js](https://github.com/facebook/react)|
|[Jest.js](https://github.com/facebook/jest)|

#### Features
* Server-Side Rendering (con React)
* Client-Side Rendering (con React)
* Universal React Components
* ES6 Transpilation (para el cliente)
* Pre-processor: SASS
* Post-processor: autoprefixer
* Bundling and minifying JS & CSS (Webpack)
* Multiple Bundles & Code Splitting
* Performance
* Configurable
* Modular
* Seguro

#### Estructura general y directorios más importantes
```
├── index.js  (Entry point donde se inicializa el server)
│
├── api/ (API router y todo lo relacionado a la api)
│   ├── index.js (exporta una instancia de router de express)
│   └── demo.js
│
├── app/  (App router y todo lo relacionado a la app)
│   ├── client/ (opcional, si va a funcionar client-side)
│   │   ├── polyfills.js (client es6 polyfills)
│   │   └── demo.js (Hidratación del cliente, uno por cada page)
│   │ 
│   ├── server/
│   │   └── index.js (router principal, define las rutas a las diferentes pages)
│   │ 
│   ├── pages/ (Páginas que componen la aplicación)
│   │   └── demo/
│   │       ├── index.js (router de vista, define las diferentes rutas de la vista)
│   │       ├── controller.js (Se comunica con los servicios y renderiza la vista)
│   │       ├── view.js (contiene la vista a ser renderizada, componente principal)
│   │       └── styles.scss (todos los estilos de la vista)
│   │ 
│   ├── components/ (Componentes de react compartidos entre todas las pages)
│   │   └── Header/
│   │       ├── tests/ (Tests del componente)
│   │       │   └── header.spec.js
│   │       ├── index.js
│   │       ├── index.scss
│   │       └── README.md
│   │ 
│   ├── styles/ (Estilos globales)
│   │   ├── _common.scss
│   │   └── _variables.scss
│   │ 
│   ├── translations/ ([WIP] Pensado para futuras traducciones)
│   │ 
│   └── assets/ (Assets de la aplicación)
│       ├── fonts/
│       └── images/
│
├── services/  (Módulos compartidos entre api y app)
│   ├── transforms/ (opcional, acá se definen funciones transformadoras de respuestas)
│   └── demo.js (Clase que contiene las llamadas para obtener datos, se usa uno por API)
│
├── mocks/ ([WIP] mocks de los servicios para development)
│
├── config/ ([WIP] Configuraciones globales según entorno: prod, dev o test)
│   ├── production.js
│   ├── development.js
│   └── test.js
│
├── commands/
│
├── tests/ (Tests e2e y unitarios de cada página)
│
├── coverage/  ([gitignored] Carpeta dinámica de reportes de cobertura de tests)
├── build/  ([gitignored] Carpeta dinámica de build productivo para el cliente)
├── .babelrc
├── .editorconfig
├── .gitignore
├── README.md
├── webpack.config.js
└── package.json
```

# ¿Cómo se utiliza?
¡Es muy fácil! Sigue los pasos detallados a continuación:

1. Creamos un nuevo repositorio para nuestra app desde la página principal de [Fundasoft](https://github.com/fundasoft) en `GitHub`  
  ·
  ![Crear nuevo repositorio](https://user-images.githubusercontent.com/2653750/98186686-13502000-1eee-11eb-8454-80f5757f2d16.png)
  
2. Elegimos como template el de `Fundasoft/create-app` para nuestro nuevo repositorio  
  ·
  ![Elegir template](https://user-images.githubusercontent.com/2653750/98188506-e1d95380-1ef1-11eb-9b34-818c8d4eb53d.png)

3. Marcamos la opción para incluir todos los branches del template, ponemos como owner a `Fundasoft`, elegimos un nombre para nuestro repositorio, agregamos una descripción (opcional) y seleccionamos la opción para que sea público   
  ·
  ![Opciones](https://user-images.githubusercontent.com/2653750/98188872-98d5cf00-1ef2-11eb-9c7b-dfdad9cc6c9d.png)

4. Creamos el repositorio y ¡listo! ¡estamos para comenzar a codear!

# ¿Cómo correr la aplicación?
Es necesario tener instalado `Node.js v10` o superior y `npm v6` o superior, para saber como hacerlo pueden ir a la página del proyecto [https://nodejs.org/](https://nodejs.org/).

Cuando tengamos node y npm instalados nos paramos en la raíz del proyecto y ejecutamos los siguientes comandos en la `consola del sistema operativo`
```
npm install
```
Esto instalará todas las dependencias necesarias para que funcione el proyecto.

Cuando se terminen de instalar las dependencias ejecutamos el comando
```
npm run build
```
Esto va a buildear la app preparando los archivos necesarios para ejecutar la app. Para permanentemente estar escuchando los cambios que se hacen y buildear automáticamente sin tener que volver a lanzar el comando de buildeo podemos ejecutar lo siguiente
```
npm run watch
```

En otra consola ejecutamos el comando para iniciar el servidor de desarrollo
```
npm run start-dev
```
Si no dio ningún error y se terminaron de ejecutar los comandos en nuestro navegador abrimos la url [http://localhost:3000/demo](http://localhost:3000/demo). Veremos lo que se muestra en la imagen a continuación que es una app demo que hace llamadas a una api placeholder de ejemplo ([https://api.chucknorris.io](https://api.chucknorris.io)), si, nos devuelve chistes de Chuck Norris *- Él seguramente lo aprueba -* y tiene un botón para renovar los chistes, demostrando que la aplicación es Server Side y Client Side.

![App corriendo](https://user-images.githubusercontent.com/2653750/98190542-00414e00-1ef6-11eb-8b37-ceacc12b0d0d.png)

# ¿Cómo colaborar en el proyecto?
Si se te ocurre una funcionalidad que estaría buena agregar o un bug que encontraste por favor levantá un [issue](https://github.com/Fundasoft/create-app/issues) describiendo el caso con detalle.

Si se obtiene concenso entre los mantainers del proyecto de que es algo necesario para agregar/arreglar enviar un `PR` que apunte a `develop` con las modificaciones (acordate de linkear el issue en al `PR`) para su revisión.