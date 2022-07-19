// API routes
// https://www.youtube.com/watch?v=mTz0GXj8NN0&t=1s&ab_channel=TraversyMedia 53:20
// This API route for accessing all lessons at once
// Want another with each lesson

import {lessons} from '../../../mock_data/data'

export default function handler(req, res) {
    res.status(200).json(lessons)
} 