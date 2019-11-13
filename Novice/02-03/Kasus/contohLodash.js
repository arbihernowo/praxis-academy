var fruits = ['apple', 'banana', 'strawberry', 'banana', 'orange']
fruitsTemp = _.template(
        '<% _.each(fruits, function(fruit, index, fruits) { %>' +
        '<li><%= fruit %></li>' +
        '<% }); %>'
    ),
    content = fruitsTemp({
        fruits: fruits
    });

var container = document.createElement('ol');
container.innerHTML = content;
document.body.appendChild(container);