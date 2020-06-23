var app = new Vue({
    el: '#taskApp',
    data: { nameApp:"Tareas Diarias", tareas:[{
        titulo:"task1",hecho:true},{
            titulo:"task2",hecho:true},{
                titulo:"task3",hecho:false},{
                    titulo:"task4",hecho:false}],
      message: 'Ingresa tu nueva tarea'
    },
    methods:{
        deletear: function(tarea){
            // console.log("soy un metodo que se activa cuando me dan click puto")
            console.log("borrare",this.tareas.indexOf(tarea))
            this.tareas.splice(this.tareas.indexOf(tarea),1)
            
        },
        addTarea: function(e){
            e.preventDefault();
            console.log(this.tareas.titulo,this.tareas.hecho);
            this.tareas.push({titulo:this.tareas.titulo,hecho:this.tareas.hecho});
            this.tareas.titulo=""
            
        }
    }
  })