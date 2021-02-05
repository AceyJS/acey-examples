import { Collection } from 'acey'
import AdModel from '../models/ad'

class AdCollection extends Collection {

    constructor(initialState = [], options){
        super(initialState, [AdModel, AdCollection], options)
    }

    fetch = async (field = 'node') => {
        const response = await fetch(`http://localhost:3000/api/position/${field}`)
        if (response.status == 200){
            const json = await response.json()
            this.setState(json).save()
        }
        return response.status
    }

    sortByTitle = () => this.orderBy(['title'], ['asc'])
    selectStartingWithPrefixTitle = (prefix) => this.filter((o) => o.title().startsWith(prefix))
}

export default AdCollection