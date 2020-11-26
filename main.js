// hidden input and output cards
document.getElementById('output').style.visibility = 'hidden'
document.getElementById('weightInput').style.visibility = 'hidden'

// event listener to select user option
document.getElementById('selectUnit').addEventListener('input', function(e) {
    document.getElementById('weightInput').style.visibility = 'visible'
    let option = e.target.value;
    selectUserInput(option);

})

// event listener to get user input
function selectUserInput(option) {
    inputValue = document.getElementById('weightInput').value;
    if (inputValue === "") {
        document.getElementById('weightInput').addEventListener('input', function(e) {
        document.getElementById('output').style.visibility = 'visible'
        let weightInput = e.target.value;
        option = document.getElementById('selectUnit').value;
        calculateWeight(option, weightInput)
    })
    } else {
        weightInput = inputValue;
        calculateWeight(option, weightInput)
    }
    
}
 // function for weight conversions
function calculateWeight(option, weightInput) {
            switch(option) {
            case 'kilograms':
                showBlocks();
                document.getElementById('kilogramsCard').style.display = 'none';
                document.getElementById('gramsOutput').innerHTML = (weightInput * 1000).toFixed(3);
                document.getElementById('poundsOutput').innerHTML = (weightInput * 2.205).toFixed(3);
                document.getElementById('ouncesOutput').innerHTML = (weightInput * 35.274).toFixed(3);
                break;
            case 'grams':
                showBlocks();
                document.getElementById('gramsCard').style.display = 'none';
                document.getElementById('kilogramsOutput').innerHTML = (weightInput / 1000).toFixed(3);
                document.getElementById('poundsOutput').innerHTML = (weightInput / 454).toFixed(3);
                document.getElementById('ouncesOutput').innerHTML = (weightInput / 28.35).toFixed(3);
                break;
            case 'pounds':
                showBlocks();
                document.getElementById('poundsCard').style.display = 'none';
                document.getElementById('kilogramsOutput').innerHTML = (weightInput / 2.205).toFixed(3);
                document.getElementById('gramsOutput').innerHTML = (weightInput * 454).toFixed(3);
                document.getElementById('ouncesOutput').innerHTML = (weightInput * 16).toFixed(3);
                break;
            case 'ounces':
                showBlocks();
                document.getElementById('ouncesCard').style.display = 'none';
                document.getElementById('kilogramsOutput').innerHTML = (weightInput / 35.274).toFixed(3);
                document.getElementById('gramsOutput').innerHTML = (weightInput * 28.35).toFixed(3);
                document.getElementById('poundsOutput').innerHTML = (weightInput / 16).toFixed(3);
                break;
            }
        }
  
// display all card blocks initially  
function showBlocks() {
    document.getElementById('kilogramsCard').style.display = 'block';
    document.getElementById('gramsCard').style.display = 'block';
    document.getElementById('poundsCard').style.display = 'block';
    document.getElementById('ouncesCard').style.display = 'block';
}