import LocalStore from 'acey-node-store'
import { Model, config } from 'acey'

class M extends Model {

    constructor(initialState, options){
        super(initialState, options)
    }

    getRandomValue = () => this.state.random
    setRandomValue = () => this.setState({ random: Math.random() })
}

/*
    1. We instance the Model M with an object thats contains an only key-value : `random`
    2. We set the model as connected so we enable the 'store' feature.
*/
const m = new M({ random: 1 }, {connected: true, key: 'model'})

const main = async () => {
    config.setStoreEngine(new LocalStore('./db'))
    await config.done()

    console.log(`initial value: ${m.getRandomValue()}`)
    m.setRandomValue().store() //set a new value + store the m state in the local store.
    console.log(`new value: ${m.getRandomValue()}`)
}


main()

// 1st RUN OUTPUT //
/*
    $yarn start
    initial value: 1
    new value: 0.6655187423606246

    ---
    As expected since we just instanced M before executing `main`:
    - The initial value is equal to 1
    - The new value has been correctly set
*/

// 2nd RUN OUTPUT //
/*
    $yarn start
    initial value: 0.6655187423606246
    new value: 0.8253414900857621

    ---
    If you notice the initial value here is equal to the new value set in the previous run.
    Why it's not equal to 1 as the value it instanced with few line above.

    Here's how it works at a Model instanciation: 
    
    1.  Instance the Model with the initial State passed 
    2.  If a version of the state exist in the local storage, 
        it replaces the Model state with the one found in the local storage.
        If there's no version of the Model stored in the local storage then 
        it doesn't affect the Model's current state, and it remains the one
        passed at instanciation.
*/

// 3d RUN OUTPUT //
/*
    $yarn start
    initial value: 0.8253414900857621
    new value: 0.1479234296033848
*/

