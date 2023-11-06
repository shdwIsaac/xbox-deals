import React, { type FC } from 'react'
import { Tab, Tabs } from '@nextui-org/react'

interface ITabs {
  tabs: ITabItems[]
}

export const CatalogTab: FC<ITabs> = ({ tabs }) => {
  return (
    <div className="flex w-full flex-col">
      <Tabs size="lg" variant="bordered">
        {tabs.map((item) => (
          <Tab key={item.key} title={(
            <div className="flex items-center space-x-2">
              <span>{item.label}</span>
            </div>)}>
          </Tab>))}
      </Tabs>
    </div>
  )
}
