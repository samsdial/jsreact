
// Redux Vanilla js

const createStore = (reducer, initialState) => {
    let state = initialState
    let updater = () => {}

    const getState = () => state
    
    const dispatch = (action) => {
        state = reducer(state, action)
        updater()
    }
    
    const subscribe = (listener) => {
        updater = listener
    }
    
    return {
        getState,
        dispatch,
        subscribe
    }
}

const reducer = (state, action) => {
    return action
}

const store = createStore(reducer, 'estado inicial')
//store.dispatch()
//store.getState()
//store.subscribe()


store.subscribe(() => {
    console.log('Ha cambiado algo en el store', store.getState())
})
store.dispatch('voy a cambiar algo @sergio')
store.dispatch('voy otra vez')