var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
             },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function(){
                      for (var playlistNumber in this.playlists){
                       var playlistName = this.playlists[playlistNumber].name;
                       var numOfTracks = this.playlists[playlistNumber].tracks.length;

                       console.log(playlistNumber + ": " + playlistName + " - " + numOfTracks + " tracks");
                       }
                   },
  printPlaylist: function(playlistId){
                      console.log(playlistId + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
                      var tracksSelected = this.playlists[playlistId].tracks;
                      for (i = 0; i < tracksSelected.length; i++){
                        console.log(tracksSelected[i] + ": " + this.tracks[tracksSelected[i]].name + " by " +
                                   this.tracks[tracksSelected[i]].artist + " (" +
                                   this.tracks[tracksSelected[i]].album + ")");
                     }
                    }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();
library.printPlaylist("p01");

// var printPlaylist = function (playlistId) {

//   console.log(playlistId + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");

//   var tracksSelected = library.playlists[playlistId].tracks;
//   for (var i = 0; i < tracksSelected.length; i++){
//     console.log(tracksSelected[i] + ": " + library.tracks[tracksSelected[i]].name + " by " +
//                 library.tracks[tracksSelected[i]].artist + " (" +
//                 library.tracks[tracksSelected[i]].album + ")");
//   }
// };
// printPlaylist("p01");





// // adds an existing track to an existing playlist
// var addTrackToPlaylist = function (trackId, playlistId) {
//   library.playlists[playlistId].tracks.push(trackId);
// };
// addTrackToPlaylist("t03", "p01");
// console.log(library.playlists.p01.tracks);




// // generates a unique id
// // (use this for addTrack and addPlaylist)

// var uid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// };


// // adds a track to the library
// var addTrack = function (name, artist, album) {
//   var newId = uid();
//   library.tracks[newId] = { id: newId, name, artist, album };
// };
// addTrack("Sing", "Matthew", "First");
// console.log(library);


// // adds a playlist to the library

// var addPlaylist = function (name) {
//   var newId = uid();
//   library.playlists[newId] = {id:newId, name, tracks: []};
// };
// addPlaylist("Best Hits");
// console.log(library);

// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }