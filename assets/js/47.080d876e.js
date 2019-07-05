(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{269:function(e,a,r){"use strict";r.r(a);var s=r(0),t=Object(s.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"content"},[r("div",{pre:!0},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v('Al usar cualquier herramienta en el "mundo real", te sientes más cómodo si entiendes como esa herramienta funciona. El desarrollo de aplicaciones no es diferente. Cuando entiendes cómo tus herramientas de desarrollo funcionan, te sientes más cómodo y seguro usándolas.')]),e._v(" "),r("p",[e._v('El objetivo de este documento es darte un buen resumen sobre cómo el framework Laravel funciona. Al conocer el framework mejor, todo lo demás se siente menos "mágico" y te sentirás más cómodo construyendo tus aplicaciones. Si no entiendes todos los términos de una sola vez, ¡no te desesperes! Sólo trata de obtener una comprensión básica de lo que está sucediendo y tus conocimientos crecerán a medida que exploras otras secciones de la documentación.')]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("El archivo "),r("code",[e._v("index.php")]),e._v(" carga la definición de autocarga generada por Composer y luego retorna una instancia de la aplicación de Laravel desde el script "),r("code",[e._v("bootstrap/app.php")]),e._v(". La primera acción tomada por Laravel es crear una instancia de la aplicación / "),r("router-link",{pre:!0,attrs:{to:"/container.html"}},[e._v("contenedor de servicios")]),e._v(".")],1),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("El kernel HTTP extiende de la clase "),r("code",[e._v("Illuminate\\Foundation\\Http\\Kernel")]),e._v(", que define un arreglo de "),r("code",[e._v("bootstrappers")]),e._v(" que se ejecutarán antes de que la solicitud sea ejecutada. Estos maquetadores configuran el manejo de errores, registros, "),r("router-link",{pre:!0,attrs:{to:"/configuration.html#environment-configuration"}},[e._v("detectan en el entorno de la aplicación")]),e._v(" y realizan otras tareas que necesitan ser ejecutadas antes de que la solicitud sea manejada.")],1),e._v(" "),r("p",[e._v("El kernel HTTP también define una lista de "),r("router-link",{pre:!0,attrs:{to:"/middleware.html"}},[e._v("middleware")]),e._v(" HTTP que todas las solicitudes deben pasar antes de ser manejadas por la aplicación. Estos middleware manejan la lectura y escritura de la "),r("router-link",{pre:!0,attrs:{to:"/session.html"}},[e._v("sesión HTTP")]),e._v(", determinando si la aplicación está en modo de mantenimiento, "),r("router-link",{pre:!0,attrs:{to:"/csrf.html"}},[e._v("verificando el token CSRF")]),e._v(" y más.")],1),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("Una de las acciones de maquetado más importantes del Kernel es cargar los "),r("router-link",{pre:!0,attrs:{to:"/providers.html"}},[e._v("proveedores de servicios")]),e._v(" de tu aplicación. Todos los proveedores de servicios de la aplicación son configurados en el arreglo "),r("code",[e._v("providers")]),e._v(" del archivo de configuración "),r("code",[e._v("config/app.php")]),e._v(". Primero, el método "),r("code",[e._v("register")]),e._v(" será llamado en todos los proveedores, luego, una vez que todos los proveedores sean registrados, el método "),r("code",[e._v("boot")]),e._v(" será llamado.")],1),e._v(" "),r("p",[e._v("Los proveedores de servicios son responsables de estructurar todos los distintos componentes del framework, como la base de datos, colas, validaciones y componentes de rutas. Dado que estructuran y configuran cada característica ofrecida por el framework, los proveedores de servicios son el aspecto más importante de todo el proceso de estructuración de Laravel.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),r("p",[e._v("Los proveedores de servicios son realmente la clave para estructurar una aplicación de Laravel. La instancia de la aplicación es creada, los proveedores de servicios son registrados y la solicitud es entregada a la aplicación ya estructurada. ¡Es realmente así de simple!")]),e._v(" "),e._m(16),e._v(" "),e._m(17)])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{pre:!0,attrs:{id:"ciclo-de-vida-de-la-solicitud"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#ciclo-de-vida-de-la-solicitud","aria-hidden":"true"}},[this._v("#")]),this._v(" Ciclo De Vida De La Solicitud")])},function(){var e=this.$createElement,a=this._self._c||e;return a("ul",[a("li",[a("a",{pre:!0,attrs:{href:"#introduction"}},[this._v("Introducción")])]),this._v(" "),a("li",[a("a",{pre:!0,attrs:{href:"#lifecycle-overview"}},[this._v("Resumen del ciclo de vida")])]),this._v(" "),a("li",[a("a",{pre:!0,attrs:{href:"#focus-on-service-providers"}},[this._v("Enfoque en los proveedores de servicios")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{pre:!0,attrs:{name:"introduction"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{pre:!0,attrs:{id:"introduccion"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion","aria-hidden":"true"}},[this._v("#")]),this._v(" Introducción")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{pre:!0,attrs:{name:"lifecycle-overview"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{pre:!0,attrs:{id:"resumen-del-ciclo-de-vida"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#resumen-del-ciclo-de-vida","aria-hidden":"true"}},[this._v("#")]),this._v(" Resumen del ciclo de vida")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{pre:!0,attrs:{id:"lo-primero"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#lo-primero","aria-hidden":"true"}},[this._v("#")]),this._v(" Lo primero")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("El punto de entrada para todas las solicitudes a una aplicación de Laravel es el archivo "),a("code",[this._v("public/index.php")]),this._v(". Todas las solicitudes son dirigidas a este archivo por la configuración de tu servidor web (Apache / Nginx). El archivo "),a("code",[this._v("index.php")]),this._v(" no contiene mucho código. En su lugar, es un punto de partida para cargar el resto del framework.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{pre:!0,attrs:{id:"kernel-de-http-consola"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#kernel-de-http-consola","aria-hidden":"true"}},[this._v("#")]),this._v(" Kernel de HTTP / Consola")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Luego, la solicitud entrante es enviada ya sea al kernel HTTP o al kernel de la consola, dependiendo del tipo de solicitud que está entrando en la aplicación. Estos dos kernels funcionan como la ubicación principal a través de la cual todas las solicitudes pasan. Por ahora, vamos a enfocarnos sólo en el kernel HTTP, que está ubicado en "),a("code",[this._v("app/Http/Kernel.php")]),this._v(".")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("La firma del método para el método "),a("code",[this._v("handle")]),this._v(" del kernel HTTP es bastante simple: recibe un "),a("code",[this._v("Request")]),this._v(" y retorna un "),a("code",[this._v("Response")]),this._v(". Piensa en el Kernel como una caja negra grande que representa toda tu aplicación. Aliméntala con solicitudes HTTP y retornará respuestas HTTP.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h4",{pre:!0,attrs:{id:"proveedores-de-servicios"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#proveedores-de-servicios","aria-hidden":"true"}},[this._v("#")]),this._v(" Proveedores de servicios")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h4",{pre:!0,attrs:{id:"despachar-la-solicitud"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#despachar-la-solicitud","aria-hidden":"true"}},[this._v("#")]),this._v(" Despachar la solicitud")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Una vez que la aplicación ha sido estructurada y todos los proveedores de servicios han sido registrados, la solicitud o "),a("code",[this._v("Request")]),this._v(" será manejada por el enrutador para su despacho. El enrutador enviará la solicitud a una ruta o controlador, así como ejecutará cualquier middleware específico de ruta.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{pre:!0,attrs:{name:"focus-on-service-providers"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{pre:!0,attrs:{id:"enfoque-en-los-proveedores-de-servicios"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#enfoque-en-los-proveedores-de-servicios","aria-hidden":"true"}},[this._v("#")]),this._v(" Enfoque en los proveedores de servicios")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Tener un firme conocimiento sobre cómo una aplicación de Laravel es construída y estructurada mediante proveedores de servicios es muy útil. Los proveedores de servicios por defecto de tu aplicación están almacenados en el directorio "),a("code",[this._v("app/Providers")]),this._v(".")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Por defecto, "),a("code",[this._v("AppServiceProvider")]),this._v(" está casi vacío. Este proveedor es un buen lugar para agregar tu propia estructura de componentes y enlaces al contenedor de servicios de tu aplicación. Para aplicaciones grandes, puedes desear crear múltiples proveedores de servicios, cada uno que estructure componentes de una manera más granular.")])}],!1,null,null,null);a.default=t.exports}}]);