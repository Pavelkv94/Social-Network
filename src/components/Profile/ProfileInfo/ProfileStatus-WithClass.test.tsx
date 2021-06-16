import React from 'react';
import TestRenderer from 'react-test-renderer';
import ProfileStatuss from './ProfileStatus-WithClass'


test("status from props should be in the state", () => {
    const component = TestRenderer.create(<ProfileStatuss status={"IT_kamasutra"} updateStatus={() => { }} />)
    expect(component.root.findByType(ProfileStatuss).props.status).toBe("IT_kamasutra")
});

test("Input don't show", () => {
    const component = TestRenderer.create(<ProfileStatuss status={"IT_kamasutra"} updateStatus={() => { }} />)
    const root = component.root;

    expect(() => {
        let input = root.findByType("input");
    }).toThrow();
});

test("Input should be displayed in editMode instead of span", () => {
    const component = TestRenderer.create(<ProfileStatuss status={"IT_kamasutra"} updateStatus={() => { }} />)
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("IT_kamasutra");
})

test("callback should be called", () => {
    const mockCallBack = jest.fn();
    const component = TestRenderer.create(<ProfileStatuss status={"IT_kamasutra"} updateStatus={mockCallBack} />)
    const instance = component.getInstance();
    //instance.deactivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(0);
})
