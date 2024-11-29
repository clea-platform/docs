"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[340],{2239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"clea-101/platform_architecture","title":"Platform Architecture","description":"The Clea platform consists of core components, which communicate to offer all the advantages of a complete, modular and scalable solution.","source":"@site/docs/1_clea-101/1-platform_architecture.md","sourceDirName":"1_clea-101","slug":"/clea-101/platform_architecture","permalink":"/clea-101/platform_architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2}}');var s=n(4848),r=n(8453);const o={sidebar_position:2},i="Platform Architecture",c={},l=[{value:"Clea Portal",id:"clea-portal",level:2},{value:"Edgehog",id:"edgehog",level:2},{value:"Astarte",id:"astarte",level:2},{value:"Tech stack",id:"tech-stack",level:2}];function d(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"platform-architecture",children:"Platform Architecture"})}),"\n",(0,s.jsx)(t.p,{children:"The Clea platform consists of core components, which communicate to offer all the advantages of a complete, modular and scalable solution."}),"\n",(0,s.jsx)(t.p,{children:"The image below shows the interaction between the field devices and the Clea components."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Clea Architecture",src:n(4960).A+"",width:"2100",height:"1875"})}),"\n",(0,s.jsx)(t.h2,{id:"clea-portal",children:"Clea Portal"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Clea Portal"})," implements the user-facing part of Clea. It uses the APIs (",(0,s.jsx)(t.em,{children:"REST"})," and ",(0,s.jsx)(t.em,{children:"GraphQL"}),") provided by the other components ",(0,s.jsx)(t.strong,{children:"Astarte"})," and ",(0,s.jsx)(t.strong,{children:"Edgehog"})," to provide visual information about data, appliances (devices) and the whole fleet, while also embedding\nadvanced services."]}),"\n",(0,s.jsx)(t.p,{children:"Clea Portal also allows you to create and manage users and their roles to set the proper permissions to the correct accounts granularly. You can also control the various project organizations, allowing the device vendor to assign appliances to the right organizations, such as distributors or end-users."}),"\n",(0,s.jsxs)(t.p,{children:["One of the main features of the Clea portal is that the user interface is highly customizable, allowing developers to create custom themes and even custom data visualization interfaces called ",(0,s.jsx)(t.strong,{children:"Clea Portal Apps"}),".",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/get_started/create_a_clea_portal_app",children:"Clea Portal Apps"})," interfaces can be developed with ",(0,s.jsx)(t.em,{children:"JS"})," and ",(0,s.jsx)(t.em,{children:"HTML5"})," with the possibility to add custom backends in any language. Moreover, they can be hosted anywhere and loaded dynamically by Clea.",(0,s.jsx)(t.br,{}),"\n","Inside the ",(0,s.jsx)(t.a,{href:"/clea_portal_walkthrough/clea_portal",children:"walkthrough section"}),", you can find all the indications for using the portal."]}),"\n",(0,s.jsx)(t.h2,{id:"edgehog",children:"Edgehog"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Edgehog"})," is an Open Source IoT platform focused on device fleet management. The platform takes care of the entire lifecycle of devices, allowing fundamental operations such as deploying update campaigns, device status and connection information monitor, geolocation, file transfers, and much more."]}),"\n",(0,s.jsx)(t.p,{children:"Edgehog is built upon Astarte, and it exchanges data with it using REST API and Astarte Triggers to communicate with the devices."}),"\n",(0,s.jsx)(t.p,{children:"Edgehog provides information to the outside world via the GraphQL API and uses PostgreSQL to store its data."}),"\n",(0,s.jsxs)(t.p,{children:["You can find more information regarding the Edgehog project on its ",(0,s.jsx)(t.a,{href:"https://edgehog-device-manager.github.io/docs/snapshot/intro_user.html#content",children:"documentation pages"})," and in ",(0,s.jsx)(t.a,{href:"https://github.com/edgehog-device-manager",children:"Edgehog's Github"})," page."]}),"\n",(0,s.jsx)(t.h2,{id:"astarte",children:"Astarte"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Astarte"})," is an Open Source IoT platform focused on Data Management. It takes care of the entire data lifecycle, from data collection from devices to delivering data to end-user applications such as Clea Portal. It uses a set of mechanisms and paradigms to store organized data and make it available via REST-APIs, to enable services such as third-party applications."]}),"\n",(0,s.jsxs)(t.p,{children:["It is a native Kubernetes platform and uses standard protocols and open source components (e.g., ",(0,s.jsx)(t.em,{children:"MQTT, BSON, JSON, RabbitMQ, Grafana"}),").\nIts trigger engine can also generate push events based on specific conditions that users can define for particular use cases."]}),"\n",(0,s.jsxs)(t.p,{children:["You can find more information regarding the Astarte project in its ",(0,s.jsx)(t.a,{href:"https://docs.astarte-platform.org/latest/001-intro_user.html",children:"documentation pages"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/astarte-platform",children:"Astarte's Github"})," page."]}),"\n",(0,s.jsx)(t.h2,{id:"tech-stack",children:"Tech stack"}),"\n",(0,s.jsx)(t.p,{children:"The Clea platform uses the following third-party components:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Docker"}),": all services of the Clea platform are deployed inside Docker containers."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Kubernetes"}),": a container orchestrator on which the Clea platform is deployed. It is possible to deploy the solution on compatible cloud environments such as GKE."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RabbitMQ"}),": AMQP broker used for communication between the microservices part of Astarte."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Cassandra/ScyllaDB"}),": NoSQL database used by Astarte for storing device status and time series, if any."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"PostgreSQL"}),": SQL database in which Clea Portal and Edgehog stores management information on devices."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"VerneMQ"}),": MQTT broker used by default by Astarte for communication with field devices. An Astarte plugin is installed inside."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The following standard protocols, formats, or conventions are also used:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"TLS"}),": all communications are encrypted, and SSL mutual authentication is used between devices and the cloud."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"MQTT"}),": for connecting devices with the cloud."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"AMQP"}),": for internal communication between microservices belonging to Astarte."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"HTTP, REST"}),": to interact with the Astarte API that allows to send data to the devices or read the device status."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"HTTP, GraphQL"}),": to interact with Edgehog API that allows using advanced device and fleet management functionalities."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"JWT"}),": access to the API is controlled using signed JWT tokens."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"JSON"}),": the API returns data formatted in JSON."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"BSON"}),": used internally in MQTT payloads to devices to provide structured data similar to JSON but saving bandwidth."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4960:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/clea_architecture-fd8a6adb000058a114b89c9ee553fa13.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);