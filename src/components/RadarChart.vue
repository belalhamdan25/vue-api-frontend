

<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
    props: ['userData'],
  data() {
    return {
      datacollection: {
      labels: ["Rate", "Profile", "Portfolio", "Offers", "Projects", "Skills"],
            datasets: [
                {
                  label: "User Data",
                  lineTension: 0,
                  backgroundColor: "rgba(65, 185, 131, 0.80)",
                  borderColor: "rgba(54, 155, 111, 0.90)",
                  pointBackgroundColor: "rgba(54, 155, 111, 1)",
                  pointBorderColor: "#fff",
                  pointHoverRadius: 0,
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(54, 155, 111, 1)",
                   pointRadius: 0,
                   borderWidth:1,
                  data: this.userData
                },
            ],
      },
      options: {
        scale: {
          angleLines: {
            display: false,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 10,
            fontStyle: '300',
            fontColor: '#666',
            fontFamily: "Poppins"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            min: 0,
            max: 5,
            display: false
          }
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {enabled: false}
      },
      initialDataProp:null
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
</script>


