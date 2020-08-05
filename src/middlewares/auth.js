import React from 'react'
import {Redirect} from 'react-router-dom'
import handleMiddelware from '@utils/middleware/handle'

/**
 * Default pattern middleware
 * 
 */
 
export default function handle({children}) {
    const willNext = true
    const redirectUri = '/login'
    const location = window.location.href
    
    return handleMiddelware({children, willNext, redirectUri, location})
}