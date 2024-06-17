// // setInterval(() => console.log(Date.prototype.getTime()), 1000);
// console.log(Date.prototype.getTime);
function showtime() {
  const date = new Date();

  let time = `${date.getHours()}:${date.getMinutes()}:${date.getUTCSeconds()}`;
  console.log(time);
}
showtime();
setInterval(showtime, 1000);
