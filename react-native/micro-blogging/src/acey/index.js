import AsyncStorage from '@react-native-community/async-storage'
import { config } from 'acey'
import PostCollection from './collections/post-collection'

export const PostList = new PostCollection([], {connected: true, key: 'postlist'})

config.setStoreEngine(AsyncStorage)
config.done()
