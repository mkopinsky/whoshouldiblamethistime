window.onload = function() {
  let ctx = document.getElementById('chart-area').getContext('2d');
  let pieChart = new Chart(ctx,{
      type: 'pie',
      data: data,
      options: {
        animation: {
          animateRotate: false,
          animateScale: true
        },

      }
  });
}
const randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};
let data = {
  datasets: [{
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
    ],
    backgroundColor: [
      "rgb(255, 99, 132)",
      "rgb(54, 162, 235)",
      "rgb(255, 205, 86)",
    ],

  }],

  labels: [
    'Red',
    'Yellow',
    'Blue'
  ]
};