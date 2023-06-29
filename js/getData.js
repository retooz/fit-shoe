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
        if (element.category == 'Running' && !showDataArr.includes(element.shoeName)) {
            showHTML.push(`<div class="productWrapper">
            <div class="imgBox">
                <a href="${element.url}"><img src="src/${element.ShoeId}.jpg" alt=""></a>
            </div>
            <div class="productText">
                <div class="productName">
                    ${element.brand}
                </div>
                <div class="productExp">
                    ${element.shoeName}<br><br>${element.price}₩
                </div>
            </div>
        </div>`)
            showDataArr.push(element.shoeName)
        };
    });
    $('.chunkWrapper').html(showHTML);
}
initialize();

$('#filter-accept').on('click', function () {
    showHTML = [];
    showDataArr = [];
    showBrand = [];
    showCategory = [];
    $("input[name=shoe-category]:checked").each(function () {
        if (!showCategory.includes($(this).val)) {
            showCategory.push($(this).val());
        }
    });
    $("input[name=shoe-brand]:checked").each(function () {
        if (!showBrand.includes($(this).val)) {
            showBrand.push($(this).val());
        }
    })
    console.log(showBrand, showCategory)
    if (showBrand && showCategory) {
        shoes.forEach(element => {
            if (showBrand.includes(element.brand) && showCategory.includes(element.category) && !showDataArr.includes(element.shoeName)) {
                showHTML.push(`<div class="productWrapper">
            <div class="imgBox">
            <a href="${element.url}"><img src="src/${element.ShoeId}.jpg" alt=""></a>
            </div>
            <div class="productText">
                <div class="productName">
                    ${element.brand}
                </div>
                <div class="productExp">
                    ${element.shoeName}<br><br>${element.price}₩
                </div>
            </div>
        </div>`)
                showDataArr.push(element.shoeName)
            }
        })
    }
    if (showBrand.length == 0 && showCategory) {
        shoes.forEach(element => {
            if (showCategory.includes(element.category) && !showDataArr.includes(element.shoeName)) {
                showHTML.push(`<div class="productWrapper">
            <div class="imgBox">
            <a href="${element.url}"><img src="src/${element.ShoeId}.jpg" alt=""></a>
            </div>
            <div class="productText">
                <div class="productName">
                    ${element.brand}
                </div>
                <div class="productExp">
                    ${element.shoeName}<br><br>${element.price}₩
                </div>
            </div>
        </div>`)
                showDataArr.push(element.shoeName)
            }
        })
    }
    if (showBrand && showCategory.length == 0) {
        shoes.forEach(element => {
            if (showBrand.includes(element.brand) && !showDataArr.includes(element.shoeName)) {
                showHTML.push(`<div class="productWrapper">
            <div class="imgBox">
            <a href="${element.url}"><img src="src/${element.ShoeId}.jpg" alt=""></a>
            </div>
            <div class="productText">
                <div class="productName">
                    ${element.brand}
                </div>
                <div class="productExp">
                    ${element.shoeName}<br><br>${element.price}₩
                </div>
            </div>
        </div>`)
                showDataArr.push(element.shoeName)
            }
        })
    }
    if (showBrand.length == 0 && showCategory.length == 0) {
        shoes.forEach(element => {
            if (!showDataArr.includes(element.shoeName)) {
                showHTML.push(`<div class="productWrapper"><div class="imgBox"><a href="${element.url}"><img src="src/${element.ShoeId}.jpg" alt=""></a></div><div class="productText"><div class="productName">${element.brand}</div><div class="productExp">${element.shoeName}<br><br>${element.price}₩</div></div></div>`)
                showDataArr.push(element.shoeName)
            }
        })
    }
    $('.chunkWrapper').html(showHTML);

})

