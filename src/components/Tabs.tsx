import React, { FC, useState } from 'react'
import classNames from 'classnames'

type Panel = {
  name: string,
  content: FC
}

const Tabs: FC<{
  panels: Panel[]
}> = ({ panels }) => {

  const [activeTabName, setActiveTabName] = useState(panels[0]?.name);
  const ActiveContent = panels.find(
    ({ name }) => name === activeTabName
  )?.content;

  return (
    <div>
      {panels.map(panel => (
        <div
          onClick={() => setActiveTabName(panel.name)}
          key={panel.name}
          className={classNames(
            "bg-white relative z-10 hover:underline cursor-pointer inline-block px-4 py-2 border rounded-t-sm border-t-gray-400 border-l-gray-400 border-r-gray-400 border-b-0 mr-2",
            panel.name === activeTabName && 'font-bold'
          )}
        >
          {panel.name}
        </div>
      ))}

      {ActiveContent && <div
        style={{
          top: '-1px',
        }}
        className="bg-white relative -top-1 p-4 border rounded-t-sm border-gray-400"
      >
        <ActiveContent />
      </div>}
    </div >
  )
}

export default Tabs