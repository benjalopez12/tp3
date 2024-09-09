var alumnos = ["Juan", "María", "Lucía", "Carlos", "Ana", "Luis", "Sofía", "Miguel", "Elena", "Raúl"];
var curso = "Curso de Programación";
o
var alumnosConCurso = alumnos.map(function(alumno) {
    return curso + ": " + alumno;
});
console.log(alumnosConCurso);
