(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{356:function(e,a,t){"use strict";t.r(a);var s=t(38),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{pre:!0},[t("h1",{pre:!0,attrs:{id:"proteccion-csrf"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#proteccion-csrf","aria-hidden":"true"}},[e._v("#")]),e._v(" Protección CSRF")]),e._v(" "),t("ul",[t("li",[t("a",{pre:!0,attrs:{href:"#csrf-introduction"}},[e._v("Introducción")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#csrf-excluding-uris"}},[e._v("Excluyendo URIs")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#csrf-x-csrf-token"}},[e._v("X-CSRF-Token")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#csrf-x-xsrf-token"}},[e._v("X-XSRF-Token")])])]),e._v(" "),t("p",[t("a",{pre:!0,attrs:{name:"csrf-introduction"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"introduccion"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion","aria-hidden":"true"}},[e._v("#")]),e._v(" Introducción")]),e._v(" "),t("p",[e._v("Laravel hace que sea fácil proteger tu aplicación de ataques de tipo "),t("a",{pre:!0,attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery",target:"_blank",rel:"noopener noreferrer"}},[e._v("cross-site request forgery"),t("OutboundLink",{pre:!0})],1),e._v(" (CSRF). Los ataques de tipo CSRF son un tipo de explotación de vulnerabilidad malicioso por el cual comandos no autorizados son ejecutados en nombre de un usuario autenticado.")]),e._v(" "),t("p",[e._v('Laravel genera automáticamente un "token" CSRF para cada sesión de usuario activa manejada por la aplicación. Este token es usado para verificar que el usuario autenticado es quien en realidad está haciendo la petición a la aplicación.')]),e._v(" "),t("p",[e._v("En cualquier momento que definas un formulario HTML en tu aplicación, debes incluir un campo de token CSRF en el formulario con el propósito de que el middleware para protección CSRF pueda validar la solicitud. Puedes usar la directiva de Blade "),t("code",[e._v("@csrf")]),e._v(" para generar el campo de token:")]),e._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("form method"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"POST"')]),e._v(" action"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"/profile"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    @csrf\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("form"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("El "),t("router-link",{pre:!0,attrs:{to:"/middleware.html"}},[e._v("middleware")]),e._v(" "),t("code",[e._v("VerifyCsrfToken")]),e._v(", el cual es incluido en el grupo de middleware "),t("code",[e._v("web")]),e._v(", verificará automáticamente que el token en el campo de la solicitud coincida con el almacenado en la sesión.")],1),e._v(" "),t("h4",{pre:!0,attrs:{id:"tokens-csrf-javascript"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#tokens-csrf-javascript","aria-hidden":"true"}},[e._v("#")]),e._v(" Tokens CSRF & JavaScript")]),e._v(" "),t("p",[e._v("Cuando se crean aplicaciones controladas por JavaScript, es conveniente hacer que tu biblioteca HTTP de JavaScript agregue el token CSRF a cada petición saliente. Por defecto, el archivo "),t("code",[e._v("resources/js/bootstrap.js")]),e._v(" registra el valor de la meta etiqueta "),t("code",[e._v("csrf-token")]),e._v(" con la biblioteca HTTP Axios. Si no estás usando esta biblioteca, necesitarás configurar este comportamiento de forma manual para tu aplicación.")]),e._v(" "),t("p",[t("a",{pre:!0,attrs:{name:"csrf-excluding-uris"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"excluyendo-las-uris-de-la-proteccion-csrf"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#excluyendo-las-uris-de-la-proteccion-csrf","aria-hidden":"true"}},[e._v("#")]),e._v(" Excluyendo las URIs de la protección CSRF")]),e._v(" "),t("p",[e._v("Algunas veces puedes desear excluir un conjunto de URIs de la protección CSRF. Por ejemplo, si estás usando "),t("a",{pre:!0,attrs:{href:"https://stripe.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stripe"),t("OutboundLink",{pre:!0})],1),e._v(" para procesar pagos y estás utilizando su sistema webhook, necesitarás excluir tu ruta de manejador webhook de Stripe de la protección CSRF ya que Stripe no sabrá que token CSRF enviar a sus rutas.")]),e._v(" "),t("p",[e._v("Típicamente, deberías colocar este tipo de rutas afuera del grupo de middleware "),t("code",[e._v("web")]),e._v(" que el "),t("code",[e._v("RouteServiceProvider")]),e._v(" aplica a todas las rutas en el archivo "),t("code",[e._v("routes/web.php")]),e._v(". Sin embargo, también puedes excluir las rutas al añadir sus URIs a la propiedad "),t("code",[e._v("except")]),e._v(" del middleware "),t("code",[e._v("VerifyCsrfToken")]),e._v(":")]),e._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Middleware")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Foundation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Middleware"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("VerifyCsrfToken")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" Middleware"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("VerifyCsrfToken")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Middleware")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n    * The URIs that should be excluded from CSRF verification.\n    *\n    * @var array\n    */")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("protected")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$except")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'stripe/*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'http://example.com/foo/bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'http://example.com/foo/*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),t("div",{pre:!0,attrs:{class:"tip custom-block"}},[t("p",[e._v("El middleware CSRF está deshabilitado automáticamente al "),t("router-link",{pre:!0,attrs:{to:"/testing.html"}},[e._v("ejecutar pruebas")]),e._v(".")],1)])]),t("p",[t("a",{attrs:{name:"csrf-x-csrf-token"}})]),e._v(" "),t("h2",{attrs:{id:"x-csrf-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x-csrf-token","aria-hidden":"true"}},[e._v("#")]),e._v(" X-CSRF-TOKEN")]),e._v(" "),t("p",[e._v("Además de comprobar el token CSRF como parámetro POST, el middleware "),t("code",[e._v("VerifyCsrfToken")]),e._v(" también comprobará el encabezado de solicitud "),t("code",[e._v("X-CSRF-TOKEN")]),e._v(". Podrías, por ejemplo, almacenar el token en una etiqueta "),t("code",[e._v("meta")]),e._v(" de HTML:")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("meta name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"csrf-token"')]),e._v(" content"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"{{ csrf_token() }}"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Entonces, una vez que has creado la etiqueta "),t("code",[e._v("meta")]),e._v(", puedes instruir una biblioteca como jQuery para añadir automáticamente el token a todos los encabezados de las peticiones. Esto proporciona protección CSRF fácil y conveniente para tus aplicaciones basadas en AJAX.")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[e._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ajaxSetup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'X-CSRF-TOKEN'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'meta[name=\"csrf-token\"]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("attr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'content'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("div",{staticClass:"tip custom-block"},[t("p",[e._v("Por defecto, el archivo "),t("code",[e._v("resources/js/bootstrap.js")]),e._v(" registra el valor de la etiqueta meta "),t("code",[e._v("csrf-token")]),e._v(" con la biblioteca HTTP Axios. Si no estás usando esta biblioteca, necesitarás configurar este comportamiento de forma manual para tu aplicación.")])]),e._v(" "),t("p",[t("a",{attrs:{name:"csrf-x-xsrf-token"}})]),e._v(" "),t("h2",{attrs:{id:"x-xsrf-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x-xsrf-token","aria-hidden":"true"}},[e._v("#")]),e._v(" X-XSRF-TOKEN")]),e._v(" "),t("p",[e._v("Laravel almacena el token CSRF actual en una cookie "),t("code",[e._v("XSRF-TOKEN")]),e._v(" que es incluida con cada respuesta generada por el framework. Puedes usar el valor del cookie para establecer el encabezado de la solicitud "),t("code",[e._v("X-XSRF-TOKEN")]),e._v(".")]),e._v(" "),t("p",[e._v("Esta cookie primeramente es enviada por conveniencia ya que algunos frameworks JavaScript y librerías, como Angular y Axios colocan automáticamente su valor en el encabezado "),t("code",[e._v("X-XSRF-TOKEN")]),e._v(".")])])},[],!1,null,null,null);a.default=r.exports}}]);