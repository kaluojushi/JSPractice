/**
 * @author MZJ
 * @date 2022-07
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  const n = distance.length;
  const d = [0, 0];
  let idx = 0;
  for (let i = start, cnt = 0; cnt < n; i = (i + 1) % n, cnt++) {
    if (i === destination) {
      idx = 1;
    }
    d[idx] += distance[i];
  }
  return Math.min(...d);
};

console.log(distanceBetweenBusStops([1,2,3,4],0,1));
console.log(distanceBetweenBusStops([1,2,3,4],0,2));
console.log(distanceBetweenBusStops([1,2,3,4],0,3));