(function(has, addtest, cssprop){
    addtest('webkit', function () {
        return navigator.userAgent.match(/ AppleWebKit\//);
    });
    addtest('ios3', function () {
        return navigator.userAgent.match(/(iPad|iPhone); CPU OS 3_\d/i);
    });
    addtest('ios4', function () {
        return navigator.userAgent.match(/(iPad|iPhone); CPU OS 4_\d/i);
    });
    addtest('ios5', function () {
        return navigator.userAgent.match(/(iPad|iPhone); CPU OS 5_\d/i);
    });
})(has, has.add, has.cssprop);

