const estimateCurrentlyInfectedImpact = (data) => {
  var currentlyInfectedImpact;    
  if(data.reportedCases === '' || data.reportedCases==0) {
    return 0;
  }
  currentlyInfectedImpact = data.reportedCases*10;
  return currentlyInfectedImpact;
};
      
const estimateCurrentlyInfectedSevereImpact = (data) => {
  if(data.reportedCases==''||data.reportedCases==0){
    return 0;
  }
  var currentlyInfectedSevereImpact = data.reportedCases*50;
  return currentlyInfectedSevereImpact;
};
        
const estimateCurrentlyInfectedByRequestedTimeImpact = (data, days) => {
  var days = 30;
  var factor = 30/3;
  var infectionInThirtyDays = estimateCurrentlyInfectedImpact(data) * Math.pow(2,factor);
  return infectionInThirtyDays;
};
        
const estimateCurrentlyInfectedByRequestedTimeSevereImpact = (data, days) => {
  var days = 30;
  var factor = 30/3;
  var infectionInThirtyDays = estimateCurrentlyInfectedSevereImpact(data) * Math.pow(2,factor);
  return infectionInThirtyDays;
};
          
const covid19ImpactEstimator=(data)=>{  
  return {
    data: data,
    impact: {
      currentlyInfected: estimateCurrentlyInfectedImpact(data),
      currentlyInfectedByRequestedTime: estimateCurrentlyInfectedByRequestedTimeImpact(data)
    },
    severeImpact: {
      currentlyInfected: estimateCurrentlyInfectedSevereImpact(data),
      currentlyInfectedByRequestedTime: estimateCurrentlyInfectedByRequestedTimeSevereImpact(data)
    }
  }
};

export default covid19ImpactEstimator;
