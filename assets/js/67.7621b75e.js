(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{285:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{pre:!0},[s("h1",{pre:!0,attrs:{id:"redirecciones-http"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#redirecciones-http"}},[t._v("#")]),t._v(" Redirecciones HTTP")]),t._v(" "),s("ul",[s("li",[s("a",{pre:!0,attrs:{href:"#creating-redirects"}},[t._v("Creando redirecciones")])]),t._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#redirecting-named-routes"}},[t._v("Redireccionando a rutas con nombres")])]),t._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#redirecting-controller-actions"}},[t._v("Redireccionando a acciones de rontrolador")])]),t._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#redirecting-with-flashed-session-data"}},[t._v("Redireccionando con datos de sesiones")])])]),t._v(" "),s("p",[s("a",{pre:!0,attrs:{name:"creating-redirects"}})]),t._v(" "),s("h2",{pre:!0,attrs:{id:"creando-redirecciones"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#creando-redirecciones"}},[t._v("#")]),t._v(" Creando redirecciones")]),t._v(" "),s("p",[t._v("Las respuestas de redirección son instancias de la clase "),s("code",[t._v("Illuminate\\Http\\RedirectResponse")]),t._v(" y contienen los encabezados necesarios para redirigir al usuario a otra URL. Hay múltiples formas de generar una instancia "),s("code",[t._v("RedirectResponse")]),t._v(". La forma más simple es usando el helper global "),s("code",[t._v("redirect")]),t._v(":")]),t._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[t._v("Route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'dashboard'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'home/dashboard'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Algunas veces puedes querer redirigir al usuario a su ubicación anterior, como cuando un formulario enviado es inválido. Puedes hacer eso usando la función helper global "),s("code",[t._v("back")]),t._v(". Dado que esta característica usa la "),s("RouterLink",{pre:!0,attrs:{to:"/session.html"}},[t._v("sesión")]),t._v(", asegurate que la ruta llamando a la función "),s("code",[t._v("back")]),t._v(" está usando el grupo de middleware "),s("code",[t._v("web")]),t._v(" o tiene todo el middleware de sesión aplicado:")],1),t._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[t._v("Route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user/profile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Validate the request...")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withInput")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("a",{pre:!0,attrs:{name:"redirecting-named-routes"}})]),t._v(" "),s("h2",{pre:!0,attrs:{id:"redireccionando-a-rutas-con-nombres"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#redireccionando-a-rutas-con-nombres"}},[t._v("#")]),t._v(" Redireccionando a rutas con nombres")]),t._v(" "),s("p",[t._v("Cuando llamas al helper "),s("code",[t._v("redirect")]),t._v(" sin parámetros, una instancia de "),s("code",[t._v("Illuminate\\Routing\\Redirector")]),t._v(" es retornada, permitiéndote llamar a cualquier método en la instancia "),s("code",[t._v("Redirector")]),t._v(". Por ejemplo, para generar una "),s("code",[t._v("RedirectResponse")]),t._v(" a una ruta nombrada, puedes usar el método "),s("code",[t._v("route")]),t._v(":")]),t._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Si tu ruta tiene parámetros, puedes pasarlos como segundo argumento al método "),s("code",[t._v("route")]),t._v(":")]),t._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For a route with the following URI: profile/{id}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'profile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{pre:!0,attrs:{id:"llenando-parametros-mediante-modelos-de-eloquent"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#llenando-parametros-mediante-modelos-de-eloquent"}},[t._v("#")]),t._v(" Llenando parámetros mediante modelos de Eloquent")]),t._v(" "),s("p",[t._v('Si estás redirigiendo a una ruta con un parámetro "ID" que está siendo rellenado desde un modelo de Eloquent, puedes pasar el modelo como tal. El ID será extraído automáticamente:')]),t._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For a route with the following URI: profile/{id}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'profile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Si te gustaría personalizar el valor que es colocado en el parámetro de la ruta, debes sobrescribir el método "),s("code",[t._v("getRouteKey")]),t._v(" en tu modelo de Eloquent:")]),t._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Get the value of the model's route key.\n *\n * @return mixed\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRouteKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("slug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("a",{pre:!0,attrs:{name:"redirecting-controller-actions"}})]),t._v(" "),s("h2",{pre:!0,attrs:{id:"redireccionando-a-acciones-de-controlador"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#redireccionando-a-acciones-de-controlador"}},[t._v("#")]),t._v(" Redireccionando a acciones de controlador")]),t._v(" "),s("p",[t._v("Puedes también generar redirecciones a "),s("RouterLink",{pre:!0,attrs:{to:"/ontrollers.html"}},[t._v("acciones de controlador")]),t._v(". Para ello, pasa el nombre del controlador y la acción al método "),s("code",[t._v("action")]),t._v(". Recuerda, no necesitas especificar el nombre de espacio completo para el controlador dado que el "),s("code",[t._v("RouteServiceProvider")]),t._v(" de Laravel automáticamente establecerá el nombre de espacio del controlador base:")],1),t._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'HomeController@index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Si la ruta de tu controlador requiere parámetros, puedes pasarlos como segundo argumento al método "),s("code",[t._v("action")]),t._v(":")]),t._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'UserController@profile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("a",{pre:!0,attrs:{name:"redirecting-with-flashed-session-data"}})]),t._v(" "),s("h2",{pre:!0,attrs:{id:"redireccionando-con-datos-de-sesion"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#redireccionando-con-datos-de-sesion"}},[t._v("#")]),t._v(" Redireccionando con datos de sesión")]),t._v(" "),s("p",[t._v("Redireccionar a una nueva URL y "),s("RouterLink",{pre:!0,attrs:{to:"/session.html#flash-data"}},[t._v("enviar datos a la sesión")]),t._v(" es usualmente hecho al mismo tiempo. Típicamente, esto es hecho luego de realizar una acción exitosamente cuando envías un mensaje de éxito a la sesión. Por conveniencia, puedes crear una instancia "),s("code",[t._v("RedirectResponse")]),t._v(" y enviar datos a la sesión en un única y fluida cadena de métodos:")],1),t._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[t._v("Route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user/profile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update the user's profile...")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'dashboard'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'status'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Profile updated!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Luego de que el usuario es redireccionado, puedes mostrar el mensaje desde la "),s("RouterLink",{pre:!0,attrs:{to:"/session.html"}},[t._v("sesión")]),t._v(". Por ejemplo, usando la "),s("RouterLink",{pre:!0,attrs:{to:"/blade.html"}},[t._v("síntaxis de Blade")]),t._v(":")],1),t._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[t._v("@"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("session")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'status'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"alert alert-success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("session")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'status'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n@"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),t._v("\n")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);