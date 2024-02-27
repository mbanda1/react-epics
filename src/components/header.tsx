import React from 'react'
import { Header } from 'semantic-ui-react'


const MainHeader = (prop: { title: string, type?: string }): JSX.Element  => {
  const { type = 'h3' } = prop;

  return (
    <Header as={type} textAlign="center">
      {prop.title}
    </Header>
  )
};


export default MainHeader
