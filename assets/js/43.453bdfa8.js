(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{273:function(e,a,r){"use strict";r.r(a);var t=r(0),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{pre:!0},[r("h1",{pre:!0,attrs:{id:"javascript-y-estructuracion-de-css"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#javascript-y-estructuracion-de-css"}},[e._v("#")]),e._v(" JavaScript y Estructuración de CSS")]),e._v(" "),r("ul",[r("li",[r("a",{pre:!0,attrs:{href:"#introduction"}},[e._v("Introducción")])]),e._v(" "),r("li",[r("a",{pre:!0,attrs:{href:"#writing-css"}},[e._v("Escribiendo CSS")])]),e._v(" "),r("li",[r("a",{pre:!0,attrs:{href:"#writing-javascript"}},[e._v("Escribiendo JavaScript")]),e._v(" "),r("ul",[r("li",[r("a",{pre:!0,attrs:{href:"#writing-vue-components"}},[e._v("Escribiendo componentes de Vue")])]),e._v(" "),r("li",[r("a",{pre:!0,attrs:{href:"#using-react"}},[e._v("Usando React")])])])]),e._v(" "),r("li",[r("a",{pre:!0,attrs:{href:"#adding-presets"}},[e._v("Agregando Presets")])])]),e._v(" "),r("p",[r("a",{pre:!0,attrs:{name:"introduction"}})]),e._v(" "),r("h2",{pre:!0,attrs:{id:"introduccion"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion"}},[e._v("#")]),e._v(" Introducción")]),e._v(" "),r("p",[e._v("Mientras Laravel no dicta la pauta sobre que pre-procesadores de JavaScript o CSS usar, si proporciona un punto de inicio básico usando "),r("a",{pre:!0,attrs:{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bootstrap"),r("OutboundLink",{pre:!0})],1),e._v(", "),r("a",{pre:!0,attrs:{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("React"),r("OutboundLink",{pre:!0})],1),e._v(" y / o "),r("a",{pre:!0,attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink",{pre:!0})],1),e._v(" que será de utilidad para muchas aplicaciones. De forma predeterminada, Laravel usa "),r("a",{pre:!0,attrs:{href:"https://www.npmjs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPM"),r("OutboundLink",{pre:!0})],1),e._v(" para instalar ambos paquetes de frontend.")]),e._v(" "),r("p",[e._v("La estructura de Boostrap y Vue proporcinada por Laravel se encuentra en el paquete de Composer "),r("code",[e._v("laravel/ui")]),e._v(", que se puede instalar usando Composer:")]),e._v(" "),r("div",{pre:!0,attrs:{class:"language-terminal extra-class"}},[r("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[r("code",[e._v("composer require laravel/ui --dev\n")])])]),r("p",[e._v("Una vez que se haya instalado el paquete "),r("code",[e._v("laravel/ui")]),e._v(", puedes instalar la estructura del frontend usando el comando "),r("code",[e._v("ui")]),e._v(" de artisan:")]),e._v(" "),r("div",{pre:!0,attrs:{class:"language-terminal extra-class"}},[r("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[r("code",[e._v("// Generando estructura básica...\nphp artisan ui bootstrap\nphp artisan ui vue\nphp artisan ui react\n\n// Generando estructura del login y registro...\nphp artisan ui bootstrap --auth\nphp artisan ui vue --auth\nphp artisan ui react --auth\n")])])]),r("h4",{pre:!0,attrs:{id:"css"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#css"}},[e._v("#")]),e._v(" CSS")]),e._v(" "),r("p",[r("router-link",{pre:!0,attrs:{to:"/mix.html"}},[e._v("Laravel Mix")]),e._v(" proporciona una clara y expresiva API sobre compilación de Sass o Less, las cuales son extensiones de CSS plano que agregan variables, mixins y otras poderosas características que hacen el trabajo con CSS mucho más divertido. En este documento, discutiremos brevemente la compilación CSS en general; sin embargo, deberías consultar la "),r("router-link",{pre:!0,attrs:{to:"/mix.html"}},[e._v("documentación de Laravel Mix")]),e._v(" completa para mayor información sobre compilación de Sass o Less.")],1),e._v(" "),r("h4",{pre:!0,attrs:{id:"javascript"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#javascript"}},[e._v("#")]),e._v(" JavaScript")]),e._v(" "),r("p",[e._v("Laravel no requiere que uses un framework o biblioteca de JavaScript específica para construir tus aplicaciones. De hecho, no tienes que usar JavaScript en lo absoluto. Sin embargo, Laravel sí incluye algunas de las estructuras básicas para hacer más fácil los primeros pasos para escribir JavaScript moderno usando el framework "),r("a",{pre:!0,attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink",{pre:!0})],1),e._v(". Vue proporciona una API expresiva para construir aplicaciones de JavaScript robustas usando componentes. Como con CSS, podemos usar Laravel Mix para compilar fácilmente componentes de JavaScript en un único archivo de JavaScript para los eventos del navegador.")]),e._v(" "),r("h4",{pre:!0,attrs:{id:"removiendo-la-estructura-del-frontend"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#removiendo-la-estructura-del-frontend"}},[e._v("#")]),e._v(" Removiendo la estructura del frontend")]),e._v(" "),r("p",[e._v("Si prefieres remover la estructura del frontend de tu aplicación, puedes usar el comando Artisan "),r("code",[e._v("preset")]),e._v(". Este comando, cuando se combina con la opción "),r("code",[e._v("none")]),e._v(", eliminará la maquetación de Bootstrap y Vue de tu aplicación, dejando solamente un archivo Sass en blanco y unas cuántas bibliotecas de utilidades de JavaScript comunes.")]),e._v(" "),r("div",{pre:!0,attrs:{class:"language-terminal extra-class"}},[r("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[r("code",[e._v("php artisan preset none\n")])])]),r("p",[r("a",{pre:!0,attrs:{name:"writing-css"}})]),e._v(" "),r("h2",{pre:!0,attrs:{id:"escribiendo-css"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#escribiendo-css"}},[e._v("#")]),e._v(" Escribiendo CSS")]),e._v(" "),r("p",[e._v("Después de instalar el paquete de Composer "),r("code",[e._v("laravel/ui")]),e._v(" y "),r("a",{pre:!0,attrs:{href:"#introduction"}},[e._v("generada la estructura del frontend")]),e._v(",\nel archivo "),r("code",[e._v("package.json")]),e._v(" de Laravel incluye el paquete "),r("code",[e._v("bootstrap")]),e._v(" que te ayuda a empezar a hacer un prototipo del frontend de tu aplicación usando Bootstrap. Sin embargo, siéntete libre de agregar o eliminar los paquetes del archivo "),r("code",[e._v("package.json")]),e._v(" como sea necesario para tu aplicación. No es obligatorio que uses el framework Bootstrap para construir tu aplicación de Laravel - se proporciona un buen punto de inicio para aquellos que elijan usarlo.")]),e._v(" "),r("p",[e._v("Antes de compilar tu CSS, instala las dependencias de frontend de tu proyecto usando el "),r("a",{pre:!0,attrs:{href:"https://www.npmjs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("gestor de paquetes para Node (NPM)"),r("OutboundLink",{pre:!0})],1),e._v(":")]),e._v(" "),r("div",{pre:!0,attrs:{class:"language-terminal extra-class"}},[r("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[r("code",[e._v("npm install\n")])])]),r("p",[e._v("Una vez que las dependencias hayan sido instaladas usando "),r("code",[e._v("npm install")]),e._v(", puedes compilar tus archivos Sass a CSS plano usando "),r("router-link",{pre:!0,attrs:{to:"/mix.html#working-with-stylesheets"}},[e._v("Laravel Mix")]),e._v(". El comando "),r("code",[e._v("npm run dev")]),e._v(" procesará las instrucciones en tu archivo "),r("code",[e._v("webpack.mix.js")]),e._v(". Típicamente, tu CSS compilado estará ubicado en el directorio "),r("code",[e._v("public/css")]),e._v(":")],1),e._v(" "),r("div",{pre:!0,attrs:{class:"language-terminal extra-class"}},[r("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[r("code",[e._v("npm run dev\n")])])]),r("p",[e._v("El archivo "),r("code",[e._v("webpack.mix.js")]),e._v(" incluido de forma predeterminada con Laravel compilará el archivo Sass "),r("code",[e._v("resources/sass/app.scss")]),e._v(". Este archivo "),r("code",[e._v("app.scss")]),e._v(" importa un archivo de variables Sass y carga Bootstrap, el cual proporciona un buen punto de comienzo para la mayoría de las aplicaciones. Siéntete libre de personalizar el archivo "),r("code",[e._v("app.scss")]),e._v(" en la forma que desees o incluso usar un pre-procesador completamente diferente "),r("router-link",{pre:!0,attrs:{to:"/mix.html"}},[e._v("configurando Laravel Mix")]),e._v(".")],1),e._v(" "),r("p",[r("a",{pre:!0,attrs:{name:"writing-javascript"}})]),e._v(" "),r("h2",{pre:!0,attrs:{id:"escribiendo-javascript"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#escribiendo-javascript"}},[e._v("#")]),e._v(" Escribiendo JavaScript")]),e._v(" "),r("p",[e._v("Todas las dependencias de JavaScript requeridas por tu aplicación pueden ser encontradas en el archivo "),r("code",[e._v("package.json")]),e._v(" en el directorio principal del proyecto. Este archivo es similar a un archivo "),r("code",[e._v("composer.json")]),e._v(" excepto que éste específica las dependencias de JavaScript en lugar de las dependencias de PHP. Puedes instalar estas dependencias usando el "),r("a",{pre:!0,attrs:{href:"https://www.npmjs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("gestor de paquetes de Node (NPM)"),r("OutboundLink",{pre:!0})],1),e._v(":")]),e._v(" "),r("div",{pre:!0,attrs:{class:"language-terminal extra-class"}},[r("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[r("code",[e._v("npm install\n")])])]),r("div",{pre:!0,attrs:{class:"custom-block tip"}},[r("p",{pre:!0,attrs:{class:"custom-block-title"}},[e._v("TIP")]),e._v(" "),r("p",[e._v("De forma predeterminada, el archivo "),r("code",[e._v("package.json")]),e._v(" de Laravel incluye unos cuantos paquetes tales como "),r("code",[e._v("vue")]),e._v(" y "),r("code",[e._v("axios")]),e._v(" para ayudarte a empezar a construir tu aplicación de JavaScript. Siéntete libre de agregar o eliminar del archivo "),r("code",[e._v("package.json")]),e._v(" según sea necesario para tu aplicación.")])])]),r("p",[e._v("Una vez que los paquetes sean instalados, puedes usar el comando "),r("code",[e._v("npm run dev")]),e._v(" para "),r("router-link",{attrs:{to:"/mix.html"}},[e._v("compilar tus recursos")]),e._v(". Webpack es un empaquetador de módulos para aplicaciones modernas en JavaScript. Cuando ejecutes el comando "),r("code",[e._v("npm run dev")]),e._v(", Webpack ejecutará las instrucciones en tu archivo "),r("code",[e._v("webpack.mix.js")]),e._v(":")],1),e._v(" "),r("div",{staticClass:"language-terminal extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("npm run dev\n")])])]),r("p",[e._v("De forma predeterminada, el archivo de "),r("code",[e._v("webpack.mix.js")]),e._v(" de Laravel compila tu archivo Sass y él de "),r("code",[e._v("resources/js/app.js")]),e._v(". Dentro de el archivo "),r("code",[e._v("app.js")]),e._v(" puedes registrar tus componentes de Vue o, si prefieres un framework distinto, configurar tu propia aplicación de JavaScript. Tu JavaScript compilado será colocado típicamente en el directorio "),r("code",[e._v("public/js")]),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("El archivo "),r("code",[e._v("app.js")]),e._v(" cargará el archivo "),r("code",[e._v("resources/js/bootstrap.js")]),e._v(" el cual estructura y configura Vue, Axios, jQuery, y todas las demás dependencias de javaScript. Si tienes dependencias adicionales de JavaScript que configurar, puedes hacerlo en este archivo.")])]),e._v(" "),r("p",[r("a",{attrs:{name:"writing-vue-components"}})]),e._v(" "),r("h3",{attrs:{id:"escribiendo-componentes-de-vue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#escribiendo-componentes-de-vue"}},[e._v("#")]),e._v(" Escribiendo componentes de Vue")]),e._v(" "),r("p",[e._v("Al usar el paquete "),r("code",[e._v("laravel/ui")]),e._v(" para la estructura de tu frontend, se colocará un componente de Vue "),r("code",[e._v("ExampleComponent.vue")]),e._v(" ubicado en el directorio "),r("code",[e._v("resources/js/components")]),e._v(". El archivo "),r("code",[e._v("ExampleComponent.vue")]),e._v(" es un ejemplo de un "),r("a",{attrs:{href:"https://vuejs.org/guide/single-file-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("componente Vue de archivo único"),r("OutboundLink")],1),e._v(" el cual define su plantilla HTML y JavaScript en el mismo archivo. Los componentes de archivo único proporcionan un enfoque muy conveniente para construir aplicaciones manejadas por JavaScript. El componente de ejemplo es registrado en tu archivo "),r("code",[e._v("app.js")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[e._v("Vue"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("component")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'example-component'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./components/ExampleComponent.vue'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("default\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("p",[e._v("Para usar el componente en tu aplicación, puedes colocarlo en una de tus plantillas HTML. Por ejemplo, después de ejecutar el comando Artisan "),r("code",[e._v("php artisan ui vue --auth")]),e._v(" para maquetar las pantallas de registro y autenticación de tu aplicación, podrías colocar el componente en la plantilla de Blade "),r("code",[e._v("home.blade.php")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[e._v("@"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'layouts.app'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n@"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("section")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'content'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("example"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("component"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("example"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("component"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n@endsection\n")])])]),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Recuerda, deberías ejecutar el comando "),r("code",[e._v("npm run dev")]),e._v(" cada vez que cambies un componente de Vue. O, puedes ejecutar el comando "),r("code",[e._v("npm run watch")]),e._v(" para monitorear y recompilar automáticamente tus componentes cada vez que sean modificados.")])]),e._v(" "),r("p",[e._v("Si estás interesado en aprender más sobre escribir componentes de Vue, deberías leer la "),r("a",{attrs:{href:"https://vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentación de Vue"),r("OutboundLink")],1),e._v(", la cual proporciona un minucioso resumen fácil de leer del framework Vue.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("En "),r("a",{attrs:{href:"https://styde.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Styde.net"),r("OutboundLink")],1),e._v(" contamos con un "),r("a",{attrs:{href:"https://styde.net/curso-de-vue-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("completo curso sobre Vue.js"),r("OutboundLink")],1),e._v(" que cubre todo los aspectos del framework.")])]),e._v(" "),r("p",[r("a",{attrs:{name:"using-react"}})]),e._v(" "),r("h3",{attrs:{id:"usando-react"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usando-react"}},[e._v("#")]),e._v(" Usando React")]),e._v(" "),r("p",[e._v("Si prefieres usar React para construir tu aplicación de JavaScript, Laravel hace que sea una tarea fácil la de intercambiar la estructura de Vue con la de React:")]),e._v(" "),r("div",{staticClass:"language-terminal extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("composer require laravel/ui --dev\n\nphp artisan ui react\n\n// Generando la estructura de login y registro\nphp artisan ui react --auth\n")])])]),r("p",[e._v("Este único comando removerá la estructuración de Vue y la reemplazará con la de React, incluyendo un componente de ejemplo.")]),e._v(" "),r("p",[r("a",{attrs:{name:"adding-presets"}})]),e._v(" "),r("h3",{attrs:{id:"agregando-presets"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#agregando-presets"}},[e._v("#")]),e._v(" Agregando Presets")]),e._v(" "),r("p",[e._v('Los ajustes prestablecidos son "macroable", lo que te permite agregar métodos adicionales a la clase '),r("code",[e._v("UiCommand")]),e._v(" en tiempo de ejecución. Por ejemplo, el siguiente código agrega un método "),r("code",[e._v("nextjs")]),e._v(" a la clase "),r("code",[e._v("UiCommand")]),e._v(" . Por lo general debes declarar macros prestablecidos en un "),r("router-link",{attrs:{to:"/providers.html"}},[e._v("proveedor de servicios")]),e._v(":")],1),e._v(" "),r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token package"}},[e._v("Laravel"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Ui"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("UiCommand")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nUiCommand"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("macro")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'nextjs'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("UiCommand "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$command")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Estructura de tu frontend...")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("p",[e._v("Luego, puedes llamar al nuevo preset a través del comando "),r("code",[e._v("ui")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language-terminal extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("php artisan ui nextjs\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);