import { Collection } from 'acey'
import PostModel from '../models/post'

class PostCollection extends Collection {
    constructor(initialState = [], options){
        super(initialState, [PostModel, PostCollection], options)
    }

    sortByCreationDate = () => this.orderBy(['created_at'], ['desc'])
}

export default PostCollection
