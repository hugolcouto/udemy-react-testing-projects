import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';

configure({ adapter: new Adapter() });

test('Check if the text matches', () => {
   const congratsComponent = shallow(<Congrats success={true} />);
   expect(congratsComponent.text()).toEqual('Congratulations! You guessed the word!');
});

test('Render without error', () => {
    const congratsComponent = shallow(<Congrats />);
    expect(congratsComponent.length).toBe(1);
});

test('Renders no text when "success" prop is false', () => {
    const congratsComponent = shallow(<Congrats success={false} />);
    expect(congratsComponent.text()).toBe('');
});

test('Renders non-empty congrats message when "success" prop is true', () => {
    const congratsComponent = shallow(<Congrats success={true} />);
    expect(congratsComponent.text().length).not.toBe(0);
});
