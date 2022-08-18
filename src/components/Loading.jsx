import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <ThreeDots color="#00BFFF" height={30} width={30} />
        </div>
    )
}
