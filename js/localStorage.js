

const addNumbeToLS = () => {
    const number = Math.ceil(Math.random() * 100)
    localStorage.setItem('number', number)
    
};


const saveObjectToLS = () => {
    customer = {name: 'Arif Hossain', age: 28, profession: 'Web Developer', product: 'Shirt', price: 100}
    const customerJSON = JSON.stringify(customer)
    localStorage.setItem('customer', customerJSON)
}

const readObjectFromLS = () => {
    const customerStr = localStorage.getItem('customer')
    const customer = JSON.parse(customerStr)
    console.log(customer);
    
}

const getNumberFromLS = () => {
    const getNumber = localStorage.getItem('number')
    console.log('from save local storage', getNumber);
    
}