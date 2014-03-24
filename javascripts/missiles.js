var Missile = Backbone.Model.extend({
  defaults: {
    completed: false
  },
  initialize: function(){
    this.view = new MissileView({
      model: this
    });
  }
});

var MissileCollection = Backbone.Collection.extend({
  model: Missile
})

var MissileView = Backbone.View.extend({
  // tagName: null,
  // template: null,
  // initialize: function(){

  // },
  // render: function(){
    
  // }
})