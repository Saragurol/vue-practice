// create a new Vue instance inside a JS file
// A Vue instance is the root of a Vue application 
// A Vue instance is created by passing in an "Options" object into it. The Options object has a variety of optional properties that give the instance the ability to store data and perform actions 
var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vue-prac-green-socks.jpg",
        inStock: true,
        onSale: true,
        link: "https://vuejs.org/v2/guide/",
        description: "A pair of warm, fuzzy socks.",
        firstName: "Linda",
        lastName: "Saraguro",
        clicked: true,
        message: "This is my first Vue app."
    }
})

// el = element property
// el creates a relationship between the Vue instance and the DOM
// el connects to the id="app" found in the HTML file. The Vue instance is plugged into the <div id='app'></div>

// the data property is where we add the instance's data

// {{}} = JS expressions. used to produce or evaluate a value. Can be used to... 
    // -add a character or number to your data
            // ex. {{product + '?'}}
    // -combine values
            // ex. {{firstName + ' ' + lastname}}
    // -perform conditional logic with a ternary operator
            // ex. {{clicked ? true : false}}
    // -run methods on your data
            // ex. {{message.split('').reverse().join('')}}

// Summary Notes:
// Vue is reactive! So, if I update the instance's data, anywhere that relies/references to this data will also update
// The Vue instance is the heart of the Vue application 
// The Vue instance plugs into an element in the DOM 
// The Vue instance's data can be displayed within an element using expressions 