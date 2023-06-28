const getShoes = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'src/shoes.json', false);
    request.send();

    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        return data;
    }
};
let shoes = getShoes()
let showHTML = [];
let showDataArr = [];
let showCategory = [];
let showBrand = [];
const initialize = () => {
    shoes.forEach(element => {
        if(element.category == 'Running' && !showDataArr.includes(element.shoeName)) {
            // showDataArr.append(element);
            showHTML.push(`<div class="productWrapper">
            <div class="imgBox">
                <img src="src/${element.ShoeId}.jpg" alt="">
            </div>
            <div class="productText">
                <div class="productName">
                    ${element.brand}
                </div>
                <div class="productExp">
                    ${element.shoeName}
                </div>
            </div>
        </div>`)
        showDataArr.push(element.shoeName)
        };
    });
    $('.chunkWrapper').html(showHTML);
}
initialize();

$('#filter-accept').on('click', function(){
    
    $("input[type=checkbox][name=shoe-category]:checked").each(function(){
        showCategory.push($(this).val());
    });
    $("input[name=shoe-brand]:checked").each(function() {
        showBrand.push($(this).val());
    })
    console.log(showBrand, showCategory)
})

