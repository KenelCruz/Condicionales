Vue.component('template', {
    props: ['texto'],
    template: 
    `
    <div>
  <h1>Este es el componente que paso</h1>
  <h1>{{texto}}</h1>
    </div>
    `
})


var instance = {
    el: '#app',
    data: {
        message: 'Hello Vue!',
        datos: "",
        display: true,
        spanTitle: 'Titulo del span',
        seen: true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],
        
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        displaychanges: function(){
        if(this.display == true){
            this.display = false
        }else{
            this.display = true
        }
        }
    }
};
var app = new Vue(instance);