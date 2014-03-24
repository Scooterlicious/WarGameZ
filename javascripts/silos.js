var Silo = Backbone.Model.extend({
  defaults: {
    health: 100,
    missiles: [],
    location: {
      longitude: null,
      lattitude: null
    }
  },
  initialize: function(){
    self = this
    self.view = new SiloView({
      model: self
    });
    _.times(4, function(){
      newMissile = new Missile({
        silo: self
      });
      self.attributes.missiles.push(newMissile);
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