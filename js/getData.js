$(document).ready(function () {
    let shoes;
    const getShoes = () => {
        fetch('src/shoes.json').then((res) => { return res.json() })
            .then((data) => {
                shoes = data;
            })
    }

    console.log(shoes);
})