$.ajax({
    type: "POST",
    url: "~/pyscript.py"
}).done(function(o) {
    document.getElementById('pyoutput').innerHTML = response
});