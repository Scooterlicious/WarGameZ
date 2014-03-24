var Missile = Backbone.Model.extend({
  defaults: {
    completed: false
  },
  this.view = MissileView({
    model: this
  })
});

var MissileCollection = Backbone.Collection.extend({
  model: Missile
})

var MissileView({
  // tagName: null,
  // template: null,
  // initialize: function(){

  // },
  // render: function(){
    
  // }
})