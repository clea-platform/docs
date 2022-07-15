"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2},i="Platform Architecture",l={unversionedId:"clea-101/platform_architecture",id:"clea-101/platform_architecture",title:"Platform Architecture",description:"The Clea platform consists of core components, which communicate to offer all the advantages of a complete, modular and scalable solution.",source:"@site/docs/1_clea-101/1-platform_architecture.md",sourceDirName:"1_clea-101",slug:"/clea-101/platform_architecture",permalink:"/clea-101/platform_architecture",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Clea",permalink:"/"},next:{title:"Glossary",permalink:"/clea-101/glossary"}},s={},c=[{value:"Clea Portal",id:"clea-portal",level:2},{value:"Edgehog",id:"edgehog",level:2},{value:"Astarte",id:"astarte",level:2},{value:"Tech stack",id:"tech-stack",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"platform-architecture"},"Platform Architecture"),(0,n.kt)("p",null,"The Clea platform consists of core components, which communicate to offer all the advantages of a complete, modular and scalable solution.  "),(0,n.kt)("p",null,"The image below shows the interaction between the field devices and the Clea components."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Clea Architecture",src:a(9266).Z,width:"2100",height:"1875"})),(0,n.kt)("h2",{id:"clea-portal"},"Clea Portal"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Clea Portal")," implements the user-facing part of Clea. It uses the APIs (",(0,n.kt)("em",{parentName:"p"},"REST")," and ",(0,n.kt)("em",{parentName:"p"},"GraphQL"),") provided by the other components ",(0,n.kt)("strong",{parentName:"p"},"Astarte")," and ",(0,n.kt)("strong",{parentName:"p"},"Edgehog")," to provide visual information about data, appliances (devices) and the whole fleet, while also embedding\nadvanced services."),(0,n.kt)("p",null,"Clea Portal also allows you to create and manage users and their roles to set the proper permissions to the correct accounts granularly. You can also control the various project organizations, allowing the device vendor to assign appliances to the right organizations, such as distributors or end-users."),(0,n.kt)("p",null,"One of the main features of the Clea portal is that the user interface is highly customizable, allowing developers to create custom themes and even custom data visualization interfaces called ",(0,n.kt)("strong",{parentName:"p"},"Clea Portal Apps"),".",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/get_started/create_a_clea_portal_app"},"Clea Portal Apps")," interfaces can be developed with ",(0,n.kt)("em",{parentName:"p"},"JS")," and ",(0,n.kt)("em",{parentName:"p"},"HTML5")," with the possibility to add custom backends in any language. Moreover, they can be hosted anywhere and loaded dynamically by Clea.",(0,n.kt)("br",{parentName:"p"}),"\n","Inside the ",(0,n.kt)("a",{parentName:"p",href:"/clea_portal_walkthrough/clea_portal"},"walkthrough section"),", you can find all the indications for using the portal."),(0,n.kt)("h2",{id:"edgehog"},"Edgehog"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Edgehog")," is an Open Source IoT platform focused on device fleet management. The platform takes care of the entire lifecycle of devices, allowing fundamental operations such as deploying update campaigns, device status and connection information monitor, geolocation, file transfers, and much more."),(0,n.kt)("p",null,"Edgehog is built upon Astarte, and it exchanges data with it using REST API and Astarte Triggers to communicate with the devices."),(0,n.kt)("p",null,"Edgehog provides information to the outside world via the GraphQL API and uses PostgreSQL to store its data."),(0,n.kt)("p",null,"You can find more information regarding the Edgehog project on its ",(0,n.kt)("a",{parentName:"p",href:"https://edgehog-device-manager.github.io/docs/snapshot/intro_user.html#content"},"documentation pages")," and in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/edgehog-device-manager"},"Edgehog's Github")," page."),(0,n.kt)("h2",{id:"astarte"},"Astarte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Astarte")," is an Open Source IoT platform focused on Data Management. It takes care of the entire data lifecycle, from data collection from devices to delivering data to end-user applications such as Clea Portal. It uses a set of mechanisms and paradigms to store organized data and make it available via REST-APIs, to enable services such as third-party applications."),(0,n.kt)("p",null,"It is a native Kubernetes platform and uses standard protocols and open source components (e.g., ",(0,n.kt)("em",{parentName:"p"},"MQTT, BSON, JSON, RabbitMQ, Grafana"),").\nIts trigger engine can also generate push events based on specific conditions that users can define for particular use cases."),(0,n.kt)("p",null,"You can find more information regarding the Astarte project in its ",(0,n.kt)("a",{parentName:"p",href:"https://docs.astarte-platform.org/latest/001-intro_user.html"},"documentation pages")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/astarte-platform"},"Astarte's Github")," page."),(0,n.kt)("h2",{id:"tech-stack"},"Tech stack"),(0,n.kt)("p",null,"The Clea platform uses the following third-party components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Docker"),": all services of the Clea platform are deployed inside Docker containers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Kubernetes"),": a container orchestrator on which the Clea platform is deployed. It is possible to deploy the solution on compatible cloud environments such as GKE."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RabbitMQ"),": AMQP broker used for communication between the microservices part of Astarte."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cassandra/ScyllaDB"),": NoSQL database used by Astarte for storing device status and time series, if any."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PostgreSQL"),": SQL database in which Clea Portal and Edgehog stores management information on devices."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"VerneMQ"),": MQTT broker used by default by Astarte for communication with field devices. An Astarte plugin is installed inside.")),(0,n.kt)("p",null,"The following standard protocols, formats, or conventions are also used:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TLS"),": all communications are encrypted, and SSL mutual authentication is used between devices and the cloud."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MQTT"),": for connecting devices with the cloud."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AMQP"),": for internal communication between microservices belonging to Astarte."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTTP, REST"),": to interact with the Astarte API that allows to send data to the devices or read the device status."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTTP, GraphQL"),": to interact with Edgehog API that allows using advanced device and fleet management functionalities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JWT"),": access to the API is controlled using signed JWT tokens."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JSON"),": the API returns data formatted in JSON."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BSON"),": used internally in MQTT payloads to devices to provide structured data similar to JSON but saving bandwidth.")))}d.isMDXComponent=!0},9266:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/clea_architecture-fd8a6adb000058a114b89c9ee553fa13.png"}}]);