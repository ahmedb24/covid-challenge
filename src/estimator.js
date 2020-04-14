const estimateCurrentlyInfectedImpact = (data) => {
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
};

const covid19ImpactEstimator = (data) => {
  const info = data;
  return {
    data: info,
    impact: {
      currentlyInfected: estimateCurrentlyInfectedImpact(data),
      currentlyInfectedByRequestedTime: estimateCurrentlyInfectedByRequestedTimeImpact(data)
    },
    severeImpact: {
      currentlyInfected: estimateCurrentlyInfectedSevereImpact(data),
      currentlyInfectedByRequestedTime: estimateCurrentlyInfectedByRequestedTimeSevereImpact(data)
    }
  };
};

export default covid19ImpactEstimator;
