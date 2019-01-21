let pieChart;
window.onload = function() {
  let ctx = document.getElementById('chart-area').getContext('2d');
  pieChart = new Chart(ctx,{
      type: 'pie',
      data: {
        datasets: [{
          data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
        }],
        labels: []
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true
        },
      }
  });
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    updateChart();
  });

  updateChart();
}
const updateChart = function() {
  pieChart.data.labels = Array.from(document.querySelectorAll('.victim')).map(item => item.value);
  pieChart.data.datasets[0].data = [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
    ];
  pieChart.update();

  return false;
}
const randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};
