const element = document.createElement('h2');
element.textContent = 'Hello World!';
element.style.backgroundColor = 'seagreen';
element.style.color = 'white';

const temp = document.querySelector('#first');
temp.after(element);

const element2 = document.createElement('h3');
element2.textContent = 'Hello World!';
element2.style.fontSize = '40px';

temp.before(element2);

const unOrderList = document.querySelector('#lists');

// const li1 = document.createElement("li");
// li1.textContent = "Milk";
// unOrderList.append(li1);

// const li2 = document.createElement("li");
// li2.textContent = "Cream";
// unOrderList.append(li2);

// const li3 = document.createElement("li");
// li3.textContent = "Tea";
// unOrderList.prepend(li3);

const favoriteFoods = ['Pizza', 'Sushi', 'Tacos', 'Pasta', 'Burgers'];
const fragments = document.createDocumentFragment();

for (let food of favoriteFoods) {
    const list = document.createElement('li');
    list.textContent = food;
    fragments.append(list);
}

unOrderList.append(fragments);

const s1 = document.querySelector('h3');
s1.remove();


// unOrderList.innerHTML = favoriteFoods.map(food => `<li>${food}</li>`).join("");