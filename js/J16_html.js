

// const maindata  = document.querySelector('.uldata')
// const newItem = document.createElement('li')
// // const newItemText = document.createTextNode('sevices')
// newItem.textContent = "service"
// // newItem.appendChild(newItemText)
// console.log(newItem);
// maindata.appendChild(newItem)


const uldata = document.querySelector('.uldata')

const listdata = document.querySelector('.lidata')

const listItem = document.createElement('li')


const inputData = document.querySelector("input[type='text']")


const form = document.querySelector('.form-todo')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoText = inputData.value;
    const listItem = document.createElement('li')
    const newInnerLi = `
        <span href="" class="li_a" >'${todoText}'</span>
            <button type="button" class="done" >Done</button>
            <button type="button" class="remove">Remove</button>`
    listItem.innerHTML = newInnerLi
    // console.log(listItem);
    listdata.append(listItem)
    inputData.value = ''
})


listdata.addEventListener('click', (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('done')) {
        let lispan = e.target.previousElementSibling
        // console.log(lispan);
        lispan.style.textDecoration = "line-through"
    }
    if (e.target.classList.contains('remove')) {
        let lispan = e.target.parentNode
        // console.log(lispan);
        lispan.remove()
    }

})




















































































