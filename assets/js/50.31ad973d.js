(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{340:function(a,e,s){"use strict";s.r(e);var t=s(38),n=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{pre:!0},[s("h1",{pre:!0,attrs:{id:"configuracion-regional"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#configuracion-regional","aria-hidden":"true"}},[a._v("#")]),a._v(" Configuración Regional")]),a._v(" "),s("ul",[s("li",[s("a",{pre:!0,attrs:{href:"#introduction"}},[a._v("Introducción")]),a._v(" "),s("ul",[s("li",[s("a",{pre:!0,attrs:{href:"#configuring-the-locale"}},[a._v("Configurando la configuración regional")])])])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#defining-translation-strings"}},[a._v("Definiendo cadenas de traducciones")]),a._v(" "),s("ul",[s("li",[s("a",{pre:!0,attrs:{href:"#using-short-keys"}},[a._v("Usando claves cortas")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#using-translation-strings-as-keys"}},[a._v("Usando cadenas de traducciones como claves")])])])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#retrieving-translation-strings"}},[a._v("Retornando cadenas de traducciones")]),a._v(" "),s("ul",[s("li",[s("a",{pre:!0,attrs:{href:"#replacing-parameters-in-translation-strings"}},[a._v("Reemplazando parametros en cadenas de traducciones")])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#pluralization"}},[a._v("Pluralización")])])])]),a._v(" "),s("li",[s("a",{pre:!0,attrs:{href:"#overriding-package-language-files"}},[a._v("Sobrescribiendo archivos del paquete de idioma")])])]),a._v(" "),s("p",[s("a",{pre:!0,attrs:{name:"introduction"}})]),a._v(" "),s("h2",{pre:!0,attrs:{id:"introduccion"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion","aria-hidden":"true"}},[a._v("#")]),a._v(" Introducción")]),a._v(" "),s("p",[a._v("Las características de configuración regional de Laravel proporcionan una forma conveniente de retornar cadenas en varios idiomas, permitiéndote soportar fácilmente múltiples idiomas en tu aplicación. Las cadenas de idiomas son almacenadas en archivos dentro del directorio "),s("code",[a._v("resources/lang")]),a._v(". Dentro de este directorio debería haber un subdirectorio para cada idioma soportado por la aplicación:")]),a._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("resources\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lang\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("en\n            messages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("php\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("es\n            messages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("php\n")])])]),s("p",[a._v("Todos los archivos de idioma retornan un arreglo de cadenas con sus claves. Por ejemplo:")]),a._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'welcome'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Welcome to our application'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),s("p",[s("a",{pre:!0,attrs:{name:"configuring-the-locale"}})]),a._v(" "),s("h3",{pre:!0,attrs:{id:"configurando-la-configuracion-regional"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#configurando-la-configuracion-regional","aria-hidden":"true"}},[a._v("#")]),a._v(" Configurando la configuración regional")]),a._v(" "),s("p",[a._v("El idioma por defecto para tu aplicación se almacena en el archivo de configuración "),s("code",[a._v("config/app.php")]),a._v(". Puedes modificar este valor en base a las necesidades de tu aplicación. También puedes cambiar el idioma activo en tiempo de ejecución usando el método "),s("code",[a._v("setLocale")]),a._v(" en el facade "),s("code",[a._v("App")]),a._v(":")]),a._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[a._v("Route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'welcome/{locale}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setLocale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v('Puedes configurar un "idioma alternativo", que será usado cuando el idioma activo no contiene una determinada cadena de traducción. Al igual que el idioma por defecto, el idioma alternativo también es configurado en el archivo de configuración '),s("code",[a._v("config/app.php")]),a._v(":")]),a._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'fallback_locale'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("h4",{pre:!0,attrs:{id:"determinando-la-configuracion-regional-actual"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#determinando-la-configuracion-regional-actual","aria-hidden":"true"}},[a._v("#")]),a._v(" Determinando la configuración regional actual")]),a._v(" "),s("p",[a._v("Puedes usar los métodos "),s("code",[a._v("getLocale")]),a._v(" y "),s("code",[a._v("isLocale")]),a._v(" en el facade "),s("code",[a._v("App")]),a._v(" para determinar la configuración regional actual o comprobar si la configuración tiene un valor dado:")]),a._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$locale")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getLocale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("isLocale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("a",{pre:!0,attrs:{name:"defining-translation-strings"}})]),a._v(" "),s("h2",{pre:!0,attrs:{id:"definiendo-cadenades-de-traducciones"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#definiendo-cadenades-de-traducciones","aria-hidden":"true"}},[a._v("#")]),a._v(" Definiendo cadenades de traducciones")]),a._v(" "),s("p",[s("a",{pre:!0,attrs:{name:"using-short-keys"}})]),a._v(" "),s("h3",{pre:!0,attrs:{id:"usando-claves-cortas"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#usando-claves-cortas","aria-hidden":"true"}},[a._v("#")]),a._v(" Usando claves cortas")]),a._v(" "),s("p",[a._v("Típicamente, las cadenas de traducciones son almacenadas en archivos dentro del directorio "),s("code",[a._v("resources/lang")]),a._v(". Dentro de este directorio debería haber un directorio para cada idioma soportado por la aplicación:")]),a._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("resources\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lang\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("en\n            messages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("php\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("es\n            messages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("php\n")])])]),s("p",[a._v("Todos los archivos de idioma retornan un arreglo de cadenas con sus claves. Por ejemplo:")]),a._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// resources/lang/en/messages.php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'welcome'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Welcome to our application'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),s("p",[s("a",{pre:!0,attrs:{name:"using-translation-strings-as-keys"}})]),a._v(" "),s("h3",{pre:!0,attrs:{id:"usando-cadenas-de-traducciones-como-claves"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#usando-cadenas-de-traducciones-como-claves","aria-hidden":"true"}},[a._v("#")]),a._v(" Usando cadenas de traducciones como claves")]),a._v(" "),s("p",[a._v('Para aplicaciones con grandes necesidades de traducción, definir cada cadena con una "clave corta" puede volverse confuso rápidamente al hacer referencia a estas en tus vistas. Por este motivo, Laravel también proporciona soporte para definir cadenas de traducciones usando la traducción "por defecto" de la cadena como clave.')]),a._v(" "),s("p",[a._v("Archivos de traducción que usan cadenas de traducción como claves son almacenados como archivos JSON en el directorio "),s("code",[a._v("resources/lang")]),a._v(". Por ejemplo, si tu aplicación tiene una traducción en español, debes crear un archivo "),s("code",[a._v("resources/lang/es.json")]),a._v(":")]),a._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"I love programming."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"Me encanta programar."')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("a",{pre:!0,attrs:{name:"retrieving-translation-strings"}})]),a._v(" "),s("h2",{pre:!0,attrs:{id:"retornando-cadenas-de-traducciones"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#retornando-cadenas-de-traducciones","aria-hidden":"true"}},[a._v("#")]),a._v(" Retornando cadenas de traducciones")]),a._v(" "),s("p",[a._v("Puedes retornar líneas desde archivos de idioma usando la función helper "),s("code",[a._v("__")]),a._v(". La función "),s("code",[a._v("__")]),a._v(" acepta el archivo y la clave de la cadena de traducción como primer argumento. Por ejemplo, vamos a retornar la cadena de traducción de "),s("code",[a._v("welcome")]),a._v(" desde el archivo de idioma "),s("code",[a._v("resources/lang/messages.php")]),a._v(":")]),a._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'messages.welcome'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'I love programming.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Si estás usando el "),s("router-link",{pre:!0,attrs:{to:"/blade.html"}},[a._v("motor de plantillas Blade")]),a._v(", puedes usar la sintaxis "),s("code",[a._v("{{ }}")]),a._v(" para imprimir la cadena de traducción o usar la directiva "),s("code",[a._v("@lang")]),a._v(":")],1),a._v(" "),s("div",{pre:!0,attrs:{class:"language-php extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'messages.welcome'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("lang")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'messages.welcome'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Si la cadena de traducción especificada no existe, la función "),s("code",[a._v("__")]),a._v(" retornará la clave de la cadena de traducción. Así que, usando el ejemplo superior, la función "),s("code",[a._v("__")]),a._v(" retornaría "),s("code",[a._v("messages.welcome")]),a._v(" si la cadena de traducción no existe.")]),a._v(" "),s("div",{pre:!0,attrs:{class:"danger custom-block"}},[s("p",{pre:!0,attrs:{class:"custom-block-title"}},[a._v("Nota")]),a._v(" "),s("p",[a._v("La directiva "),s("code",[a._v("@lang")]),a._v(" no escapa ningún resultado. Eres "),s("strong",[a._v("totalmente responsable")]),a._v(" de escapar la salida al usar esta directiva.")])])]),s("p",[s("a",{attrs:{name:"replacing-parameters-in-translation-strings"}})]),a._v(" "),s("h3",{attrs:{id:"reemplazando-parametros-en-cadenas-de-traducciones"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reemplazando-parametros-en-cadenas-de-traducciones","aria-hidden":"true"}},[a._v("#")]),a._v(" Reemplazando parametros en cadenas de traducciones")]),a._v(" "),s("p",[a._v("Si lo deseas, puedes definir placeholders en tus cadenas de traducción. Todos los placeholders son precedidos por "),s("code",[a._v(":")]),a._v(". Por ejemplo, puedes definir un mensaje de bienvenida con un nombre como placeholder:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'welcome'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Welcome, :name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[a._v("Para reemplazar los placeholders al retornar una cadena de traducción, pasa un arreglo de reemplazos como segundo argumento de la función "),s("code",[a._v("__")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'messages.welcome'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'name'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'dayle'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Si tu placeholder contiene sólo letras mayúsculas o sólo tiene su primera letra en mayúscula, el valor traducido será escrito en mayúsculas de forma correcta:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'welcome'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Welcome, :NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Welcome, DAYLE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'goodbye'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Goodbye, :Name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Goodbye, Dayle")]),a._v("\n")])])]),s("p",[s("a",{attrs:{name:"pluralization"}})]),a._v(" "),s("h3",{attrs:{id:"pluralizacion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pluralizacion","aria-hidden":"true"}},[a._v("#")]),a._v(" Pluralización")]),a._v(" "),s("p",[a._v("La pluralización es un problema complejo, ya que diferentes idiomas tienen una variedad de reglas complejas de pluralización. Usando el símbolo "),s("code",[a._v("|")]),a._v(", puedes distinguir entre las formas singulares y plurales de una cadena:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'apples'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'There is one apple|There are many apples'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[a._v("Puedes incluso crear reglas de pluralización más complejas que especifican cadenas de traducción para múltiples rangos de números:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'apples'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'{0} There are none|[1,19] There are some|[20,*] There are many'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[a._v("Luego de definir una cadena de traducción que tiene opciones de pluralización, puedes usar la función "),s("code",[a._v("trans_choice")]),a._v(' para retornar la línea de un "conteo" dado. En este ejemplo, dado que el conteo es mayor que uno, la forma plural de la cadena de traducción es retornada:')]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("trans_choice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'messages.apples'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("También puedes definir atributos de placeholder en cadenas de pluralización. Estos placeholders pueden ser reemplazados pasando un arreglo como tercer argumento a la función "),s("code",[a._v("trans_choice")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'minutes_ago'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'{1} :value minute ago|[2,*] :value minutes ago'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("trans_choice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'time.minutes_ago'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'value'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Si te gustaría mostrar el valor entero que fue pasado a la función "),s("code",[a._v("trans_choice")]),a._v(", puedes también usar el placeholder "),s("code",[a._v(":count")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'apples'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'{0} There are none|{1} There is one|[2,*] There are :count'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[s("a",{attrs:{name:"overriding-package-language-files"}})]),a._v(" "),s("h2",{attrs:{id:"sobrescribiendo-archivos-del-paquete-de-idioma"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sobrescribiendo-archivos-del-paquete-de-idioma","aria-hidden":"true"}},[a._v("#")]),a._v(" Sobrescribiendo archivos del paquete de idioma")]),a._v(" "),s("p",[a._v("Algunos paquetes pueden venir con sus propios archivos de idioma. En lugar de cambiar los archivos principales del paquete para modificar esas líneas, puedes sobrescribirlas colocando archivos en el directorio "),s("code",[a._v("resources/lang/vendor/{package}/{locale}")]),a._v(".")]),a._v(" "),s("p",[a._v("Así que, por ejemplo, si necesitas sobrescribir las cadenas de traducción en inglés en "),s("code",[a._v("messages.php")]),a._v(" para un paquete llamado "),s("code",[a._v("skyrim/hearthfire")]),a._v(", debes colocar un archivo de idioma en: "),s("code",[a._v("resources/lang/vendor/hearthfire/en/messages.php")]),a._v(". Dentro de este archivo, debes sólo definir las cadenas de traducción que deseas sobrescribir. Cualquier cadena de traducción que no sobrescribas será cargada desde los archivos de idioma originales del paquete.")])])},[],!1,null,null,null);e.default=n.exports}}]);