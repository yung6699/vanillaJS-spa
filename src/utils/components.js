// setState시 View에 등록된 컨테이너 컴포넌트로 전달
export const propsStateToComponents = (components, state) => {
  for (let key in components) {
    const component = components[key];
    component.setState(state);
  }
};

export const afterRender = (components) => {
  for ( let key in components) {
    const component = components[key];
    component.mounted();
  }
};
