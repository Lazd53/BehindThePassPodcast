
export function calcRunTime(runTime){
  const secToHrs = 60*60
  const secToMin = 60
  const hours = Math.floor(runTime/secToHrs);
  runTime -= hours * secToHrs
  const min = Math.floor(runTime/secToMin);
  runTime -= min * secToMin;
  const paddedMin = min.toString().padStart(2, "0")
  let sec = runTime.toString().padStart(2, "0")
  const timeString = hours > 0
    ? `${hours}:${paddedMin}:${sec}`
    : `${min}:${sec}`
  return timeString
}
