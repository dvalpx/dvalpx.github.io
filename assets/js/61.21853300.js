(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{261:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{pre:!0},[s("h1",{pre:!0,attrs:{id:"restablecimiento-de-contrasenas"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#restablecimiento-de-contrasenas","aria-hidden":"true"}},[a._v("#")]),a._v(" Restablecimiento de contraseñas")]),a._v(" "),s("ul",[s("li",[s("a",{pre:!0,attrs:{href:"#introduction"}},[a._v("Introducción")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#resetting-database"}},[a._v("Consideraciones de la base de datos")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#resetting-routing"}},[a._v("Enrutamiento")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#resetting-views"}},[a._v("Vistas")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#after-resetting-passwords"}},[a._v("Después de restablecer contraseñas")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#password-customization"}},[a._v("Personalización")])])]),a._v(" "),s("p",[s("a",{pre:!0,attrs:{name:"introduction"}})]),a._v(" "),s("h2",{pre:!0,attrs:{id:"introduccion"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion","aria-hidden":"true"}},[a._v("#")]),a._v(" Introducción")]),a._v(" "),s("div",{pre:!0,attrs:{class:"tip custom-block"}},[s("p",[s("strong",[a._v("¿Quieres comenzar rápido?")]),a._v(" Simplemente ejecuta "),s("code",[a._v("php artisan make:auth")]),a._v(" en una aplicación de Laravel nueva y navega hasta "),s("code",[a._v("http://your-app.test/register")]),a._v(" o cualquier otra URL asignada a tu aplicación. Este simple comando se encargará de maquetar todo tu sistema de autenticación, ¡incluyendo el restablecimiento de contraseñas!.")])])]),s("p",[a._v("La mayoría de las aplicaciones web proporciona una forma para que los usuarios restablecen sus contraseñas olvidadas. En lugar de forzarte a reimplementar esto en cada aplicación, Laravel proporciona métodos convenientes para enviar recordatorios de contraseñas y realizar restablecimientos de contraseñas.")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[a._v("Antes de usar las características de restablecimiento de contraseñas de Laravel, tu usuario debe usar el trait "),s("code",[a._v("Illuminate\\Notifications\\Notifiable")]),a._v(".")])]),a._v(" "),s("p",[s("a",{attrs:{name:"resetting-database"}})]),a._v(" "),s("h2",{attrs:{id:"consideraciones-de-la-base-de-datos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consideraciones-de-la-base-de-datos","aria-hidden":"true"}},[a._v("#")]),a._v(" Consideraciones de la base de datos")]),a._v(" "),s("p",[a._v("Para comenzar, verifica que tu modelo "),s("code",[a._v("App\\User")]),a._v(" implementa la interfaz "),s("code",[a._v("Illuminate\\Contracts\\Auth\\CanResetPassword")]),a._v(". El modelo "),s("code",[a._v("App\\User")]),a._v(" incluído con el framework ya implementa esta interfaz y usa el trait "),s("code",[a._v("Illuminate\\Auth\\Passwords\\CanResetPassword")]),a._v(" para incluir los métodos necesarios para implementar la interfaz.")]),a._v(" "),s("h4",{attrs:{id:"generando-la-migracion-para-la-tabla-de-tokens-de-restablecimiento"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generando-la-migracion-para-la-tabla-de-tokens-de-restablecimiento","aria-hidden":"true"}},[a._v("#")]),a._v(" Generando la migración para la tabla de tokens de restablecimiento")]),a._v(" "),s("p",[a._v("Luego, una tabla debe ser creada para almacenar los tokens de restablecimiento de contraseña. La migración para está tabla está incluida con Laravel por defecto y se encuentra en el directorio "),s("code",[a._v("database/migrations")]),a._v(". Así que, todo lo que necesitas hacer es ejecutar tus migraciones de la base de datos:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("php artisan migrate\n")])])]),s("p",[s("a",{attrs:{name:"resetting-routing"}})]),a._v(" "),s("h2",{attrs:{id:"enrutamiento"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enrutamiento","aria-hidden":"true"}},[a._v("#")]),a._v(" Enrutamiento")]),a._v(" "),s("p",[a._v("Laravel incluye las clases "),s("code",[a._v("Auth\\ForgotPasswordController")]),a._v(" y "),s("code",[a._v("Auth\\ResetPasswordController")]),a._v(" que contienen la lógica necesaria para enviar enlaces de restablecimiento de contraseña y restablece contraseñas de usuarios mediante correo electrónico. Todas las rutas necesarias para realizar restablecimiento de contraseñas pueden ser generadas usando el comando de Artisan "),s("code",[a._v("make:auth")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("php artisan make"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("auth\n")])])]),s("p",[s("a",{attrs:{name:"resetting-views"}})]),a._v(" "),s("h2",{attrs:{id:"vistas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vistas","aria-hidden":"true"}},[a._v("#")]),a._v(" Vistas")]),a._v(" "),s("p",[a._v("De nuevo, Laravel generará todas las vistas necesarias para el restablecimiento de contraseña cuando el comando "),s("code",[a._v("make:auth")]),a._v(" es ejecutado. Estas vistas están ubicadas en "),s("code",[a._v("resources/views/auth/passwords")]),a._v(". Eres libre de personalizarlas según sea necesario para tu aplicación.")]),a._v(" "),s("p",[s("a",{attrs:{name:"after-resetting-passwords"}})]),a._v(" "),s("h2",{attrs:{id:"luego-de-resetear-contrasenas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#luego-de-resetear-contrasenas","aria-hidden":"true"}},[a._v("#")]),a._v(" Luego de resetear contraseñas")]),a._v(" "),s("p",[a._v("Una vez que has definido las rutas y vistas para restablecer las contraseñas de tus usuarios, puedes acceder a la ruta en tu navegador en "),s("code",[a._v("/password/reset")]),a._v(". El "),s("code",[a._v("ForgotPasswordController")]),a._v(" incluido con el framework ya incluye la lógica para enviar los correos con el enlace de restablecimiento, mientras que "),s("code",[a._v("ResetPasswordController")]),a._v(" incluye la lógica para restablecer las contraseñas de los usuarios.")]),a._v(" "),s("p",[a._v("Luego de que una contraseña es restablecida, la sesión del usuario será automáticamente iniciada y será redirigido a "),s("code",[a._v("/home")]),a._v(". Puedes personalizar la ubicación de redirección definiendo una propiedad "),s("code",[a._v("redirectTo")]),a._v(" en "),s("code",[a._v("ResetPasswordController")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$redirectTo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'/dashboard'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("Por defecto, los tokens para restablecer contraseñas expiran luego de una hora. Puedes cambiar esto mediante la opción de restablecimiento de contraseñas "),s("code",[a._v("expire")]),a._v(" en tu archivo "),s("code",[a._v("config/auth.php")]),a._v(".")])]),a._v(" "),s("p",[s("a",{attrs:{name:"password-customization"}})]),a._v(" "),s("h2",{attrs:{id:"personalizacion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#personalizacion","aria-hidden":"true"}},[a._v("#")]),a._v(" Personalización")]),a._v(" "),s("h4",{attrs:{id:"personalizacion-de-los-guards-de-autenticacion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#personalizacion-de-los-guards-de-autenticacion","aria-hidden":"true"}},[a._v("#")]),a._v(" Personalización de los guards de autenticación")]),a._v(" "),s("p",[a._v("En tu archivo de configuración "),s("code",[a._v("auth.php")]),a._v(', puedes configurar múltiples "guards", que podrán ser usados para definir el comportamiento de autenticación para múltiples tablas de usuarios. Puedes personalizar el controlador '),s("code",[a._v("ResetPasswordController")]),a._v(" incluido para usar el guard de tu preferencia sobrescribiendo el método "),s("code",[a._v("guard")]),a._v(" en el controlador. Este método debe retornar una instancia guard:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Facades"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Auth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n* Get the guard to be used during password reset.\n*\n* @return \\Illuminate\\Contracts\\Auth\\StatefulGuard\n*/")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("guard")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" Auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("guard")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'guard-name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"personalizacion-del-broker-de-contrasena"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#personalizacion-del-broker-de-contrasena","aria-hidden":"true"}},[a._v("#")]),a._v(" Personalización del broker de contraseña")]),a._v(" "),s("p",[a._v("En tu archivo de configuración "),s("code",[a._v("auth.php")]),a._v(', puedes configurar múltiples "brokers" de contraseñas, que pueden ser usados para restablecer contraseñas en múltiples tablas de usuarios. Puedes personalizar los controladores '),s("code",[a._v("ForgotPasswordController")]),a._v(" y "),s("code",[a._v("ResetPasswordController")]),a._v(" incluidos para usar el broker de tu elección sobrescribiendo el método "),s("code",[a._v("broker")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Facades"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n* Get the broker to be used during password reset.\n*\n* @return PasswordBroker\n*/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("broker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" Password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("broker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"personalizacion-del-correo-de-reseteo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#personalizacion-del-correo-de-reseteo","aria-hidden":"true"}},[a._v("#")]),a._v(" Personalización del correo de reseteo")]),a._v(" "),s("p",[a._v("Puedes fácilmente modificar la clase de la notificacion usada para enviar el enlace de restablecimiento de contraseña al usuario. Para comenzar, sobrescribe el método "),s("code",[a._v("sendPasswordResetNotification")]),a._v(" en tu modelo "),s("code",[a._v("User")]),a._v(". Dentro de este método, puedes enviar la notificación usando cualquier clase que selecciones. El "),s("code",[a._v("$token")]),a._v(" de restablecimiento de contaseña es el primer argumento recibido por el método:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n* Send the password reset notification.\n*\n* @param  string  $token\n* @return void\n*/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sendPasswordResetNotification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ResetPasswordNotification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);