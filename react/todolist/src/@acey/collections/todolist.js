import { Collection } from 'acey'
import TodoModel from '../models/todo'

class TodoCollection extends Collection {

    constructor(initialState = [], options){
        super(initialState, [TodoModel, TodoCollection], options)
    }

    create = (content) => {
        this.push({
            id: Math.random().toString(), 
            content,
            created_at: new Date()
        }).save().store()
    }
    sortByCreationDate = () => this.orderBy(['created_at'], ['desc'])
}

export default TodoCollection
