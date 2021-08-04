Vue.component("showtemplate", {
    props: ["templatenumber", "conditional", "bootstrap", "colortext"],
    template: `
    <div>
    <template>
    <div :class="bootstrap" style="max-width: 18rem;">
        <div class="card-header">Template {{templatenumber}}</div>
        <div :class="colortext">
            <h5 class="card-title">Bienvenido al template {{templatenumber}}</h5>
            <p class="card-text">Ejecucuion del {{conditional}}</p>
        </div>
        </div>
    </template>
    </div>
    `,
});
Vue.component("error", {
    props: ["errortittle", "errormessage", "conditional"],
    template: `
    <div>
    <div class="card border-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">{{errortittle}}</div>
    <div class="card-body text-danger">
        <h5 class="card-title">{{errormessage}}</h5>
        <p class="card-text">Ejecucion del {{conditional}}</p>
    </div>
</div>
    </div>
    `,
});

var instance = {
    el: "#app",
    data: {
        datos: 0,
        display: true,
    },
    methods: {
        displaychanges: function () {
            if (this.display == true) {
                this.display = false;
            } else {
                this.display = true;
            }
        },
    },
};
var app = new Vue(instance);