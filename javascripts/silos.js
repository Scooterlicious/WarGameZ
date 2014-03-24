var Silo = Backbone.Model.extend({
  defaults: {
    health: 100
  },
  initialize: function(){
    this.view = new SiloView({
      model: this
    });
  }
});

var SiloCollection = Backbone.Collection.extend({
  model: Silo
})

var SiloView = Backbone.View.extend({
  // tagName: null,
  // template: null,
  // initialize: function(){

  // },
  // render: function(){

  // }
})