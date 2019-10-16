(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{273:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{pre:!0},[s("h1",{pre:!0,attrs:{id:"laravel-horizon"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#laravel-horizon"}},[a._v("#")]),a._v(" Laravel Horizon")]),a._v(" "),s("ul",[s("li",[s("a",{pre:!0,attrs:{href:"#introduction"}},[a._v("Introducción")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#upgrading"}},[a._v("Actualización de Horizon")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#installation"}},[a._v("Instalación")]),a._v(" "),s("ul",[s("li",[s("a",{pre:!0,attrs:{href:"#configuration"}},[a._v("Configuración")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#dashboard-authorization"}},[a._v("Autorización del dashboard")])])])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#running-horizon"}},[a._v("Ejecutando Horizon")]),a._v(" "),s("ul",[s("li",[s("a",{pre:!0,attrs:{href:"#deploying-horizon"}},[a._v("Usando Horizon")])])])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#tags"}},[a._v("Etiquetas")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#notifications"}},[a._v("Notificaciones")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#metrics"}},[a._v("Métricas")])])]),a._v(" "),s("p",[s("a",{pre:!0,attrs:{name:"introduction"}})]),a._v(" "),s("h2",{pre:!0,attrs:{id:"introduccion"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion"}},[a._v("#")]),a._v(" Introducción")]),a._v(" "),s("p",[a._v("Horizon proporciona un bonito panel de control y sistema de configuración controlado por código para Laravel, potenciado por colas de Redis. Horizon te permite monitorear fácilmente métricas claves de tu sistema de colas tales como tasa de rendimiento, tiempo de ejecución y fallas de tareas.")]),a._v(" "),s("p",[a._v("Toda la configuración de tu worker es almacenada en un solo archivo de configuración sencillo, permitiendo que tu configuración quede en el código fuente donde tu equipo completo pueda colaborar.")]),a._v(" "),s("p",{pre:!0,attrs:{align:"center"}},[s("img",{pre:!0,attrs:{src:"https://res.cloudinary.com/dtfbvvkyp/image/upload/v1537195039/photos/Test.png",width:"600",height:"481"}})]),a._v(" "),s("p",[s("a",{pre:!0,attrs:{name:"installation"}})]),a._v(" "),s("h2",{pre:!0,attrs:{id:"instalacion"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#instalacion"}},[a._v("#")]),a._v(" Instalación")]),a._v(" "),s("div",{pre:!0,attrs:{class:"danger custom-block"}},[s("p",{pre:!0,attrs:{class:"custom-block-title"}},[a._v("Nota")]),a._v(" "),s("p",[a._v("Debes asegurarte de que tu conexión de cola está establecido a "),s("code",[a._v("redis")]),a._v(" en tu archivo de configuración "),s("code",[a._v("queue")]),a._v(".")])])]),s("p",[a._v("Puedes usar Composer para instalar Horizon en tu proyecto de Laravel:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("composer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("require")]),a._v(" laravel"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("horizon\n")])])]),s("p",[a._v("Después de instalar Horizon, publica sus assets usando el comando Artisan "),s("code",[a._v("horizon:install")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("php artisan horizon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("install\n")])])]),s("p",[a._v("Debes también crear la tabla "),s("code",[a._v("failed_jobs")]),a._v(" que Laravel usará para almacenar cualquier "),s("router-link",{attrs:{to:"/queues.html#dealing-with-failed-jobs"}},[a._v("trabajo en cola fallido")]),a._v(":")],1),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("php artisan queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("failed"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("table\n\nphp artisan migrate\n")])])]),s("p",[s("a",{attrs:{name:"upgrading"}})]),a._v(" "),s("h4",{attrs:{id:"actualizacion-de-horizon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actualizacion-de-horizon"}},[a._v("#")]),a._v(" Actualización de horizon")]),a._v(" "),s("p",[a._v("Al actualizar a una nueva versión mayor de Horizon, es importante que revises cuidadosamente "),s("a",{attrs:{href:"https://github.com/laravel/horizon/blob/master/UPGRADE.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("la guía de actualización"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("Además, debes volver a publicar los assets de Horizon:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("php artisan horizon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("assets\n")])])]),s("p",[s("a",{attrs:{name:"configuration"}})]),a._v(" "),s("h3",{attrs:{id:"configuracion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracion"}},[a._v("#")]),a._v(" Configuración")]),a._v(" "),s("p",[a._v("Después de publicar los assets de Horizon, su principal archivo de configuración será colocado en "),s("code",[a._v("config/horizon.php")]),a._v(". Este archivo de configuración permite que configures las opciones del worker y cada opción de configuración incluye una descripción de su propósito, así que asegurate de explorar con gran detalle este archivo.")]),a._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("Debes asegurarte de que la porción "),s("code",[a._v("environments")]),a._v(" de tu archivo de configuración "),s("code",[a._v("horizon")]),a._v(" contiene una entrada para cada entorno en el que planeas ejecutrar Horizon.")])]),a._v(" "),s("h4",{attrs:{id:"opciones-de-balance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opciones-de-balance"}},[a._v("#")]),a._v(" Opciones de balance")]),a._v(" "),s("p",[a._v("Horizon permite que elijas entre tres estrategias de balance: "),s("code",[a._v("simple")]),a._v(", "),s("code",[a._v("auto")]),a._v(" y "),s("code",[a._v("false")]),a._v(". La estrategia "),s("code",[a._v("simple")]),a._v(", que es la opción por defecto del archivo de configuración, divide los trabajos entrantes de manera uniforme entre procesos:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'balance'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'simple'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[a._v("La estrategia "),s("code",[a._v("auto")]),a._v(" ajusta el número de procesos trabajadores por cola basado en la carga de trabajo de la cola. Por ejemplo, si tu cola "),s("code",[a._v("notifications")]),a._v(" tiene 1.000 trabajos esperando mientras tu cola "),s("code",[a._v("render")]),a._v(" está vacía, Horizon asignará mas trabajadores a tu cola "),s("code",[a._v("notifications")]),a._v(" hasta que esté vacía. Cuando la opción "),s("code",[a._v("balance")]),a._v(" esté establecida a "),s("code",[a._v("false")]),a._v(", el comportamiento predeterminado de Laravel será usado, el cual procesa las colas en el orden que son listadas en tu configuración.")]),a._v(" "),s("h4",{attrs:{id:"recorte-de-trabajos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recorte-de-trabajos"}},[a._v("#")]),a._v(" Recorte de trabajos")]),a._v(" "),s("p",[a._v("El archivo de configuración "),s("code",[a._v("horizon")]),a._v(" te permite configurar cuánto tiempo los trabajos de recientes y fallidos deben ser persistidos (en minutos). Por defecto, los trabajos recientes son mantenidos por una hora mientras que los trabajos fallidos son mantenidos por una semana:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'trim'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'recent'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'failed'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[s("a",{attrs:{name:"dashboard-authorization"}})]),a._v(" "),s("h3",{attrs:{id:"autorizacion-del-dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autorizacion-del-dashboard"}},[a._v("#")]),a._v(" Autorización del dashboard")]),a._v(" "),s("p",[a._v("Horizon muestra un dashboard o panel de control en "),s("code",[a._v("/horizon")]),a._v(". Por defecto, sólo serás capaz de acceder a este dashboard en el entorno "),s("code",[a._v("local")]),a._v(". Dentro de tu archivo "),s("code",[a._v("app/Providers/HorizonServiceProvider.php")]),a._v(", hay un método "),s("code",[a._v("gate")]),a._v(". Este gate de autorización controla el acceso a Horizon en entornos "),s("strong",[a._v("no locales")]),a._v(". Eres libre de modificar este gate como sea necesario para restringir el acceso a tu instalación de Horizon:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n* Register the Horizon gate.\n*\n* This gate determines who can access Horizon in non-local environments.\n*\n* @return void\n*/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("gate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Gate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("define")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'viewHorizon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("in_array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'taylor@laravel.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("a",{attrs:{name:"running-horizon"}})]),a._v(" "),s("h2",{attrs:{id:"ejecutando-horizon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ejecutando-horizon"}},[a._v("#")]),a._v(" Ejecutando Horizon")]),a._v(" "),s("p",[a._v("Una vez que has configurado tus workers en el archivo de configuración "),s("code",[a._v("config/horizon.php")]),a._v(", puedes ejecutar Horizon usando el comando Artisan "),s("code",[a._v("horizon")]),a._v(". Este único comando iniciará todos tus workers configurados:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("php artisan horizon\n")])])]),s("p",[a._v("Puedes pausar los procesos de Horizon e instruirlo para continuar procesando trabajos usando los comandos Artisan "),s("code",[a._v("horizon:pause")]),a._v(" y "),s("code",[a._v("horizon:continue")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("php artisan horizon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("pause\n\n"),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("php")]),a._v(" artisan horizon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("continue")]),a._v("\n")])])]),s("p",[a._v("Puedes terminar elegantemente el proceso maestro de Horizon en tu máquina usando el comando Artisan "),s("code",[a._v("horizon:terminate")]),a._v(". Cualquiera de los trabajos que Horizon esté procesando actualmente será completado y después Horizon parará:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("php artisan horizon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("terminate\n")])])]),s("p",[s("a",{attrs:{name:"deploying-horizon"}})]),a._v(" "),s("h3",{attrs:{id:"usando-horizon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usando-horizon"}},[a._v("#")]),a._v(" Usando Horizon")]),a._v(" "),s("p",[a._v("Si estás usando Horizon en un servidor activo, deberías configurar un monitor de proceso para monitorear el comando "),s("code",[a._v("php artisan horizon")]),a._v(" y reiniciarlo si éste sale inesperadamente. Al momento de usar código reciente en tu servidor, necesitarás instruir el proceso maestro de Horizon para que termine así puede ser reiniciado por tu monitor de proceso y recibir tu cambios de código.")]),a._v(" "),s("h4",{attrs:{id:"configuracion-de-supervisor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-supervisor"}},[a._v("#")]),a._v(" Configuración de Supervisor")]),a._v(" "),s("p",[a._v("Si estás usando el monitor de procesos de Supervisor para administrar tu proceso "),s("code",[a._v("horizon")]),a._v(", el siguiente archivo de configuración debería ser suficiente:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("horizon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nprocess_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("program_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("s\ncommand"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("home"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("forge"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("artisan horizon\nautostart"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[a._v("true")]),a._v("\nautorestart"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[a._v("true")]),a._v("\nuser"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("forge\nredirect_stderr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[a._v("true")]),a._v("\nstdout_logfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("home"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("forge"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("horizon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("log\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("Si no estás cómodo administrando tus propios servidores, considera usar "),s("a",{attrs:{href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("Laravel Forge"),s("OutboundLink")],1),a._v(". Forge aprovisiona tus propios servidores PHP 7+ con todo lo que necesitas para administrar modernas aplicaciones robustas de Laravel con Horizon.")])]),a._v(" "),s("p",[s("a",{attrs:{name:"tags"}})]),a._v(" "),s("h2",{attrs:{id:"etiquetas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etiquetas"}},[a._v("#")]),a._v(" Etiquetas")]),a._v(" "),s("p",[a._v("Horizon permite que asignes “etiquetas” a los trabajos, incluyendo correos válidos, difusiones de eventos, notificaciones y listeners de eventos encolados. De hecho, Horizon etiquetará inteligente y automáticamente la mayoría de los trabajos dependiendo de los modelos Eloquent que estén adjuntos al trabajo. Por ejemplo, echemos un vistazo al siguiente worker:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Bus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Queueable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("SerializesModels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("InteractsWithQueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Contracts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("ShouldQueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Foundation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Bus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Dispatchable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RenderVideo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ShouldQueue")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Dispatchable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" InteractsWithQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" Queueable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" SerializesModels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n    * The video instance.\n    *\n    * @var \\App\\Video\n    */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n    * Create a new job instance.\n    *\n    * @param  \\App\\Video  $video\n    * @return void\n    */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Video "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("video")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n    * Execute the job.\n    *\n    * @return void\n    */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("handle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),s("p",[a._v("Si este trabajo es encolado con una instancia "),s("code",[a._v("App\\Video")]),a._v(" que tenga un "),s("code",[a._v("id")]),a._v(" de "),s("code",[a._v("1")]),a._v(", recibirá automáticamente la etiqueta "),s("code",[a._v("App\\Video:1")]),a._v(". Esto es debido a que Horizon examinará las propiedades del trabajo para cualquier modelo Eloquent. Si los modelos Eloquent son encontrados, Horizon etiquetará inteligentemente el trabajo usando el nombre de la clase y la clave primaria del modelo.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$video")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" App\\"),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nApp\\"),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Jobs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("RenderVideo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h4",{attrs:{id:"etiquetado-manual"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etiquetado-manual"}},[a._v("#")]),a._v(" Etiquetado manual")]),a._v(" "),s("p",[a._v("Si prefieres definir manualmente las etiquetas para uno de tus objetos encolables, puedes definir un método "),s("code",[a._v("tags")]),a._v(" en la clase:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RenderVideo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ShouldQueue")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n    * Get the tags that should be assigned to the job.\n    *\n    * @return array\n    */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'render'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'video:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("video")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("a",{attrs:{name:"notifications"}})]),a._v(" "),s("h2",{attrs:{id:"notificaciones"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notificaciones"}},[a._v("#")]),a._v(" Notificaciones")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("Note:")]),a._v(" Al momento de configurar Horizon para enviar notificaciones de Slack o SMS, también deberías revisar los "),s("router-link",{attrs:{to:"/notifications.html"}},[a._v("prerequisitos para el manejador de notificaciones relevante")]),a._v(".")],1)]),a._v(" "),s("p",[a._v("Si prefieres ser notificado cuando una de tus colas tenga un largo tiempo de inactividad, puedes usar los métodos "),s("code",[a._v("Horizon::routeMailNotificationsTo")]),a._v(", "),s("code",[a._v("Horizon::routeSlackNotificationsTo")]),a._v(" y "),s("code",[a._v("Horizon::routeSmsNotificationsTo")]),a._v(". Puedes ejecutar estos métodos desde el "),s("code",[a._v("HorizonServiceProvider")]),a._v(" de tu aplicación:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("Horizon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("routeMailNotificationsTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'example@example.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nHorizon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("routeSlackNotificationsTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'slack-webhook-url'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'#channel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nHorizon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("routeSmsNotificationsTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'15556667777'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h4",{attrs:{id:"configurando-las-notificaciones-de-umbrales-de-tiempo-de-inactividad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurando-las-notificaciones-de-umbrales-de-tiempo-de-inactividad"}},[a._v("#")]),a._v(" Configurando las notificaciones de umbrales de tiempo de inactividad")]),a._v(" "),s("p",[a._v('Puedes configurar cuántos segundos son considerados un "tiempo de inactividad" dentro de tu archivo de configuración '),s("code",[a._v("config/horizon.php")]),a._v(". La opción de configuración "),s("code",[a._v("waits")]),a._v(" dentro de este archivo permite que controles el umbral de tiempo de inactividad para cada combinación conexión / cola:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'waits'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'redis:default'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[s("a",{attrs:{name:"metrics"}})]),a._v(" "),s("h2",{attrs:{id:"metricas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metricas"}},[a._v("#")]),a._v(" Métricas")]),a._v(" "),s("p",[a._v("Horizon incluye un panel de métricas, el cual proporciona información de tus tiempos de trabajo y de espera en cola y tasa de rendimiento. Con el propósito de agregar contenido a este panel, deberías configurar el comando Artisan "),s("code",[a._v("snapshot")]),a._v(" de Horizon para que se ejecute cada 5 minutos por medio del "),s("router-link",{attrs:{to:"/scheduling.html"}},[a._v("planificador")]),a._v(" de tu aplicación:")],1),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n* Define the application's command schedule.\n*\n* @param  \\Illuminate\\Console\\Scheduling\\Schedule  $schedule\n* @return void\n*/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("schedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Schedule "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$schedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$schedule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'horizon:snapshot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("everyFiveMinutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);