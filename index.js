Vue.component('todo-item', {
    props: ['todo'],
    template: '<li> {{todo.id+1}} - {{todo.text}} </li>'
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