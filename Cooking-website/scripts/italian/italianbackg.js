if(!imageID){
    document.getElementById("myimage").src="images/italian/lol.jpg";
    imageID++;
}
else{if(imageID==1){
    document.getElementById("myimage").src="images/italian/itb.jpg";
    imageID++;
}else{if(imageID==2){
    document.getElementById("myimage").src="http://www.photos.a-vsp.com/fotodb/14_green_cones.jpg";
    imageID=0;
}}}
//call same function again for x of seconds
setTimeout("changeimage("+every_seconds+")",((every_seconds)*1000));