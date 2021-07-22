import renderer from 'react-test-renderer';
import Main from '../components/Main'

it('UI is unaltered wrt first snapshot', () => {

  const elem = renderer.create(<Main />).toJSON();

  expect(elem).toMatchSnapshot();

});