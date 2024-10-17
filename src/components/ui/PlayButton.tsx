import React from 'react'
import { IoIosPlay } from 'react-icons/io'

const PlayButton = () => {
  return (
    <div>
    <button className="rounded-full bg-white p-2">
        <IoIosPlay className="w-6 h-6 text-black" />
    </button>
</div>
  )
}

export default PlayButton
