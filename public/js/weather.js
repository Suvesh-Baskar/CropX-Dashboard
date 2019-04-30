console.log('Connected');
window.addEventListener('load', () => {
  let lat;
  let long;
  console.log('Connected');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log('Connected');
      const proxy = 'http://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/c22ed92748a8e906e3f6f199d160dbbf/${lat},${long}`;

      console.log('Connected');

      fetch(api)
        .then(response => {
          console.log('Connected');
          return response.json();
        })
        .then(data => {
          const { temperature, summary, precipProbability } = data.currently;
          console.log('Connected');
          var celcius = Math.round((temperature - 32) * (5 / 9));

          var rainProb = '';
          if (precipProbability > 0.7) {
            rainProb = 'it will rain today';
          } else if (precipProbability > 0.4) {
            rainProb = 'it might rain today';
          } else if (precipProbability <= 0.4) {
            rainProb = 'it will not rain today';
          }

          console.log('Connected');

          document.getElementById(
            'weatherInfo'
          ).innerHTML = `Temperature is ${celcius} &deg;C , its ${summary}, and ${rainProb}`;
        });
    });
  } else {
    document.getElementById('weatherInfo').textContent =
      'Weather data currently not available';
    console.log('Connected');
  }
});
