import React, { FC } from 'react'

const ActionCard: FC<{
  title: string,
  description: string,
  buttonText: string
}> =
  ({
    title,
    description,
    buttonText
  }) => {
    return (
      <div className="w-60 p-8 bg-white text-center">
        <img className="w-full mb-4" src="/bolt.png" />
        <div className="text-xl font-bold mb-4">{title}</div>
        <div className="text-lg mb-8">{description}</div>
        <button className="bg-blue-400 text-white rounded w-full py-1">{buttonText}</button>
      </div>
    )
  }

export default ActionCard