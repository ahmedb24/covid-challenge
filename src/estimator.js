/* const estimateCurrentlyInfectedImpact = (data) => {
  if (data.reportedCases === '' || data.reportedCases === 0) {
    return 0;
  }
  const currentlyInfectedImpact = data.reportedCases * 10;
  return currentlyInfectedImpact;
};

const estimateCurrentlyInfectedSevereImpact = (data) => {
  if (data.reportedCases === '' || data.reportedCases === 0) {
    return 0;
  }
  const currentlyInfectedSevereImpact = data.reportedCases * 50;
  return currentlyInfectedSevereImpact;
};

const estimateCurrentlyInfectedByRequestedTimeImpact = (data) => {
  const days = 30;
  const factor = days / 3;
  const infectionInThirtyDays = estimateCurrentlyInfectedImpact(data) * 2 ** factor;
  return infectionInThirtyDays;
};

const estimateCurrentlyInfectedByRequestedTimeSevereImpact = (data) => {
  const days = 30;
  const factor = days / 3;
  const infectionInThirtyDays = estimateCurrentlyInfectedSevereImpact(data) * 2 ** factor;
  return infectionInThirtyDays;
}; */

const periodInDays = (periodType, timeToElapse) => {
  let period;
  if (periodType === 'months') {
    period = timeToElapse * 30;
  } else if (periodType === 'months') {
    period = timeToElapse * 7;
  } else if (periodType === 'months') {
    period = timeToElapse;
  } else {
    return 0;
  }
  return period;
};

const estimator = (currentlyInfected, data) => {
  const days = periodInDays(data.periodType, data.timeToElapse);
  const factor = Math.trunc(days / 3);
  const currentlyInfectedByRequestedTime = currentlyInfected * (2 ** factor);
  return {
    currentlyInfected,
    currentlyInfectedByRequestedTime
  };
};

const impactCases = (data) => {
  if (data.reportedCases === '' || data.reportedCases === 0) {
    return 0;
  }
  const currentlyInfected = data.reportedCases * 10;
  return estimator(currentlyInfected);
};

const severeCases = (data) => {
  if (data.reportedCases === '' || data.reportedCases === 0) {
    return 0;
  }
  const currentlyInfected = data.reportedCases * 50;
  return estimator(currentlyInfected);
};

const covid19ImpactEstimator = (data) => {
  const info = data;
  return {
    data: info,
    impact: impactCases(data),
    severeImpact: severeCases(data)
  };
};

export default covid19ImpactEstimator;
