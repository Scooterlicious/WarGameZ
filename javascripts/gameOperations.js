var gameOperations = {

  lastMouseLatLong: null,
 
  setMouseLatLongWatcher: function(){
    // Returns the longitude and latitude of where the mouse is clicked
    // e.g., [-84.35368421052631, 20.691987822319366] (long, lat)
    d3.select("#draggable").on("mouseup.log",function(){
                                                          gameOperations.lastMouseLatLong = {
                                                                      longitude: map.projection.invert(d3.mouse(this))[0],
                                                                      latitude: map.projection.invert(d3.mouse(this))[1]
                                                                      };
                                                          })
  },


  deploySilos: function() {
        $(".silo").draggable();

        $("#container1").droppable({
            accept: "#draggable",
            drop: function( event, ui ) {

                                        console.log(gameOperations.lastMouseLatLong) 
                                        }
        });
  }



}


$(function(){

  gameOperations.setMouseLatLongWatcher();
  gameOperations.deploySilos();

})