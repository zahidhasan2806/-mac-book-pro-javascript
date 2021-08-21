//getting all element & handle with function

const memorySpecification8 = document.getElementById('8gb-memory');
memorySpecification8.addEventListener('click', function () {
    updateExtraCost("memory-cost", 0)
})

const memorySpecification16 = document.getElementById('16gb-memory');
memorySpecification16.addEventListener('click', function () {
    updateExtraCost("memory-cost", 180);

})

const storageSpecification256 = document.getElementById('storage-256gb');
storageSpecification256.addEventListener('click', function () {
    updateExtraCost("storage-cost", 0);
})

const storageSpecification512 = document.getElementById('storage-512gb');
storageSpecification512.addEventListener('click', function () {
    updateExtraCost("storage-cost", 100);
})

const storageSpecification1tb = document.getElementById('storage-1tb');
storageSpecification1tb.addEventListener('click', function () {
    updateExtraCost("storage-cost", 180);
})

const freeDelivery = document.getElementById("free-delivery");
freeDelivery.addEventListener('click', function () {
    updateExtraCost("delivery-cost", 0);
})

const paidDelivery = document.getElementById("paid-delivery");
paidDelivery.addEventListener('click', function () {
    updateExtraCost("delivery-cost", 20);
})


const memoryExtraCost = document.getElementById("memory-cost").innerText;
const storageExtraCost = document.getElementById("storage-cost").innerText;
const deliveryExtraCost = document.getElementById("delivery-cost").innerText;
const total = document.getElementById("extra-total-cost");
const bestPrice = document.getElementById("best-price").innerText;

const promoInput = document.getElementById("promo-input");
const promoBtn = document.getElementById("button-promo");
const discountTotal = document.getElementById("discount")


//updating additional cost 
function updateExtraCost(extraCost, value) {
    const cost = document.getElementById(extraCost);
    cost.innerText = value;
    updateTotalCost();
}


//updating total cost
function updateTotalCost() {

    total.innerText = parseInt(bestPrice) + parseInt(memoryExtraCost) + parseInt(storageExtraCost) + parseInt(deliveryExtraCost);
    discountTotal.innerText = total.innerText;
}

//handling promo code & getting discount offer
promoBtn.addEventListener('click', function () {
    if (promoInput.value == 'stevekaku') {
        let percentageRate = parseFloat(total.innerText) * (20 / 100);
        discountTotal.innerText = parseFloat(total.innerText) - parseFloat(percentageRate);
        promoInput.value = "";
    }
})