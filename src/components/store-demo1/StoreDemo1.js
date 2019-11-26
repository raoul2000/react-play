import React from 'react';
import Max from './Max';
import Bob from './Bob';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';



// @ts-ignore
const store1 = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const StoreDemo1 = () => {
    return (
        <div>
            <h3>Store Demo1</h3>
            <hr />
            <p>I am the owner component of 2 children who are comunicating between each other
                through a store.<br />
                Meet <b>Bob</b> and <b>Max</b>, my children !<br />
                I will provide both of them the same store instance and they'll use it to communicate...
            </p>
            <Provider store={store1}>
                <table>
                    <tr>
                        <td>
                            Bob<br />
                            <Bob />
                        </td>
                        <td>
                            Max<br />
                            <Max />
                        </td>
                    </tr>
                </table>
            </Provider>
        </div>
    );
}

export default StoreDemo1;