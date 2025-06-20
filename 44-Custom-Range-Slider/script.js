const range = document.querySelector("#range");
const label = document.querySelector("#label"); // or a more specific selector

range.addEventListener("input", (e) => {
  const value = +e.target.value;

  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const labelWidth = getComputedStyle(label).getPropertyValue("width");

  // Convert the width from string to number
  const num_width = +range_width.substring(0, range_width.length - 2);

  const num_label_width = +labelWidth.substring(0, range_width.length - 2);
  console.log(num_width, num_label_width);

  const max = +e.target.max;
  const min = +e.target.min;

  const left = value * (num_width / max) - num_label_width / 2;
  num_label_width / 2 + scale(value, min, max, 10, -10);

  label.computedStyleMap.left = `${left}px`;
  label.innerHTML = value;

  console.log(left);
  // Use the previously defined label variable
  label.innerHTML = value;
});

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
