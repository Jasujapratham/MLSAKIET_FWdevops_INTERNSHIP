function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function resetDisplay() {
    document.getElementById('display').value = '';
}

function computeResult() {
    const displayField = document.getElementById('display');
    try {
        displayField.value = eval(displayField.value) || '';
    } catch (error) {
        displayField.value = 'Error';
    }
}
