import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';


describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); } },
      course: {id:'', watchRef:'', title:'', authorId:'', length:'', category:''}
    };

    //usamos el provider porque el componente está usando connect para poder acceder al store
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');

    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
