import client from './client'

export const createPost = async (payload) => {
    const response = await client.post('/post', payload)
    return response.data
}

export const getPosts = async () => {
    const response = await client.get('/post')
    return response.data
}

export const getPostById = async (id) => {
    const response = await client.get(`/post/${id}`)
    return response.data
}

export const updatePost = async (id, payload) => {
    const response = await client.patch(`/post/${id}`, payload)
    return response.data
}

export const deletePost = async (id) => {
    const response = await client.delete(`/post/${id}`)
    return response.data
}