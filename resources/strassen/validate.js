dpd.orte.get({name: this.ort})
    .then(function(results){
        if(results.length === 0){
            error('ort','Ungültiger Ort');
        }   
    },function(err){
        error('ort','Ungültiger Ort');
        console.log(err);
});