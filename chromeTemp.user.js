// ==UserScript==
// @name        AgarRTHKtool++
// @namespace   AgarRTHKtool++
// @author      翠如bb HK Golden
// @include     http://agar.io/
// @version     6.89
// @grant       none
// ==/UserScript==
$.getScript( "https://drive.google.com/uc?export=download&id=0Bwj_YCavPEMpVlhYTmVKTjZqZzA" )
.done(function( script, textStatus ) {
    $.getScript( "https://drive.google.com/uc?export=download&id=0Bwj_YCavPEMpOWRUeVFMdTJrbkE" );
})
.fail(function( jqxhr, settings, exception ) {
    console.log("fail to load script");
});
