// document.addEventListener("DOMContentLoaded", function(event) {
//     initMap();
//
//
//     function initMap() {
//         const uluru = {lat: -25.363, lng: 131.044};
//         const map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 4,
//             center: uluru
//         });
//         const marker = new google.maps.Marker({
//             position: uluru,
//             map: map
//         });
//     }
//
// });

function initMap() {} // now it IS a function and it is in global

$(() => {
    initMap = function() {
        const coordinates = {lat: 52.914581, lng: 22.516998};
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: coordinates,
            mapTypeId: google.maps.MapTypeId.HYBRID
        });
        const marker = new google.maps.Marker({
            position: coordinates,
            map: map
        });
    }
});
