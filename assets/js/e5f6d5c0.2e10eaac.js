"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[957],{1271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"get_started/apis_references","title":"APIs References","description":"Overview","source":"@site/docs/2_get_started/3-apis_references.md","sourceDirName":"2_get_started","slug":"/get_started/apis_references","permalink":"/get_started/apis_references","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3}}');var s=t(4848),i=t(8453);const r={sidebar_position:3},o="APIs References",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Clea Portal GraphQL APIs",id:"clea-portal-graphql-apis",level:2},{value:"Login",id:"login",level:4},{value:"Appliances List",id:"appliances-list",level:4},{value:"Single Appliance Data",id:"single-appliance-data",level:4},{value:"User and Preferences",id:"user-and-preferences",level:4},{value:"Edgehog GraphQL APIs",id:"edgehog-graphql-apis",level:2},{value:"Astarte REST API",id:"astarte-rest-api",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"apis-references",children:"APIs References"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Clea provides a complete set of APIs to interact and manage aspects of the platform and the data it contains. All the main features of Clea are available through the Public APIs of the platform components."}),"\n",(0,s.jsx)(n.p,{children:"Different types of APIs are available depending on the data or functionality you want to access:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Clea Portal"}),": Regarding the data managed by the ",(0,s.jsx)(n.strong,{children:"Clea Portal"}),", it is possible to use the queries made available in the ",(0,s.jsx)(n.strong,{children:"GraphQL"})," language. The information that you can access is, for example, the list of Appliances, the detailed data of the single Appliances, the information about users and roles, and others."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Edgehog"}),": Suppose you want to access the device management features made available by ",(0,s.jsx)(n.strong,{children:"Edgehog"}),". In that case, you can use its ",(0,s.jsx)(n.strong,{children:"GraphQL"})," APIs that allow you to perform monitoring and fleet operations such as update campaigns and others."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Astarte"}),": As far as the data sent by the Appliances and the commands you need to send to the machines are concerned, it is possible to interact directly with the ",(0,s.jsx)(n.strong,{children:"Astarte"})," platform using the Astarte ",(0,s.jsx)(n.strong,{children:"REST API"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These references will help developers integrate Clea services inside their workflow and company applications."}),"\n",(0,s.jsx)(n.h2,{id:"clea-portal-graphql-apis",children:"Clea Portal GraphQL APIs"}),"\n",(0,s.jsxs)(n.p,{children:["The GraphQL APIs are self-describing and easy to understand. You can download the complete query schema with any GraphQL API interaction tool, such as ",(0,s.jsx)(n.a,{href:"https://github.com/Urigo/graphql-cli",children:"graphql-ci"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The URL address of the Clea GraphQL API is different depending on the Tenant."}),"\n",(0,s.jsx)(n.p,{children:"Here are some examples of the most relevant GraphQL queries."}),"\n",(0,s.jsx)(n.h4,{id:"login",children:"Login"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    token\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can use the credentials of a Clea user to login. The user will be able to read information from Clea, according to the permissions set for him via the Clea Portal interface."}),"\n",(0,s.jsx)(n.h4,{id:"appliances-list",children:"Appliances List"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"query GetAppliances {\n  appliances(filter: { assigned: true }) {\n    id\n    name\n    serial\n    tags\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"single-appliance-data",children:"Single Appliance Data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"query GetAppliance($id: ID!) {\n  appliance(id: $id) {\n    id\n    name\n    serial\n    tags\n    device {\n      deviceId\n      realm\n      baseApiUrl\n      online\n      availableApplications {\n        id\n        authToken\n      }\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"user-and-preferences",children:"User and Preferences"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"query GetViewer {\n  viewer {\n    id\n    name\n    email\n    roles {\n      id\n      name\n    }\n    preferences {\n      language\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"edgehog-graphql-apis",children:"Edgehog GraphQL APIs"}),"\n",(0,s.jsxs)(n.p,{children:["Edgehog also provides GraphQL API interfaces. As stated earlier, these are self-describing, and you can download the complete query schema with any GraphQL API interaction tool, such as ",(0,s.jsx)(n.a,{href:"https://github.com/Urigo/graphql-cli",children:"graphql-ci"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can find more information on interacting on devices through Edgehog's API features on the ",(0,s.jsx)(n.a,{href:"https://edgehog-device-manager.github.io/docs/snapshot/interacting_with_edgehog.html#content",children:"official Edgehog documentation"}),".\nEdgehog's GraphQL APIs are also described on this useful ",(0,s.jsx)(n.a,{href:"https://edgehog-device-manager.github.io/docs/snapshot/graphql-api-docs/",children:"API Reference page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"astarte-rest-api",children:"Astarte REST API"}),"\n",(0,s.jsx)(n.p,{children:"Regarding the data sent and the commands to be sent to the machines, it is possible to interact directly with the data contained in the Astarte platform on which Clea relies."}),"\n",(0,s.jsx)(n.p,{children:"For complete documentation of the Astarte APIs, you can consult the following pages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Complete ",(0,s.jsx)(n.a,{href:"https://docs.astarte-platform.org",children:"Astarte documentation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Documentation of the ",(0,s.jsx)(n.a,{href:"https://docs.astarte-platform.org/latest/api/index.html",children:"Astarte Rest APIs"})," released through Swagger files (OpenAPI specifications)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"From the GraphQL queries described in the previous section, it is possible to get the data needed to make the API calls that operate on the Astarte interfaces to request data or send commands to the machine."}),"\n",(0,s.jsx)(n.p,{children:"You can take the base URL and the authorization token values from the GraphQL query that provides the appliance data:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The base URL is ",(0,s.jsx)(n.code,{children:"baseApiUrl"})]}),"\n",(0,s.jsxs)(n.li,{children:["The authorization token ",(0,s.jsx)(n.code,{children:"authToken"})," can be obtained from the ",(0,s.jsx)(n.code,{children:"setup-app"})," entry in the ",(0,s.jsx)(n.code,{children:"availableApplications"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Thanks to these data, it is possible to make REST calls to Astarte APIs. It is also necessary to know the Astarte interfaces used by devices to exchange data for completing the necessary API calls."}),"\n",(0,s.jsx)(n.p,{children:"For example, the queries to be used will have the form:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"${baseApiUrl}/appengine/v1/${tenantName}/devices/${deviceId}/interfaces/${interfaceName}${path}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET"})," calls can be used to get the data, and ",(0,s.jsx)(n.strong,{children:"POST"})," calls can be used to send it."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);