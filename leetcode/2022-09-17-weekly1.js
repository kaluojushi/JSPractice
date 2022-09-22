/**
 * @author MZJ
 * @date 2022-09-17
 * @description 双周赛
 * @copyright LeetCode
 */

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  const days = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const arriveAliceDay = days[arriveAlice.split('-')[0] - 1] + parseInt(arriveAlice.split('-')[1]);
  const leaveAliceDay = days[leaveAlice.split('-')[0] - 1] + parseInt(leaveAlice.split('-')[1]);
  const arriveBobDay = days[arriveBob.split('-')[0] - 1] + parseInt(arriveBob.split('-')[1]);
  const leaveBobDay = days[leaveBob.split('-')[0] - 1] + parseInt(leaveBob.split('-')[1]);
  const maxArriveDay = Math.max(arriveAliceDay, arriveBobDay);
  const minLeaveDay = Math.min(leaveAliceDay, leaveBobDay);
  return Math.max(0, minLeaveDay - maxArriveDay + 1);
};

// console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));
// console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31"));
// console.log(countDaysTogether("01-01", "12-31", "01-01", "12-31"));
// console.log(countDaysTogether("01-01", "12-31", "01-02", "12-30"));
// console.log(countDaysTogether("01-01", "12-31", "01-03", "12-29"));


/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
  const m = players.length, n = trainers.length;
  players.sort((a, b) => b - a);
  trainers.sort((a, b) => b - a);
  let ans = 0;
  let i = 0, j = 0;
  while (i < m && j < n) {
    if (players[i] <= trainers[j]) {
      i++;
      j++;
      ans++;
    } else {
      i++;
    }
  }
  return ans;
};

// console.log(matchPlayersAndTrainers([4,7,9], [8,2,5,8]));
// console.log(matchPlayersAndTrainers([1,1,1], [10]));
// console.log(matchPlayersAndTrainers([1,2,3,4], [1,1,3,5]));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {

};

console.log(smallestSubarrays([1,0,2,1,3]));
console.log(smallestSubarrays([1,2]));
console.log(smallestSubarrays([1,0,3,2,4,1]));