"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[73],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(r),m=o,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3,title:"\ud83d\udc33 Custom Dockerfile"},i="Custom Dockerfile \ud83d\udc33",c={unversionedId:"advanced/custom_dockerfile",id:"advanced/custom_dockerfile",title:"\ud83d\udc33 Custom Dockerfile",description:"A Dockerfile is automatically generated when creating a production build via the dart_frog build command.",source:"@site/docs/advanced/custom_dockerfile.md",sourceDirName:"advanced",slug:"/advanced/custom_dockerfile",permalink:"/docs/advanced/custom_dockerfile",draft:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/advanced/custom_dockerfile.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udc33 Custom Dockerfile"},sidebar:"docs",previous:{title:"\ud83d\udeeb Custom Init Method",permalink:"/docs/advanced/custom_init_method"},next:{title:"\ud83d\udd0c WebSockets",permalink:"/docs/advanced/web_socket"}},l={},d=[],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-dockerfile-"},"Custom Dockerfile \ud83d\udc33"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is automatically generated when creating a production build via the ",(0,o.kt)("inlineCode",{parentName:"p"},"dart_frog build")," command."),(0,o.kt)("p",null,"To use a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," at the root of the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Dockerfile <-- NEW\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 analysis_options.yaml\n\u251c\u2500\u2500 pubspec.lock\n\u251c\u2500\u2500 pubspec.yaml\n\u251c\u2500\u2500 routes\n\u2502   \u2514\u2500\u2500 index.dart\n\u2514\u2500\u2500 test\n    \u2514\u2500\u2500 routes\n        \u2514\u2500\u2500 index_test.dart\n")),(0,o.kt)("p",null,"The following ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is a good starting point:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# An example of using a custom Dockerfile with Dart Frog\n# Official Dart image: https://hub.docker.com/_/dart\n# Specify the Dart SDK base image version using dart:<version> (ex: dart:2.17)\nFROM dart:stable AS build\n\nWORKDIR /app\n\n# Resolve app dependencies.\nCOPY pubspec.* ./\nRUN dart pub get\n\n# Copy app source code and AOT compile it.\nCOPY . .\n\n# Generate a production build.\nRUN dart pub global activate dart_frog_cli\nRUN dart pub global run dart_frog_cli:dart_frog build\n\n# Ensure packages are still up-to-date if anything has changed.\nRUN dart pub get --offline\nRUN dart compile exe build/bin/server.dart -o build/bin/server\n\n# Build minimal serving image from AOT-compiled `/server` and required system\n# libraries and configuration files stored in `/runtime/` from the build stage.\nFROM scratch\nCOPY --from=build /runtime/ /\nCOPY --from=build /app/build/bin/server /app/bin/\n# Uncomment the following line if you are serving static files.\n# COPY --from=build /app/build/public /public/\n\n# Start the server.\nCMD ["/app/bin/server"]\n')),(0,o.kt)("p",null,"To build your Docker image run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker build . -t dart-frog-app\n")),(0,o.kt)("p",null,"Then, run your Docker container via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -i -t -p 8080:8080 dart-frog-app\n")))}u.isMDXComponent=!0}}]);