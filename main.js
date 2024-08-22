let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

const container = document.getElementById('container');

data.map(number => {
    const div = document.createElement('div');
    div.textContent = number;
    div.style.backgroundColor = number > 50 ? 'green' : 'red';
    div.style.color = 'white';
    div.style.padding = '10px';
    div.style.margin = '5px';
    div.style.textAlign = 'center';
    container.appendChild(div);
});