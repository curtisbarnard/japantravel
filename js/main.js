const imageQueryParams = '&fit=crop&w=640&h=1110';

updateImage('spring');

// event listener for button clicks
document.querySelector('#spring').addEventListener('click', nextSeason);
document.querySelector('#summer').addEventListener('click', nextSeason);
document.querySelector('#autumn').addEventListener('click', nextSeason);
document.querySelector('#winter').addEventListener('click', nextSeason);

function nextSeason(evt) {
  if (shouldIDoAnything(evt.target.id)) return;
  updateColorBar(evt.target.id);
  updateImage(evt.target.id);
  updateSeasonHeader(evt.target.id);
}
// if header has current season don't do anything
function shouldIDoAnything(season) {
  return document
    .querySelector('.seasonBlurb h2')
    .innerText.toLowerCase()
    .includes(season);
}
// update color bar, colors in an array
function updateColorBar(season) {
  const seasons = ['spring', 'summer', 'autumn', 'winter'];
  const colors = ['#F98E80', '#94D354', '#FF9548', '#84D3FF'];
  document.querySelector(
    '.regionFirst > section:first-of-type'
  ).style.background = colors[seasons.indexOf(season)];
}
// fetch new image, use tokyo + season clicked
function updateImage(season) {
  fetch(
    `https://api.unsplash.com/search/photos?query=tokyo-${season}&client_id=${key}`
  )
    .then((res) => res.json())
    .then((data) => {
      const imageURL = `${
        data.results[Math.floor(Math.random() * 10)].urls.full
      }${imageQueryParams}`;
      document.querySelector('.image').style.background = `url(${imageURL})`;
    });
}
// update header text, use season clicked
function updateSeasonHeader(season) {
  document.querySelector(
    '.seasonBlurb h2'
  ).innerText = `${season[0].toUpperCase()}${season.slice[1]} in Tokyo`;
}
