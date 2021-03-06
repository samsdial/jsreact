
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
    switch(action.type){
        case 'BURN':
            return state + 1.423
        default:
            return state
    }
}

const store = createStore(reducer, 0)
//store.dispatch()
//store.getState()
//store.subscribe()


store.subscribe(() => {
    console.log('Ha cambiado algo en el store', store.getState())
    window.results.textContent = `Haz quemado ${store.getState()} Calorias`
})


const burn = () => {
    store.dispatch({
        type: 'BURN',
        payload: 1.42,
    })
}

window.burn.addEventListener('click', burn)