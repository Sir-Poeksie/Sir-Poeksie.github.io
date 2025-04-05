fetch('https://ghchart.rshah.org/Sir-Poeksie')
    .then(response => response.text())
    .then(data => {
        document.getElementById('heatmap-container').innerHTML = data;
    })
    .catch(error => console.error('GitHub Heatmap failed:', error));
