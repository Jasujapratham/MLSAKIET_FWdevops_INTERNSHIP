const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const attended = parseInt(document.querySelector('#attended').value);
    const total = parseInt(document.querySelector('#total').value);
    const desiredPercentage = parseInt(document.querySelector('#desiredPercentage').value);
    const results = document.querySelector('#results');

    if (isNaN(attended) || attended < 0) {
        results.innerHTML = `Please enter a valid number of attended classes: ${attended}`;
    } else if (isNaN(total) || total <= 0) {
        results.innerHTML = `Please enter a valid total number of classes: ${total}`;
    } else if (isNaN(desiredPercentage) || desiredPercentage <= 0 || desiredPercentage > 100) {
        results.innerHTML = `Please enter a valid desired percentage: ${desiredPercentage}`;
    } else {
        const currentPercentage = ((attended / total) * 100).toFixed(2);

        if (currentPercentage > desiredPercentage) {
            const classesBunk = Math.round(Math.ceil((100*attended)- (desiredPercentage*total)) / (100+desiredPercentage));
            results.innerHTML = `Your current attendance is ${currentPercentage} and You can bunk ${classesBunk} number of classes`;
        }
        else if(currentPercentage == desiredPercentage){
            results.innerHTML = `Your current attendance is ${currentPercentage} and You cannot bunk any class as you already have desired percentage`;
        }
        else {
            const classesNeeded = Math.ceil((total*desiredPercentage - (100*attended)) / (100-desiredPercentage));
            results.innerHTML = `Your current attendance is ${currentPercentage} and You need to attend ${classesNeeded} more classes to reach the desired percentage of ${desiredPercentage}`;
        }
    }
});
