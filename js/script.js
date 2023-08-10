function newItem(){
    let list = $('#list');
    let inputValue = $('#input').val();
    let li = $('<li></li>');
    li.append(inputValue);

    if (inputValue === '') {
        alert('Please add something to the list first.');
    } else {
        list.append(li);
    }

    function crossOut() {
        li.toggleClass('strike');
    }
    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('x'));
    li.append(crossOutButton);
    crossOutButton.on('click', deleteListItem);
    function deleteListItem(){
        li.addClass('delete');
    }

    $('#list').sortable();
}