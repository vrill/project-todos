import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (store, action) => {
            console.log('action', action)
            const data = action.payload

            const newTodo = {
                id: uniqid(),
                text: data,
                isComplete: false,
            }
            // - Mutability
            // store.items.push(data)
            // - Immutability
            // store.items = [...store.items, data]

            store.items = [...store.items, newTodo]
        },
        toggleTodo: (store, action) => {
            // - Mutability
            // store.items.forEach((item) => {
            //     if (item.id === action.payload) {
            //         item.isComplete = !item.isComplete
            //     }
            // })
            // - Immutability
            const updatedItems = store.items.map((item) => {
                if (item.id === action.payload) {
                    const updatedTodo = {
                        ...item,
                        // id: item.id,
                        // text: item.text,
                        // isComplete: item.isComplete,
                        isComplete: !item.isComplete
                    }
                    return updatedTodo
                } else {
                    return item
                }
            })
            store.items = updatedItems
        }
    },
})

export default todos