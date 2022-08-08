


// ****************************** @lagunovsky/redux-react-router redux toolkit************************************************************



// 1 CREATE STORE
import {configureStore,  } from "@reduxjs/toolkit";
import { createRouterReducer ,createRouterMiddleware } from '@lagunovsky/redux-react-router' 

import { createBrowserHistory } from "history";

export const history = createBrowserHistory()

const store = configureStore({

    reducer : {router:createRouterReducer(history)},
    
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(createRouterMiddleware(history))
    

})

export default store;



//2 inside index js file

import { ReduxRouter } from "@lagunovsky/redux-react-router";

import store,{history} from  "YOUR REDUX STORE FILE PATH"
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    
<Provider store={store}>

  <ReduxRouter history={history}>
  <App />

    
    </ReduxRouter>
    
    </Provider>
    
  
);

// wherever you want to dispatch 
import { push } from "@lagunovsky/redux-react-router";

dispatch(push("pathname"))




//******************** redux-first-history with redux toolkit *******************************************************

//store file *******************
import { createBrowserHistory } from "history";

import { createReduxHistoryContext } from "redux-first-history";

const {createReduxHistory,routerMiddleware,routerReducer} = createReduxHistoryContext({history : createBrowserHistory()  })




const store = configureStore({

    reducer : {router:routerReducer},
    
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(routerMiddleware)
    

})


export const history = createReduxHistory(store)

export default store;

// index file*********************************


import { HistoryRouter as Router } from "redux-first-history/rr6";

import store,{history} from  "YOUR REDUX STORE FILE PATH"
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    
<Provider store={store}>

  <Router history={history}>
  <App />

    
    </Router>
    
    </Provider>



// wherever you want to dispatch 
import { push } from "redux-first-history";

dispatch(push("pathname"))