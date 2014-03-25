var City = Backbone.Model.extend({
  defaults: {
    population: 0,
  },
  initialize: function(){
    this.view = new CityView({
      model: this
    });
  }
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