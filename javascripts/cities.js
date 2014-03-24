var City = Backbone.Model.extend({
  defaults: {
    health: 100;
  },
  this.view = CityView({
    model: this
  });
});

var CityCollection = Backbone.Collection.extend({
  model: City
});

var CityView = Backbone.View.extend({
  // tagName: null,
  // template: null,
  // initialize: function(){

  // },
  // render: function(){

  // }
})