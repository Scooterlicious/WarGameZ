var Silo = Backbone.Model.extend({
  defaults: {
    health: 100,
    missiles: [],
    location: {
      longitude: null,
      latitude: null
    }
  },

  initialize: function(){
    var self = this;

    _.times(5, function(){
      var newMissile = new Missile({
        silo: self
      });

      self.attributes.missiles.push(newMissile);

    });

    self.view = new SiloView({
      model: self
    });
  }

});

var SiloCollection = Backbone.Collection.extend({
  model: Silo
})

var SiloView = Backbone.View.extend({
  tagName: 'div',
  className: 'silo',
  el: '#silo_container',

  render: function(){
    var self = this;
    this.$el.html(this.template(this.model.attributes))
    return this
  },

  initialize: function(){
    var self = this;
    this.render();
  },

  template: _.template("<svg xmlns='http://www.w3.org/2000/svg' version='1.1'><polygon style='fill:none;stroke:green;stroke-width:2.5px' points='3,18 15,2 27,18'> </polygon> <text style='text-align:center;' x='0' y='30' font-size='10'><%= this.model.attributes.missiles.length  %></text></svg>"),

})

var SiloListView = Backbone.View.extend({

})