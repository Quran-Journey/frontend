// API routes
// https://www.youtube.com/watch?v=mTz0GXj8NN0&t=1s&ab_channel=TraversyMedia 53:20
// This API route for accessing 1 lesson at a time

import {lessons} from '../../../mock_data/data'

export default function handler( {query: {id}} , res) {
    const filtered = lessons.filter(lesson => lesson.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: 'not found' })
    }
} 