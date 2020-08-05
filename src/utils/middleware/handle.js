import {Redirect} from 'react-router-dom'
/**
 * Handle middleware router
 */

 export default function handle({children, willNext, redirectUri, location}) {
    return (
        <>
            {willNext ?
            children 
            :
            <Redirect 
            to={{ 
                pathName: redirectUri,
                state: {
                    from: location
                }
             }}
            /> 
            }
        </>
    )
 }