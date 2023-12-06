export function getAll() {
    return fetch('https://corsproxy.io/?' + encodeURIComponent('https://www.fruityvice.com/api/fruit/all'))
    
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        const Array = []
        for (let i = 0; i < data.length; i++) {

            let table ='<table>'
            table += `<tr> <th>Name</th> <th>Family</th> <th>Order</th> <th>Genus</th> <th>Calories per 100g</th> <th>Fat(g)</th> <th>Sugar(g)</th> <th>Carbohydrates(g)</th> <th>Protein(g)</th> <tr/>`;
            table += `<tr> <td>${data[i].name}</td> <td>${data[i].family}</td> <td>${data[i].order}</td> <td>${data[i].genus}</td> <td>${data[i].nutritions.calories}</td> <td>${data[i].nutritions.fat}</td> <td>${data[i].nutritions.sugar}</td> <td>${data[i].nutritions.carbohydrates}</td> <td>${data[i].nutritions.protein}</td> </tr>`;
            table += '</table>'; 

            // const nameLabel = document.createElement('h1');
            // nameLabel.textContent = 'Name:';
            // const nameValue = document.createElement('p');
            // nameValue.textContent = data[i].name;
            
            // const familyLabel = document.createElement('h1');
            // familyLabel.textContent = 'Family:';
            // const familyValue = document.createElement('p');
            // familyValue.textContent = data[i].family;
            
            // const orderLabel = document.createElement('h1');
            // orderLabel.textContent = 'Order:';
            // const orderValue = document.createElement('p');
            // orderValue.textContent = data[i].order;
            
            // const genusLabel = document.createElement('h1');
            // genusLabel.textContent = 'Genus:';
            // const genusValue = document.createElement('p');
            // genusValue.textContent = data[i].genus;
            
            // const caloriesLabel = document.createElement('h1');
            // caloriesLabel.textContent = 'Calories per 100g:';
            // const caloriesValue = document.createElement('p');
            // caloriesValue.textContent = data[i].nutritions.calories;
            
            // const fatLabel = document.createElement('h1');
            // fatLabel.textContent = 'Fat(g):';
            // const fatValue = document.createElement('p');
            // fatValue.textContent = data[i].nutritions.fat;
            
            // const sugarLabel = document.createElement('h1');
            // sugarLabel.textContent = 'Sugar(g):';
            // const sugarValue = document.createElement('p');
            // sugarValue.textContent = data[i].nutritions.sugar;
            
            // const carbohydratesLabel = document.createElement('h1');
            // carbohydratesLabel.textContent = 'Carbohydrates(g):';
            // const carbohydratesValue = document.createElement('p');
            // carbohydratesValue.textContent = data[i].nutritions.carbohydrates;
            
            // const proteinLabel = document.createElement('h1');
            // proteinLabel.textContent = 'Protein(g):';
            // const proteinValue = document.createElement('p');
            // proteinValue.textContent = data[i].nutritions.protein;
            

            //Formattera så att vi ser vilka lag som spelar mot varandra
            const fruitContainer = document.createElement('div');
            fruitContainer.innerHTML= table;
            // fruitContainer.appendChild(nameLabel);
            // fruitContainer.appendChild(nameValue);
            // fruitContainer.appendChild(familyLabel);
            // fruitContainer.appendChild(familyValue);
            // fruitContainer.appendChild(orderLabel); 
            // fruitContainer.appendChild(orderValue);
            // fruitContainer.appendChild(genusLabel); 
            // fruitContainer.appendChild(genusValue);
            // fruitContainer.appendChild(caloriesLabel); 
            // fruitContainer.appendChild(caloriesValue);
            // fruitContainer.appendChild(fatLabel);
            // fruitContainer.appendChild(familyValue);
            // fruitContainer.appendChild(sugarLabel);
            // fruitContainer.appendChild(sugarValue);
            // fruitContainer.appendChild(carbohydratesLabel);
            // fruitContainer.appendChild(caloriesValue);
            // fruitContainer.appendChild(proteinLabel);
            // fruitContainer.appendChild(proteinValue);
            const fruit = fruitContainer.outerHTML;

            //Addera all data vi behöver till en array
            Array.push(fruit);  

        }
        //Returnera arrayen med all data vi behöver
        console.log(Array);
        return Array;
        
    })

    .catch((error) => {
        console.error(error);
    });
}