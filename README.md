# Nexup Frontend Challenge

En este repositorio, se encuentra la prueba técnica para el puesto de Frontend Developer en Nexup.
Este challenge está diseñado para evaluar tus habilidades en React y TypeScript. Consiste en construir una aplicación que muestre una lista de productos, permita filtrarlos por categoría y transforme los elementos de la lista antes de mostrarlos.

# Stack Usado
-  React + Typescript
-  Tailwindcss para los estilos
-  Headless UI para la interaccion de componentes con estilos de Tailwindcss (en conjunto con clsx)
-  heroicons/react para iconos
-  Redux / Redux Toolkit para controlar el estado de los productos y permitiendo la escalabilidad de la app (se escogió esta opción mayormente para demostrar su uso ya que para una app chica como esta no es necesario).
-  zod para la creación de schemas y validacion de respuestas de API (debido a que la app ya traía algunos interface ya creado, no se explotó en su totalidad el uso de esta libreria para evitar cambios radicales).
-  tanstack/react-table para mostrar los productos en una tabla y controlar su interaccion (me pareció la opcion correcta que fuese una tabla para la renderizacion de este tipo de situaciones).

# Que se hizo?

1. Una vez el repositorio clonado y el remote cambiado, se subió el primer commit
2. Primero se instalaron todas las dependencias del proyecto.
3. Luego se inició con la interaccion con el componente CategoryFilter y a su vez se presentarón algunos inconvenientes con la libreria prettier que traía el proyecto. Se decidió agregar algunas opciones de config para continuar con el desarrollo sin interrupciones. Las medidas tomadas fueron la creación de un archivo .env con la variable DISABLE_ESLINT_PLUGIN para desacrivar el plugin (según lo investigado) y cambiar la opción endOfLine a auto de la config de prettier para evitar las señalizaciones de errores en cuanto a saltos de linea.
4.  Continuando con el desarrollo, se procedió a instalar tailwindcss y headless UI para empezar  estilizar el componente de seleccion de categoria.
5. En el componente de seleccion de categoria se agrega un useState para controlar el valor del select de categoria y para asi este despues pasarlo a la tabla.
6. Se agrega la libreria redux toolkit.
7. Se configura el store en un archivo store/store.ts
8. Se crea el slice de producto donde se controlara la logica que obtendra los productos de la api simulando una llamada asincrona.
9. Se agregan 10 productos (con valores random basados en la interfaz de categoria) en un archivo que será llamado por el componente getProductList creado ya por defecto. Estos valores vendrian a suponer nuestra base de datos.
10. Luego creamos el servicio que hará el request a nuestra api con los datos traidos del json
11. Instalamos la libreria zod y creamos un archivo schemas para la creacion de los schemas y asi validar la respuesta de nuestra api.
12. Instalamos la libreria react-table y configuramos la tabla de acuerdo a la documentacion oficial en un componente aparte llamado ProductTable el cual llamaremos desde el componente ProductList.
13. Se decide cambiar el useState del componente de categoria para colocar un useState en el componente padre (que en este caso es ProductManage) que luego se enviará tanto al ProductList (que luego lo envia al ProductTable) como al CategoryFilter. De esta forma podremos realizar el filtro de la manera en que react-table lo encuentra mas eficiente.
14. Agregamos una funcion formatCurrency en moneda de Pesos Argentinos para filtrar los precios en la tabla a travez de su configuracion.
15. Despues de que el filtro por categoria funcione correctamente, procedemos a la creacion del filtro por texto, donde se usará como id de la columna a filtrar el "nombre" (propiedad name).
