(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{1142:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||i;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},396:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),i=(t(0),t(1142)),a={id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},c={unversionedId:"subscriptions",id:"version-v7.0.0/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"Relay exposes the following APIs to create subscriptions.",source:"@site/versioned_docs/version-v7.0.0/Modern-Subscriptions.md",slug:"/subscriptions",permalink:"/docs/v7.0.0/subscriptions",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v7.0.0/Modern-Subscriptions.md",version:"v7.0.0",lastUpdatedBy:"Rick Hanlon",lastUpdatedAt:1620053529,sidebar:"version-v7.0.0/docs",previous:{title:"Mutations",permalink:"/docs/v7.0.0/mutations"},next:{title:"Relay Store",permalink:"/docs/v7.0.0/relay-store"}},s=[{value:"Example",id:"example",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Relay exposes the following APIs to create subscriptions."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const {requestSubscription} = require('react-relay');\n\ntype Variables = {[name: string]: any};\n\ntype Disposable = {\n  dispose(): void,\n};\n\nrequestSubscription(\n  environment: Environment,\n  config: {\n    subscription: GraphQLTaggedNode,\n    variables: Variables,\n    onCompleted?: ?() => void,\n    onError?: ?(error: Error) => void,\n    onNext?: ?(response: ?Object) => void,\n    updater?: ?(store: RecordSourceSelectorProxy, data: SelectorData) => void,\n    configs?: Array<DeclarativeMutationConfig>,\n  },\n) => Disposable;\n")),Object(i.b)("p",null,"The function returns a ",Object(i.b)("inlineCode",{parentName:"p"},"Disposable")," on which you could call ",Object(i.b)("inlineCode",{parentName:"p"},"dispose()")," to cancel the refetch."),Object(i.b)("p",null,"Now let's take a closer look at the ",Object(i.b)("inlineCode",{parentName:"p"},"config"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"subscription"),": the ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," tagged subscription query."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variables"),": an object that contains the variables needed for the subscription."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onCompleted"),": a callback function executed when the subscription is closed by\nthe peer without error."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onError"),": a callback function executed when Relay or the server encounters an\nerror processing the subscription."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onNext"),": a callback function executed each time a response is received from\nthe server, with the raw GraphQL response payload."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updater"),": an optional function that can supply custom logic for updating the\nin-memory Relay store based on the server response."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"configs"),": an array containing the updater configurations. It is the same as ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"./mutations#updater-configs"}),Object(i.b)("inlineCode",{parentName:"a"},"configs"))," in ",Object(i.b)("inlineCode",{parentName:"li"},"commitMutation"),".")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"In a simple subscription, you only need ",Object(i.b)("inlineCode",{parentName:"p"},"subscription")," and ",Object(i.b)("inlineCode",{parentName:"p"},"variables"),". This is\nappropriate when you are only changing the properties of existing records that\ncan be identified by their ",Object(i.b)("inlineCode",{parentName:"p"},"id"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const {\n  requestSubscription,\n  graphql,\n} = require('react-relay');\n\nconst subscription = graphql`\n  subscription MarkReadNotificationSubscription(\n    $storyID: ID!\n  ) {\n    markReadNotification(storyID: $storyID) {\n      notification {\n        seenState\n      }\n    }\n  }\n`;\n\nconst variables = {\n  storyID,\n};\n\nrequestSubscription(\n  yourEnvironment, // see Environment docs\n  {\n    subscription,\n    variables,\n    // optional but recommended:\n    onCompleted: () => {\n      // server closed the subscription\n    },\n    onError: error => console.error(error),\n  }\n);\n")),Object(i.b)("h1",{id:"updating-the-client-on-each-response"},"Updating the client on each response"),Object(i.b)("p",null,"For more complex use-cases, you may wish to perform custom logic to update\nRelay's in-memory cache when each subscription response is received. To do so,\npass an ",Object(i.b)("inlineCode",{parentName:"p"},"updater")," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const {ConnectionHandler} = require('relay-runtime');\n\nrequestSubscription(\n  environment,\n  {\n    subscription,\n    variables,\n    updater: store => {\n      // Get the notification\n      const rootField = store.getRootField('markReadNotification');\n      const notification = rootField.getLinkedRecord('notification');\n      // Add it to a connection\n      const viewer = store.getRoot().getLinkedRecord('viewer');\n      const notifications =\n        ConnectionHandler.getConnection(viewer, 'notifications');\n      const edge = ConnectionHandler.createEdge(\n        store,\n        notifications,\n        notification,\n        '<TypeOfNotificationsEdge>',\n      );\n      ConnectionHandler.insertEdgeAfter(notifications, edge);\n    },\n  },\n);\n")))}p.isMDXComponent=!0}}]);