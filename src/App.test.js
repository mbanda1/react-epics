import renderer from 'react-test-renderer'
import App from './App'

test('App snapshort test', () => {
  const component = renderer.create(<App/>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
