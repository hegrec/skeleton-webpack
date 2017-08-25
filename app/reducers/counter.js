export default function(state = 0, action) {
  switch (action.type) {
    case 'ADD_VALUE':
      return state + 1;
    case 'SUBTRACT_VALUE':
      return state - 1;
  }

  return state;
}

export const addValue = () => ({
  type: 'ADD_VALUE'
});

export const subtractValue = () => ({
  type: 'SUBTRACT_VALUE'
});
