import React, { FC, useState } from 'react'
import { CaretDown, CaretRight } from "phosphor-react";

const UpTriangle = ({ size }: { size: number }) => {
  const borderStyle = '1px solid rgb(209, 213, 219)';
  return <div style={{
    position: 'absolute',
    top: '-4px',
    left: '15px',
    width: `${size}px`,
    height: `${size}px`,
    transform: 'rotate(45deg)',
    backgroundColor: 'white',
    borderLeft: borderStyle,
    borderTop: borderStyle,
  }}>
  </div >
}

const DropDown: FC<{
  options: string[],
  onOptionClick: (option: string) => void
}> = (
  {
    options,
    onOptionClick
  }
) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const showCaretDown = isExpanded;
    const showCaretRight = !isExpanded;

    return (
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center rounded text-white px-2 py-1 hover:bg-gray-400 bg-gray-500"
        >
          <div className="mr-1">Dropdown</div>
          <div>
            {showCaretDown && <CaretDown size={16} />}
            {showCaretRight && <CaretRight size={16} />}
          </div>
        </button>
        {isExpanded &&
          <div className="absolute bg-white rounded border border-gray-300 py-2 mt-2 w-40">
            <UpTriangle size={7} />
            <ul>
              {options.map(option => (
                <li
                  onClick={() => {
                    setIsExpanded(false);
                    onOptionClick(option);
                  }}
                  className="hover:bg-blue-500 hover:text-white px-2 py-1 cursor-pointer"
                  key={option}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    )
  }

export default DropDown