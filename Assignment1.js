let count = 30;
function decrease() {
  if (!(count <= 0)) {
    console.log(count);
    count--;
  } else clearInterval(id);
}

const id = setInterval(decrease, 1000);
