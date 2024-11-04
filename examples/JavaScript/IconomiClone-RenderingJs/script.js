const asset = document.getElementsByClassName('asset');
const price = document.getElementsByClassName('price');
const percentage = document.getElementsByClassName('percentage');
const assetsContainer = document.getElementById('crypto');



let ass = [
    { name: 'BTC', price: '50000', percentage: '30%' },
    { name: 'ETH', price: '2500', percentage: '50%' },
    { name: 'LTC', price: '180', percentage: '20%' },
    { name: 'ADA', price: '1.5', percentage: '40%' },
    { name: 'DOT', price: '35', percentage: '10%' },
    { name: 'SOL', price: '150', percentage: '25%' },
    { name: 'XRP', price: '1', percentage: '15%' },
    { name: 'DOGE', price: '0.25', percentage: '5%' },
    { name: 'UNI', price: '20', percentage: '12%' },
    { name: 'LINK', price: '28', percentage: '22%' },
    { name: 'BCH', price: '550', percentage: '18%' },
    { name: 'MATIC', price: '1.2', percentage: '35%' }
  ];

let lsitid = []
for (x=0; x<ass.length; x++){
    lsitid.push(x)
}
//let lsitid = [1, 4, 6]

for (i=0; i<ass.length; i++) {
    for (x=0; x<lsitid.length; x++){
        console.log(i, x);
        if (i === lsitid[x]){
            create(ass[i].name, ass[i].price, ass[i].percentage, i);
            let asse = document.getElementById('crypto');
            asse.addEventListener('click', function(e){
                if (e.target.tagName === 'BUTTON'){
                    e.target.parentElement.parentElement.remove();
                }
            })
        }
    };
}


function create(name1, price1, percentage1, id){
    let div = document.createElement('div');
    div.id = id;
    div.className = 'single-crypto';
    let assetName = document.createElement('div');
    assetName.innerHTML =`<p>${name1}</p>`;
    assetName.className = 'asset';
    assetName.id = id;
    console.log(assetName.id);
    let priceAmount = document.createElement('div');
    priceAmount.innerHTML =`<p>${price1}</p>`;
    priceAmount.className = 'price';
    priceAmount.id = id;
    let percentageAmount = document.createElement('div');
    percentageAmount.innerHTML = `<p>${percentage1}</p>`;
    percentageAmount.className = 'percentage';
    percentageAmount.id = id;
    let button = document.createElement('button');
    button.innerHTML =`delete me`;
    assetName.appendChild(button);
    div.appendChild(assetName);
    div.appendChild(priceAmount);
    div.appendChild(percentageAmount);
    assetsContainer.appendChild(div);
    
}




