import { MarkerType } from 'reactflow';
export const formatReactFlow = value => {
  const returnValue = [];
  if (value && value.length > 0) {
    let y = 75;
    let x = 125;
    for (const ele of value) {
      y = y + 75;
      x = x + 75;
      returnValue.push({
        id: '' + ele.id + '',
        data: {
          label: ele.name,
        },
        position: { x: x, y: y },
      });
    }
  }
  return returnValue;
};

export const formatWorkFlowSequences = (values, states) => {
  const returnValue = [];
  if (values && values.length > 0) {
    let y = 0;
    for (const ele of values) {
      y++;
      returnValue.push({
        id: 0,
        state: { ...states.filter(s => s.id === parseInt(ele.source))[0] },
        toState: { ...states.filter(s => s.id === parseInt(ele.target))[0] },
        sequence: y,
      });
    }
  }
  return returnValue;
};
export const formatEdge = values => {
  const returnValue = [];
  if (values && values.length > 0) {
    let y = 0;
    for (const ele of values) {
      y++;
      returnValue.push({
        id: '' + y + '',
        source: '' + ele.state.id + '',
        target: '' + ele.toState.id + '',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#FF0072',
        },
      });
    }
  }
  return returnValue;
};
