

// const maindata  = document.querySelector('.uldata')
// const newItem = document.createElement('li')
// // const newItemText = document.createTextNode('sevices')
// newItem.textContent = "service"
// // newItem.appendChild(newItemText)
// console.log(newItem);
// maindata.appendChild(newItem)


const uldata = document.querySelector('.uldata')
console.log(uldata);
const listdata  = document.querySelector('.lidata')
console.log(listdata);


const listItem = document.createElement('li')
console.log(listItem);

const inputData = document.querySelector("input[type='text']")
console.log(inputData);

const form = document.querySelector('.form-todo')

form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const todoText = inputData.value;
        const newInnerLi = `
        <a href="" class="li_a" >'${todoText}'</a>
            <button type="button">Done</button>
            <button type="button">Remove</button>`
        listItem.innerHTML = newInnerLi
        console.log(listItem);
        listdata.append(listItem)


        inputData.value = ''
})


listdata.addEventListener('click', (e)=>{
        console.log(e.target);



})




















































































