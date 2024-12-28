const getServiceStatusHandler = (_, callback) => {
  callback(null, { service: 'users-service', status: 'RUNNING' });
};

export { getServiceStatusHandler };
