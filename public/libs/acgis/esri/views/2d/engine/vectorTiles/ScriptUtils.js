// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.allowsIdeographicBreak=function(a){return 11904>a?!1:12704<=a&&12735>=a||12544<=a&&12591>=a||65072<=a&&65103>=a||63744<=a&&64255>=a||13056<=a&&13311>=a||11904<=a&&12031>=a||12736<=a&&12783>=a||12288<=a&&12351>=a||13312<=a&&19903>=a||19968<=a&&40959>=a||12800<=a&&13055>=a||65280<=a&&65519>=a||12352<=a&&12447>=a||12272<=a&&12287>=a||12032<=a&&12255>=a||12784<=a&&12799>=a||12448<=a&&12543>=a||65040<=a&&65055>=a||42128<=a&&42191>=a||40960<=a&&42127>=a?!0:!1};b.hasVerticalOrientation=
function(a){return 746===a||747===a?!0:4352>a?!1:12704<=a&&12735>=a||12544<=a&&12591>=a||65072<=a&&65103>=a&&!(65097<=a&&65103>=a)||63744<=a&&64255>=a||13056<=a&&13311>=a||11904<=a&&12031>=a||12736<=a&&12783>=a||12288<=a&&12351>=a&&!(12296<=a&&12305>=a||12308<=a&&12319>=a)&&12336!==a||13312<=a&&19903>=a||19968<=a&&40959>=a||12800<=a&&13055>=a||12592<=a&&12687>=a||43360<=a&&43391>=a||55216<=a&&55295>=a||4352<=a&&4607>=a||44032<=a&&55215>=a||12352<=a&&12447>=a||12272<=a&&12287>=a||12688<=a&&12703>=
a||12032<=a&&12255>=a||12784<=a&&12799>=a||12448<=a&&12543>=a&&12540!==a||65280<=a&&65519>=a&&!(65288===a||65289===a||65293===a||65306<=a&&65310>=a||65339===a||65341===a||65343===a||65371<=a&&65503>=a||65507===a||65512<=a&&65519>=a)||65104<=a&&65135>=a&&!(65112<=a&&65118>=a||65123<=a&&65126>=a)||5120<=a&&5759>=a||6320<=a&&6399>=a||65040<=a&&65055>=a||19904<=a&&19967>=a||40960<=a&&42127>=a||42128<=a&&42191>=a?!0:!1};b.isLineBreak=function(a){switch(a){case 10:case 32:case 38:case 40:case 41:case 43:case 45:case 47:case 173:case 183:case 8203:case 8208:case 8211:case 8231:return!0}return!1};
b.isWhiteSpace=function(a){switch(a){case 9:case 10:case 11:case 12:case 13:case 32:return!0}return!1};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});