- **What is redux?**

    Redux is a predictable state container for javaScript apps

- **What is react-redux ?**

    *React - Redux is the official Redux UI binding library for react*

![alt text](https://github.com/eshanwp/React-Redux/blob/master/img/1.png?raw=true)

- React is a library used to build user interface.
- Redux is a library for managing state in a predictable way in javaScript application.
- React-Redux is a library that provides binding to use React and Redux together in an application

***Create Sample Redux Application***

1. Initialize package.json ⇒ npm init - - yes
2. Add redux dependancy ⇒ npm install redux
3. To run specific js file ⇒ node **jsfile_name**

***Three Core Concepts***

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/90ee8ab1-4819-46a3-8c05-6f760837bd21/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/90ee8ab1-4819-46a3-8c05-6f760837bd21/Untitled.png)

1. A **store** that holds the state of your application.
2. An **action** that describe the changes in the state of the application
3. A **reducer** which actually carries out the state transaction depending on the action

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a73fc16-7323-449a-bcd7-76c23c52ca5d/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a73fc16-7323-449a-bcd7-76c23c52ca5d/Untitled.png)

***Actions***

*Synchronous actions.*

As soon as an action was dispatch, the state was immediately updated.

if you dispach the BUY_CAKE action, the numOfCake was right away decremented by 1.

Same with BUY_ICE_CREAM

action as well.

*Async Actions*

Asynchronous API calls to fetch data from an end point and use that data in your application.

***Async action creators***

**axios -** Request to an API end point

**redux-thunk -** Define async action creators , Middleware

**npm install axios redux-thunk**
