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

![alt text](https://github.com/eshanwp/React-Redux/blob/master/img/2.png?raw=true)

1. A **store** that holds the state of your application.
2. An **action** that describe the changes in the state of the application
3. A **reducer** which actually carries out the state transaction depending on the action

![alt text](https://github.com/eshanwp/React-Redux/blob/master/img/3.png?raw=true)

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
