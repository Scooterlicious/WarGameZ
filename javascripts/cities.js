var City = Backbone.Model.extend({
  defaults: {
    health: 100
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