(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{257:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{pre:!0},[t("h1",{pre:!0,attrs:{id:"verificacion-de-correo-electronico"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#verificacion-de-correo-electronico"}},[e._v("#")]),e._v(" Verificación de Correo Electrónico")]),e._v(" "),t("ul",[t("li",[t("a",{pre:!0,attrs:{href:"#introduction"}},[e._v("Introducción")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#verification-database"}},[e._v("Consideraciones de la base De datos")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#verification-routing"}},[e._v("Rutas")]),e._v(" "),t("ul",[t("li",[t("a",{pre:!0,attrs:{href:"#protecting-routes"}},[e._v("Protegiendo rutas")])])])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#verification-views"}},[e._v("Vistas")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#after-verifying-emails"}},[e._v("Luego de verificar correos electrónicos")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#events"}},[e._v("Eventos")])])]),e._v(" "),t("p",[t("a",{pre:!0,attrs:{name:"introduction"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"introduccion"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion"}},[e._v("#")]),e._v(" Introducción")]),e._v(" "),t("p",[e._v("Muchas aplicaciones web requieren que los usuarios verifiquen sus correos electrónicos usando la aplicación. En lugar de forzarte a volver a implementar esto en cada aplicación, Laravel proporciona métodos convenientes para enviar y verificar solicitudes de verificación de correos electrónicos.")]),e._v(" "),t("h3",{pre:!0,attrs:{id:"preparacion-del-modelo"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#preparacion-del-modelo"}},[e._v("#")]),e._v(" Preparación del modelo")]),e._v(" "),t("p",[e._v("Para comenzar, verifica que tu modelo "),t("code",[e._v("App\\User")]),e._v(" implementa la interfaz "),t("code",[e._v("Illuminate\\Contracts\\Auth\\MustVerifyEmail")]),e._v(":")]),e._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("App")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Notifications"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Notifiable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Contracts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("MustVerifyEmail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Foundation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("User")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" Authenticatable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("User")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Authenticatable")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implements")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MustVerifyEmail")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Notifiable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),t("p",[t("a",{pre:!0,attrs:{name:"verification-database"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"consideraciones-de-la-base-de-datos"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#consideraciones-de-la-base-de-datos"}},[e._v("#")]),e._v(" Consideraciones de la base de datos")]),e._v(" "),t("h4",{pre:!0,attrs:{id:"columna-de-verificacion-de-correo-electronico"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#columna-de-verificacion-de-correo-electronico"}},[e._v("#")]),e._v(" Columna de verificación de correo electrónico")]),e._v(" "),t("p",[e._v("Luego, tu tabla "),t("code",[e._v("user")]),e._v(" debe contener una columna "),t("code",[e._v("email_verified_at")]),e._v(" para almacenar la fecha y la hora en la que la dirección de correo electrónico fue verificada. Por defecto, la migración de la tabla "),t("code",[e._v("user")]),e._v(" incluida con el framework Laravel ya incluye esta columna. Así que, lo único que necesitas es ejecutar la migración de la base de datos:")]),e._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[e._v("php artisan migrate\n")])])]),t("p",[t("a",{pre:!0,attrs:{name:"verification-routing"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"rutas"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#rutas"}},[e._v("#")]),e._v(" Rutas")]),e._v(" "),t("p",[e._v("Laravel incluye la clase "),t("code",[e._v("Auth\\VerificationController")]),e._v(" que contiene la lógica necesaria para enviar enlaces de verificación y verificar correos electrónicos. Para registrar las rutas necesarias para este controlador, pasa la opción "),t("code",[e._v("verify")]),e._v(" al método "),t("code",[e._v("Auth::routes")]),e._v(":")]),e._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[e._v("Auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("routes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'verify'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean constant"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("a",{pre:!0,attrs:{name:"protecting-routes"}})]),e._v(" "),t("h3",{pre:!0,attrs:{id:"protegiendo-rutas"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#protegiendo-rutas"}},[e._v("#")]),e._v(" Protegiendo rutas")]),e._v(" "),t("p",[t("router-link",{pre:!0,attrs:{to:"/middleware.html"}},[e._v("El middleware de rutas")]),e._v(" puede ser usado para permitir que sólo usuarios autorizados puedan acceder a una ruta dada. Laravel viene con un middleware "),t("code",[e._v("verified")]),e._v(", que está definido en "),t("code",[e._v("Illuminate\\Auth\\Middleware\\EnsureEmailIsVerified")]),e._v(". Dado que este middleware ya está registrado en el kernel HTTP de tu aplicación, lo único que necesitas hacer es adjuntar el middleware a una definición de ruta:")],1),e._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[e._v("Route"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'profile'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Only verified users may enter...")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("middleware")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'verified'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("a",{pre:!0,attrs:{name:"verification-views"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"vistas"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#vistas"}},[e._v("#")]),e._v(" Vistas")]),e._v(" "),t("p",[e._v("Laravel generará todas las vistas de verificación de correo electrónico necesarias cuando el comando "),t("code",[e._v("make:auth")]),e._v(" sea ejecutado. Esta vista es colocada en "),t("code",[e._v("resources/views/auth/verify.blade.php")]),e._v(". Eres libre de personalizar esta vista según sea necesario para tu aplicación.")]),e._v(" "),t("p",[t("a",{pre:!0,attrs:{name:"after-verifying-emails"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"luego-de-verificar-correos-electronicos"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#luego-de-verificar-correos-electronicos"}},[e._v("#")]),e._v(" Luego de verificar correos electrónicos")]),e._v(" "),t("p",[e._v("Luego de que una dirección de correo electrónico es verificada, el usuario será redirigido automáticamente a "),t("code",[e._v("/home")]),e._v(". Puedes personalizar la ubicación de redirección post-verificación definiendo un método "),t("code",[e._v("redirectTo")]),e._v(" o propiedad en "),t("code",[e._v("VerificationController")]),e._v(":")]),e._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("protected")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$redirectTo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'/dashboard'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("a",{pre:!0,attrs:{name:"events"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"eventos"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#eventos"}},[e._v("#")]),e._v(" Eventos")]),e._v(" "),t("p",[e._v("Laravel despacha "),t("router-link",{pre:!0,attrs:{to:"/events.html"}},[e._v("eventos")]),e._v(" durante el proceso de verificación de correo electrónico. Puedes agregar listeners a estos eventos en tu "),t("code",[e._v("EventServiceProvider")]),e._v(":")],1),e._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n* The event listener mappings for the application.\n*\n* @var array\n*/")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("protected")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$listen")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'Illuminate\\Auth\\Events\\Verified'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'App\\Listeners\\LogVerifiedUser'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);