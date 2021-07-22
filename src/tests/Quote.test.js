import renderer from 'react-test-renderer';
import Quote from '../components/Quote'

it('UI is unaltered wrt first snapshot', () => {

  const elem = renderer.create(<Quote/>).toJSON();

  expect(elem).toMatchSnapshot();

});