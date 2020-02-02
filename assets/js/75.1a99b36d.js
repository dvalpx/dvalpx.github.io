(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{283:function(a,s,e){"use strict";e.r(s);var t=e(0),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("div",{pre:!0},[e("h1",{pre:!0,attrs:{id:"base-de-datos-seeding"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#base-de-datos-seeding"}},[a._v("#")]),a._v(" Base de datos: Seeding")]),a._v(" "),e("ul",[e("li",[e("a",{pre:!0,attrs:{href:"#introduction"}},[a._v("Introducción")])]),a._v(" "),e("li",[e("a",{pre:!0,attrs:{href:"#writing-seeders"}},[a._v("Escribiendo seeders")]),a._v(" "),e("ul",[e("li",[e("a",{pre:!0,attrs:{href:"#using-model-factories"}},[a._v("Usando model factories")])]),a._v(" "),e("li",[e("a",{pre:!0,attrs:{href:"#calling-additional-seeders"}},[a._v("Registrando seeders adicionales")])])])]),a._v(" "),e("li",[e("a",{pre:!0,attrs:{href:"#running-seeders"}},[a._v("Ejecutando seeders")])])]),a._v(" "),e("p",[e("a",{pre:!0,attrs:{name:"introduction"}})]),a._v(" "),e("h2",{pre:!0,attrs:{id:"introduccion"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion"}},[a._v("#")]),a._v(" Introducción")]),a._v(" "),e("p",[a._v("Laravel incluye un método sencillo para alimentar tu base de datos con datos de prueba usando clases "),e("code",[a._v("Seeder")]),a._v(". Todas las clases "),e("code",[a._v("Seeder")]),a._v(" son almacenadas en el directorio "),e("code",[a._v("database/seeds")]),a._v(". Las clases "),e("code",[a._v("Seeder")]),a._v(" pueden tener cualquier nombre que desees, pero deberías seguir probablemente alguna convención razonable, tales como "),e("code",[a._v("UsersTableSeeder")]),a._v(" etc. De forma predeterminada, una clase "),e("code",[a._v("DatabaseSeeder")]),a._v(" se define para tí. A partir de esta clase, puedes usar el método "),e("code",[a._v("call")]),a._v(" para registrar otras clases seeder, permitiendo que controles el orden en que se ejecutan.")]),a._v(" "),e("p",[e("a",{pre:!0,attrs:{name:"writing-seeders"}})]),a._v(" "),e("h2",{pre:!0,attrs:{id:"escribiendo-seeders"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#escribiendo-seeders"}},[a._v("#")]),a._v(" Escribiendo seeders")]),a._v(" "),e("p",[a._v("Para generar un seeder, ejecuta el "),e("RouterLink",{pre:!0,attrs:{to:"/artisan.html"}},[a._v("Comando Artisan")]),a._v(" "),e("code",[a._v("make:seeder")]),a._v(". Todos los seeders generados por el framework seran colocados en el directorio "),e("code",[a._v("database/seeds")]),a._v(":")],1),a._v(" "),e("div",{pre:!0,attrs:{class:"language-php extra-class"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[e("code",[a._v("php artisan make"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("seeder UsersTableSeeder\n")])])]),e("p",[a._v("Una clase seeder contiene solamente un método de forma predeterminada: "),e("code",[a._v("run")]),a._v(". Este método es ejecutado cuando el "),e("RouterLink",{pre:!0,attrs:{to:"/artisan.html"}},[a._v("Comando Artisan")]),a._v(" "),e("code",[a._v("db:seed")]),a._v(" se ejecuta. Dentro del método "),e("code",[a._v("run")]),a._v(", puedes insertar datos en tu base de datos en la forma que desees. Puedes usar el "),e("RouterLink",{pre:!0,attrs:{to:"/queries.html"}},[a._v("constructor de consultas")]),a._v(" para insertar datos manualmente o puedes usar los "),e("RouterLink",{pre:!0,attrs:{to:"/database-testing.html#writing-factories"}},[a._v("Model Factories de Eloquent")]),a._v(".")],1),a._v(" "),e("div",{pre:!0,attrs:{class:"custom-block tip"}},[e("p",{pre:!0,attrs:{class:"custom-block-title"}},[a._v("TIP")]),a._v(" "),e("p",[e("RouterLink",{pre:!0,attrs:{to:"/eloquent.html#mass-assignment"}},[a._v("La protección de asignación en masa")]),a._v(" es deshabilitada automáticamente durante el seeding de la base de datos.")],1)])]),e("p",[a._v("Como un ejemplo, vamos a modificar la clase "),e("code",[a._v("DatabaseSeeder")]),a._v(" predeterminada y agregar una instrucción insert al método "),e("code",[a._v("run")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Seeder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Facades"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("DB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Facades"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Hash")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DatabaseSeeder")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Seeder")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n    * Run the database seeds.\n    *\n    * @return void\n    */")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("table")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'users'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("insert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'name'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("random")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'email'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("random")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'@gmail.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'password'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Hash"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'password'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Puede escribir cualquier dependencia que necesite dentro de la firma del método "),e("code",[a._v("run")]),a._v(". Se resolverán automáticamente a través del "),e("RouterLink",{attrs:{to:"/container.html"}},[a._v("contenedor de servicio")]),a._v(" de Laravel.")],1)]),a._v(" "),e("p",[e("a",{attrs:{name:"using-model-factories"}})]),a._v(" "),e("h3",{attrs:{id:"usando-model-factories"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usando-model-factories"}},[a._v("#")]),a._v(" Usando model factories")]),a._v(" "),e("p",[a._v("Ciertamente, especificar manualmente los atributos para cada seeder de modelos es lento y complicado. En lugar de eso, puedes usar "),e("RouterLink",{attrs:{to:"/database-testing.html#writing-factories"}},[a._v("Model Factories")]),a._v(" para generar convenientemente cantidades grandes de registros de bases de datos. Primero, revisa la "),e("RouterLink",{attrs:{to:"/database-testing.html#writing-factories"}},[a._v("documentación sobre model factories")]),a._v(" para aprender cómo definir tus factories. Una vez que hayas definido tus factories, puedes usar la función helper "),e("code",[a._v("factory")]),a._v(" para insertar registros dentro de tu base de datos.")],1),a._v(" "),e("p",[a._v("Por ejemplo, vamos a crear 50 usuarios y establecer una asociación con los posts para cada usuario:")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n* Run the database seeds.\n*\n* @return void\n*/")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("factory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("App\\"),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("User")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("each")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("posts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("save")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("factory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("App\\"),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Post")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[e("a",{attrs:{name:"calling-additional-seeders"}})]),a._v(" "),e("h3",{attrs:{id:"registrando-seeders-adicionales"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registrando-seeders-adicionales"}},[a._v("#")]),a._v(" Registrando seeders adicionales")]),a._v(" "),e("p",[a._v("Dentro de la clase "),e("code",[a._v("DatabaseSeeder")]),a._v(", puedes usar el método "),e("code",[a._v("call")]),a._v(" para ejecutar clases seeder adicionales. Usar el método "),e("code",[a._v("call")]),a._v(" te permite separar el seeding de tu base de datos en varios archivos con el propósito de que no exista una clase seeder única que se vuelva extremadamente grande. Pasa el nombre de la clase seeder que deseas ejecutar:")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n* Run the database seeds.\n*\n* @return void\n*/")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n        UsersTableSeeder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        PostsTableSeeder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        CommentsTableSeeder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[e("a",{attrs:{name:"running-seeders"}})]),a._v(" "),e("h2",{attrs:{id:"ejecutando-seeders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ejecutando-seeders"}},[a._v("#")]),a._v(" Ejecutando seeders")]),a._v(" "),e("p",[a._v("Una vez que hayas escrito tu seeder, puedes necesitar regenerar el cargador automático de Composer usando el comando "),e("code",[a._v("dump-autoload")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[a._v("composer dump"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("autoload\n")])])]),e("p",[a._v("Ahora puedes usar el comando Artisan "),e("code",[a._v("db:seed")]),a._v(" para alimentar tu base de datos. De forma predeterminada, el comando "),e("code",[a._v("db:seed")]),a._v(" ejecuta la clase "),e("code",[a._v("DatabaseSeeder")]),a._v(", la cual puede ser usada para ejecutar otras clases seeder. Sin embargo, puedes usar la opción "),e("code",[a._v("--class")]),a._v(" para especificar que una clase seeder específica se ejecute individualmente:")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[a._v("php artisan db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("seed\n\nphp artisan db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("seed "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("UsersTableSeeder\n")])])]),e("p",[a._v("También puedes alimentar tu base de datos usando el comando "),e("code",[a._v("migrate:fresh")]),a._v(", el cual eliminará todas las tablas y volverá a ejecutar todas tus migraciones. Este comando es útil para reconstruir tu base de datos completamente:")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[a._v("php artisan migrate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("fresh "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("seed\n")])])]),e("h4",{attrs:{id:"forzar-la-ejecucion-de-seeders-en-produccion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forzar-la-ejecucion-de-seeders-en-produccion"}},[a._v("#")]),a._v(" Forzar la ejecución de seeders en producción")]),a._v(" "),e("p",[a._v("Algunas operaciones de seeding pueden causar que alteres o pierdas datos. Para protegerte de ejecutar comandos de seeding en tu base de datos de producción, te será solicitada una confirmación antes de que los seeders sean ejecutados. Para forzar la ejecución de los seeders sin confirmación, usa la opción "),e("code",[a._v("--force")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[a._v("php artisan db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("seed "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("force\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);