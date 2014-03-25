var Silo=Backbone.Model.extend({defaults:{health:100,missiles:[],location:{longitude:null,latitude:null}},initialize:function(){var e=this;_.times(5,function(){var t=new Missile({silo:e});e.attributes.missiles.push(t)}),e.view=new SiloView({model:e})}}),SiloCollection=Backbone.Collection.extend({model:Silo}),SiloView=Backbone.View.extend({tagName:"div",className:"silo",el:"#silo_container",render:function(){var e=this;return this.$el.html(this.template(this.model.attributes)),this},initialize:function(){var e=this;this.render()},template:_.template("<svg xmlns='http://www.w3.org/2000/svg' version='1.1'><polygon style='fill:none;stroke:green;stroke-width:2.5px' points='3,18 15,2 27,18'> </polygon> <text style='text-align:center;' x='0' y='30' font-size='10'><%= this.model.attributes.missiles.length  %></text></svg>")}),SiloListView=Backbone.View.extend({});