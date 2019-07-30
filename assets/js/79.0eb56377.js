(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{334:function(e,a,t){"use strict";t.r(a);var s=t(38),n=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{pre:!0},[t("h1",{pre:!0,attrs:{id:"pruebas-primeros-pasos"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#pruebas-primeros-pasos","aria-hidden":"true"}},[e._v("#")]),e._v(" Pruebas: Primeros Pasos")]),e._v(" "),t("ul",[t("li",[t("a",{pre:!0,attrs:{href:"#introduction"}},[e._v("Introducción")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#environment"}},[e._v("Entorno")])]),e._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#creating-and-running-tests"}},[e._v("Creando y ejecutando pruebas")])])]),e._v(" "),t("p",[t("a",{pre:!0,attrs:{name:"introduction"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"introduccion"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion","aria-hidden":"true"}},[e._v("#")]),e._v(" Introducción")]),e._v(" "),t("p",[e._v("Laravel está construido pensando en las pruebas. De hecho, el soporte para pruebas con PHPUnit es incluido de forma predeterminada y un archivo "),t("code",[e._v("phpunit.xml")]),e._v(" ya está configurado para tu aplicación. El framework también viene con métodos de ayuda convenientes que permiten que pruebes tus aplicaciones de forma expresiva.")]),e._v(" "),t("p",[e._v("De forma predeterminada, el directorio "),t("code",[e._v("tests")]),e._v(" de tu aplicación contiene dos directorios: "),t("code",[e._v("Feature")]),e._v(" y "),t("code",[e._v("Unit")]),e._v(". Las pruebas unitarias (Unit) son pruebas que se enfocan en una muy pequeña porción aislada de tu código. De hecho, la mayoría de las pruebas unitarias se enfocan probablemente en un solo método. Las pruebas funcionales (Feature) pueden probar una porción más grande de tu código, incluyendo la forma en la que varios objetos interactúan entre sí e incluso una solicitud HTTP completa para un endpoint de JSON.")]),e._v(" "),t("p",[e._v("Un archivo "),t("code",[e._v("ExampleTest.php")]),e._v(" es proporcionado en ambos directorios de prueba "),t("code",[e._v("Feature")]),e._v(" y "),t("code",[e._v("Unit")]),e._v(". Después de instalar una nueva aplicación de Laravel, ejecuta "),t("code",[e._v("phpunit")]),e._v(" en la línea de comandos para ejecutar tus pruebas.")]),e._v(" "),t("p",[t("a",{pre:!0,attrs:{name:"environment"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"entorno"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#entorno","aria-hidden":"true"}},[e._v("#")]),e._v(" Entorno")]),e._v(" "),t("p",[e._v("Al momento de ejecutar las pruebas por medio de "),t("code",[e._v("phpunit")]),e._v(", Laravel establecerá automáticamente el entorno de configuración a "),t("code",[e._v("testing")]),e._v(" debido a las variables de entorno definidas en el archivo "),t("code",[e._v("phpunit.xml")]),e._v(". Laravel también configura automáticamente la sesión y cache del manejador "),t("code",[e._v("array")]),e._v(" al momento de ejecutar las pruebas, lo que significa que ninguna sesión o cache de datos será conservada mientras las pruebas son ejecutadas.")]),e._v(" "),t("p",[e._v("Eres libre de definir otros valores de configuración del entorno de pruebas cuando sea necesario. Las variables de entorno "),t("code",[e._v("testing")]),e._v(" pueden ser configuradas en el archivo "),t("code",[e._v("phpunit.xml")]),e._v(", pero ¡asegurate de limpiar tu cache de configuración usando el comando Artisan "),t("code",[e._v("config:clear")]),e._v(" antes de ejecutar tus pruebas!")]),e._v(" "),t("p",[e._v("Además, puedes crear un archivo "),t("code",[e._v(".env.testing")]),e._v(" en la raíz de tu proyecto. Este archivo anulará el archivo "),t("code",[e._v(".env")]),e._v(" cuando ejecute las pruebas PHPUnit o cuando ejecute los comandos de Artisan con la opción "),t("code",[e._v("--env = testing")]),e._v(".")]),e._v(" "),t("p",[t("a",{pre:!0,attrs:{name:"creating-and-running-tests"}})]),e._v(" "),t("h2",{pre:!0,attrs:{id:"creando-y-ejecutando-pruebas"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#creando-y-ejecutando-pruebas","aria-hidden":"true"}},[e._v("#")]),e._v(" Creando y ejecutando pruebas")]),e._v(" "),t("p",[e._v("Para crear un nuevo caso de prueba, usa el comando Artisan "),t("code",[e._v("make:test")]),e._v(":")]),e._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Create a test in the Feature directory...")]),e._v("\nphp artisan make"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("test UserTest\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Create a test in the Unit directory...")]),e._v("\nphp artisan make"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("test UserTest "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("unit\n")])])]),t("p",[e._v("Una vez que la prueba ha sido generada, puedes definir métodos de pruebas como lo harías normalmente usando PHPUnit. Para ejecutar tus pruebas, ejecuta el comando "),t("code",[e._v("phpunit")]),e._v(" desde tu terminal:")]),e._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Tests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Unit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Tests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("TestCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Foundation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Testing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("RefreshDatabase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ExampleTest")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TestCase")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n    * A basic test example.\n    *\n    * @return void\n    */")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("testBasicTest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("assertTrue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean constant"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),t("div",{pre:!0,attrs:{class:"danger custom-block"}},[t("p",{pre:!0,attrs:{class:"custom-block-title"}},[e._v("Nota")]),e._v(" "),t("p",[e._v("Si defines tus propios métodos "),t("code",[e._v("setUp")]),e._v(" / "),t("code",[e._v("tearDown")]),e._v(" dentro de una clase de prueba, asegurate de ejecutar los respectivos "),t("code",[e._v("parent::setUp()")]),e._v(" / "),t("code",[e._v("parent::tearDown()")]),e._v(" metodos en la clase padre.")])])])])},[],!1,null,null,null);a.default=n.exports}}]);