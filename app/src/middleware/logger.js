export default logger = (store) => next => action => {
  console.log('will dispatch', action.type);
  console.log('state', action.contacts);
  return next(action);
};