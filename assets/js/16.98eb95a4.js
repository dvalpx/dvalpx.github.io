(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{239:function(e,a,t){"use strict";t.r(a);var n=t(0),s=Object(n.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("div",{pre:!0},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),t("p",[e._v("A menudo es útil tener diferentes valores de configuración basados en el entorno en el que se ejecuta la aplicación. Por ejemplo, es posible que desees utilizar un servidor de caché localmente diferente al servidor que usas en producción.")]),e._v(" "),t("p",[e._v("Para hacer esto sencillo, Laravel utiliza la librería de PHP "),t("a",{pre:!0,attrs:{href:"https://github.com/vlucas/phpdotenv",target:"_blank",rel:"noopener noreferrer"}},[e._v("DotEnv"),t("OutboundLink",{pre:!0})],1),e._v(" por Vance Lucas. En una nueva instalación de Laravel, el directorio raíz de tu aplicación contendrá un archivo "),t("code",[e._v(".env.example")]),e._v(". Si instalas Laravel por medio de Composer, este archivo será renombrado automáticamente a "),t("code",[e._v(".env")]),e._v(". De lo contrario, deberás renombrar el archivo manualmente.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9)]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),t("p",[e._v("Si necesitas definir una variable de entorno con un valor que contiene espacios, puedes hacerlo  encerrando el valor en comillas dobles.")]),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),t("p",[e._v("El entorno actual de la aplicación es determinado por medio de la variable "),t("code",[e._v("APP_ENV")]),e._v(" desde tu archivo "),t("code",[e._v(".env")]),e._v(". Puedes acceder a este valor por medio del método "),t("code",[e._v("environment")]),e._v(" del "),t("router-link",{attrs:{to:"/facades.html"}},[e._v("facade")]),e._v(" "),t("code",[e._v("App")]),e._v(":")],1),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._m(35),e._v(" "),e._m(36),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),e._m(46),e._m(47),e._v(" "),e._m(48),e._m(49),e._v(" "),e._m(50),e._m(51),e._v(" "),e._m(52),e._m(53),e._v(" "),e._m(54),e._v(" "),t("p",[e._v("Mientras tu aplicación esté en modo de mantenimiento, no se manejarán "),t("router-link",{attrs:{to:"/queues.html"}},[e._v("trabajos en cola")]),e._v(". Los trabajos continuarán siendo manejados de forma normal una vez que la aplicación esté fuera del modo de mantenimiento.")],1),e._v(" "),e._m(55),e._v(" "),t("p",[e._v("Como el modo de mantenimiento requiere que tu aplicación tenga varios segundos de tiempo de inactividad, considera alternativas como "),t("a",{attrs:{href:"https://envoyer.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Envoyer"),t("OutboundLink")],1),e._v(" para lograr hacer deploy de Laravel sin tiempo de inactividad.")])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{pre:!0,attrs:{id:"configuracion"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuración")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",[t("li",[t("a",{pre:!0,attrs:{href:"#introduction"}},[e._v("Introducción")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#environment-configuration"}},[e._v("Configuración del entorno")]),e._v(" "),t("ul",[t("li",[t("a",{pre:!0,attrs:{href:"#environment-variable-types"}},[e._v("Tipos de variables de entorno")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#retrieving-environment-configuration"}},[e._v("Recuperar la configuración del entorno")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#determining-the-current-environment"}},[e._v("Determinando el entorno actual")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#hiding-environment-variables-from-debug"}},[e._v("Ocultar variables de entorno a páginas de depuración")])])])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#accessing-configuration-values"}},[e._v("Acceder a valores de configuración")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#configuration-caching"}},[e._v("Almacenamiento en caché de la configuración")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#maintenance-mode"}},[e._v("Modo de mantenimiento")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{pre:!0,attrs:{name:"introduction"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{pre:!0,attrs:{id:"introduccion"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion","aria-hidden":"true"}},[this._v("#")]),this._v(" Introducción")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Todos los archivos de configuración para el framework Laravel están almacenados en el directorio "),a("code",[this._v("config")]),this._v(". Cada opción está documentada, así que no dudes en consultar los archivos y familiarizarte con las opciones disponibles para ti.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{pre:!0,attrs:{name:"environment-configuration"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{pre:!0,attrs:{id:"configuracion-del-entorno"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#configuracion-del-entorno","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuración del entorno")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Tu archivo "),a("code",[this._v(".env")]),this._v(" deberá omitirse en el sistema de control de versiones de tu aplicación, ya que cada desarrollador / servidor que usa tu aplicación puede requerir una configuración de entorno diferente. Además, esto sería un riesgo de seguridad en caso de que un intruso obtenga acceso al repositorio de control de versiones de tu aplicación.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("Si estás desarrollando con un equipo, es posible que desees continuar incluyendo el archivo "),t("code",[e._v(".env.example")]),e._v(" en tu aplicación. Al poner valores de ejemplo (placeholder) en el archivo de configuración "),t("code",[e._v(".env.example")]),e._v(", otros desarrolladores en tu equipo podrán ver claramente cuáles variables de entorno se necesitan para ejecutar tu aplicación. También puedes crear un archivo "),t("code",[e._v(".env.testing")]),e._v(". Este archivo sobrescribirá el archivo "),t("code",[e._v(".env")]),e._v(" al ejecutar pruebas con PHPUnit o al ejecutar comandos de Artisan con la opción "),t("code",[e._v("--env=testing")]),e._v(".")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{pre:!0,attrs:{class:"tip custom-block"}},[a("p",{pre:!0,attrs:{class:"custom-block-title"}},[this._v("TIP")]),this._v(" "),a("p",[this._v("Cualquier variable en tu archivo "),a("code",[this._v(".env")]),this._v(" puede ser anulada por variables de entorno externas tales como variables de entorno de nivel de servidor o de nivel de sistema.")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{attrs:{name:"environment-variable-types"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"tipos-de-variables-de-entorno"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tipos-de-variables-de-entorno","aria-hidden":"true"}},[this._v("#")]),this._v(" Tipos de variables de entorno")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Todas las variables en tus archivos "),a("code",[this._v(".env")]),this._v(" se traducen como cadenas, así que algunos valores reservados han sido creados para permitirte retornar un rango más amplio de tipos desde la función "),a("code",[this._v("env()")]),this._v(":")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[e._v("Valor en "),t("code",[e._v(".env")])]),e._v(" "),t("th",[e._v("Valor en "),t("code",[e._v("env()")])])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("true")]),e._v(" "),t("td",[e._v("(booleano) true")])]),e._v(" "),t("tr",[t("td",[e._v("(true)")]),e._v(" "),t("td",[e._v("(booleano) true")])]),e._v(" "),t("tr",[t("td",[e._v("false")]),e._v(" "),t("td",[e._v("(booleano) false")])]),e._v(" "),t("tr",[t("td",[e._v("(false)")]),e._v(" "),t("td",[e._v("(booleano) false")])]),e._v(" "),t("tr",[t("td",[e._v("empty")]),e._v(" "),t("td",[e._v("(cadena) ''")])]),e._v(" "),t("tr",[t("td",[e._v("(empty)")]),e._v(" "),t("td",[e._v("(cadena) ''")])]),e._v(" "),t("tr",[t("td",[e._v("null")]),e._v(" "),t("td",[e._v("(null) null")])]),e._v(" "),t("tr",[t("td",[e._v("(null)")]),e._v(" "),t("td",[e._v("(null) null")])])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[this._v("APP_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[this._v('"My Application"')]),this._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{attrs:{name:"retrieving-environment-configuration"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"recuperar-la-configuracion-del-entorno"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recuperar-la-configuracion-del-entorno","aria-hidden":"true"}},[this._v("#")]),this._v(" Recuperar la configuración del entorno")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Todas las variables listadas en este archivo van a ser cargadas en la variable super-global de PHP "),a("code",[this._v("$_ENV")]),this._v(" cuando tu aplicación reciba una solicitud. Sin embargo, puedes utilizar el helper "),a("code",[this._v("env")]),this._v(" para recuperar valores de estas variables en tus archivos de configuración. De hecho, si revisas los archivos de configuración de Laravel, podrás notar que varias de estas opciones ya están utilizando este helper:")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'debug'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'APP_DEBUG'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean constant"}},[e._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("El segundo valor pasado a la función "),a("code",[this._v("env")]),this._v(' es el "valor predeterminado". Este valor será utilizado si no se encuentra una variable de entorno existente para la clave proporcionada.')])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{attrs:{name:"determining-the-current-environment"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"determinando-el-entorno-actual"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#determinando-el-entorno-actual","aria-hidden":"true"}},[this._v("#")]),this._v(" Determinando el entorno actual")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$environment")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("También puedes pasar argumentos al método "),a("code",[this._v("environment")]),this._v(" para verificar si el entorno coincide con un valor determinado. El método va a retornar "),a("code",[this._v("true")]),this._v(" si el entorno coincide con cualquiera de los valores dados:")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'local'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The environment is local")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'local'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'staging'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The environment is either local OR staging...")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),a("p",[this._v("La detección del entorno actual de la aplicación puede ser anulada por una variable de entorno "),a("code",[this._v("APP_ENV")]),this._v(" a nivel del servidor. Esto puede ser útil cuando necesites compartir la misma aplicación para diferentes configuraciones de entorno, para que puedas configurar un host determinado para que coincida con un entorno determinado en las configuraciones de tu servidor.")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{attrs:{name:"hiding-environment-variables-from-debug"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"ocultar-variables-de-entorno-a-paginas-de-depuracion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ocultar-variables-de-entorno-a-paginas-de-depuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Ocultar variables de entorno a páginas de depuración")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("Cuando una excepción no es capturada y la variable de entorno "),t("code",[e._v("APP_DEBUG")]),e._v(" es igual a "),t("code",[e._v("true")]),e._v(", la página de depuración mostrará todas las variables de entorno y sus contenidos. En algunos casos vas a querer ocultar ciertas variables. Puedes hacer esto actualizando la opción "),t("code",[e._v("debug_blacklist")]),e._v(" en tu archivo de configuración "),t("code",[e._v("config/app.php")]),e._v(".")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Algunas variables están disponibles tanto en las variables de entorno y en los datos del servidor / petición. Por lo tanto, puede que necesites ocultarlos tanto para "),a("code",[this._v("$_ENV")]),this._v(" como "),a("code",[this._v("$_SERVER")]),this._v(":")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'debug_blacklist'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'_ENV'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'APP_KEY'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'DB_PASSWORD'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'_SERVER'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'APP_KEY'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'DB_PASSWORD'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'_POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{attrs:{name:"accessing-configuration-values"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"acceder-a-valores-de-configuracion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acceder-a-valores-de-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Acceder a valores de configuración")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Puedes acceder fácilmente a tus valores de configuración utilizando la funcion helper global "),a("code",[this._v("config")]),this._v(' desde cualquier lugar de tu aplicación. Se puede acceder a los valores de configuración usanto la sintaxis de "punto", que incluye el nombre del archivo y la opción a la que deseas acceder. También puedes especificar un valor predeterminado que se devolverá si la opción de configuración no existe:')])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$value")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'app.timezone'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Para establecer valores de configuración en tiempo de ejecución, pasa un arreglo al helper "),a("code",[this._v("config")]),this._v(":")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'app.timezone'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'America/Chicago'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{attrs:{name:"configuration-caching"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"almacenamiento-en-cache-de-la-configuracion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#almacenamiento-en-cache-de-la-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Almacenamiento en caché de la configuración")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Para dar a tu aplicación un aumento de velocidad, debes almacenar en caché todos tus archivos de configuración en un solo archivo usando el comando de Artisan "),a("code",[this._v("config:cache")]),this._v(". Esto combinará todas las opciónes de configuración para tu aplicación en un solo archivo que será cargado rápidamente por el framework.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Usualmente deberías ejecutar el comando "),a("code",[this._v("php artisan config:cache")]),this._v(" como parte de tu rutina de despliegue a producción. El comando no se debe ejecutar durante el desarrollo local ya que las opciones de configuración con frecuencia deberán cambiarse durante el desarrollo de tu aplicación.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"danger custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("Nota")]),e._v(" "),t("p",[e._v("Si ejecutas el comando "),t("code",[e._v("config:cache")]),e._v(" durante el proceso de despliegue, debes asegurarte de llamar solo a la función "),t("code",[e._v("env")]),e._v(" desde tus archivos de configuración. Una vez que la configuración se ha almacenado en caché, el archivo "),t("code",[e._v(".env")]),e._v(" no será cargado y todas las llamadas a la función "),t("code",[e._v("env")]),e._v(" retornarán "),t("code",[e._v("null")]),e._v(".")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{attrs:{name:"maintenance-mode"}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"modo-de-mantenimiento"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modo-de-mantenimiento","aria-hidden":"true"}},[this._v("#")]),this._v(" Modo de mantenimiento")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v('Cuando tu aplicación se encuentre en modo de mantenimiento, se mostrará una vista personalizada para todas las solicitudes en tu aplicación. Esto facilita la "desactivación" de tu aplicación mientras se está actualizando o cuando se realiza mantenimiento. Se incluye una verificación de modo de mantenimiento en la pila de middleware predeterminada para tu aplicación. Si la aplicación está en modo de mantenimiento, una excepción '),a("code",[this._v("MaintenanceModeException")]),this._v(" será lanzada con un código de estado 503.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Para habilitar el modo de mantenimiento, ejecuta el comando de Artisan "),a("code",[this._v("down")]),this._v(":")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[this._v("php artisan down\n")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("También puedes proporcionar las opciones "),t("code",[e._v("message")]),e._v(" y "),t("code",[e._v("retry")]),e._v(" al comando "),t("code",[e._v("down")]),e._v(". El valor de "),t("code",[e._v("message")]),e._v(" se puede usar para mostrar o registrar un mensaje personalizado, mientras que el valor de "),t("code",[e._v("retry")]),e._v(" se establecerá como el valor de cabecera HTTP "),t("code",[e._v("Retry-After")]),e._v(":")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[e._v("php artisan down "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("message"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"Upgrading Database"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("retry"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Incluso en modo de mantenimiento, se les puede permitir acceder a la aplicación a direcciones IP  o redes específicas usando la opción "),a("code",[this._v("allow")]),this._v(" del comando:")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[e._v("php artisan down "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("allow"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v(".1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("allow"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Para deshabilitar el modo de mantenimiento, usa el comando "),a("code",[this._v("up")]),this._v(":")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[this._v("php artisan up\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),a("p",[this._v("Puedes personalizar la plantilla predeterminada del modo de mantenimiento al definir tu propia plantilla en "),a("code",[this._v("resources/views/errors/503.blade.php")]),this._v(".")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h4",{attrs:{id:"modo-de-mantenimiento-y-colas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modo-de-mantenimiento-y-colas","aria-hidden":"true"}},[this._v("#")]),this._v(" Modo de mantenimiento y colas")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h4",{attrs:{id:"alternativas-al-modo-de-mantenimiento"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternativas-al-modo-de-mantenimiento","aria-hidden":"true"}},[this._v("#")]),this._v(" Alternativas al modo de mantenimiento")])}],!1,null,null,null);a.default=s.exports}}]);