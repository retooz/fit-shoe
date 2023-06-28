const getShoes = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'src/shoes.json', false);
    request.send();

    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data);
        shoes = data;
    }
};
let shoes = getShoes()
getShoes()
console.log(shoes);
