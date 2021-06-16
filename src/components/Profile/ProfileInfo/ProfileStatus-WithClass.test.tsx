import React from 'react';
import TestRenderer from 'react-test-renderer';
import ProfileStatuss from './ProfileStatus-WithClass'


test("status from props should be in the state", () => {
    const component = TestRenderer.create(<ProfileStatuss status={"IT_kamasutra"} updateStatus={() => { }} />)
    expect(component.root.findByType(ProfileStatuss).props.status).toBe("IT_kamasutra")
});
