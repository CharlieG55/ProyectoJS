var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y Apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
    var diaNacimientoConyuge = prompt("Ingrese el dia de nacimiento", "Ejemplo: Si nacio el 22 de enero, solamente ingresar 22");
    var mesNacimientoConyuge = prompt("Ingrese el mes de nacimiento","Ejemplo: Si nacio en enero, solamente ingresar 1 porque es el mes 1");
    var anioNacimientoConyuge = prompt("Ingrese el año de nacimiento","Ejemplo: SI nacio el 22 de enero de 1987, solamente ingresar 1987");

var hijos = prompt("Tiene hijos?","SI/NO");
var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese unicamente numeros");

const precioBase = 250;
const comision = precioBase * 0.30;
var recargos = 0;
var recargosConyuge = 0;
var recargosHijos = (cantidadHijos * precioBase) * 0.01;
var totalPagar = precioBase + comision + recargos + recargosConyuge + recargosHijos;

if (anioNacimiento >= 2002 && anioNacimiento <= 2020){
    alert("Usted es menor de edad. No se puede asegurar.");
} else if (anioNacimiento <=  2000 && anioNacimiento >= 1999){
    precioBase + comision + recargos;
} else if (anioNacimiento <= 1998 && anioNacimiento >= 1995){
    recargos = precioBase * 0.01;
    totalPagar = precioBase + comision + recargos;
} else if (anioNacimiento <= 1994 && anioNacimiento >= 1990){
    recargos = precioBase * 0.02;
    totalPagar = precioBase + comision + recargos;
} else if (anioNacimiento <= 1989 &&  anioNacimiento >= 1980){
    recargos = precioBase * 0.05;
    totalPagar = precioBase + comision + recargos;
} else if (anioNacimiento <= 1979 && anioNacimiento >= 1970){
    recargos = precioBase * 0.08;
    totalPagar = precioBase + comision + recargos;
} else if (anioNacimiento <= 1969 && anioNacimiento >= 1955){
    recargos = precioBase * 0.12;
    totalpagar = precioBase + comision + recargos;
} else {
    alert("Usted es mayor de 65 años de edad, no se puede asegurar.");
};

if (anioNacimientoConyuge >= 1990 && anioNacimientoConyuge <= 2002){
    recargosConyuge = precioBase * 0.01;
    totalPagar = precioBase + comision + recargos + recargosConyuge + recargosHijos;
} else if  (anioNacimientoConyuge <= 1989 && anioNacimientoConyuge >= 1980){
    recargosConyuge = precioBase * 0.02;
    totalPagar = precioBase + comision + recargos + recargosConyuge + recargosHijos;
} else if (anioNacimientoConyuge <= 1979 && anioNacimientoConyuge >= 1970){
    recargosConyuge = precioBase * 0.03;
    totalPagar = precioBase + comision + recargos + recargosConyuge + recargosHijos;
} else if (anioNacimientoConyuge <= 1969 && anioNacimientoConyuge >= 1950){
    recargosConyuge = precioBase * 0.05;
    totalPagar = precioBase + comision + recargos + recargosConyuge + recargosHijos;
} else {
    alert("No hay recargo por conyuge.");
};

document.write ("TK-U le da la bienvenida al mejor seguro para usted y su familia. A continuacion encontrara los detalles de su cotizacion.");
document.write ("<br>");
document.write ("<br>","Nombre del Asegurado Titular:");
document.write ("<br>",nombreCompleto);
document.write ("<br>");
document.write ("<br>", "Fecha de Nacimiento:");
document.write ("<br>",diaNacimiento,"/",mesNacimiento,"/",anioNacimiento);
document.write ("<br>");
document.write ("<br>","Esta Casado:");
document.write ("<br>",conyuge);
document.write ("<br>");
document.write ("<br>","Tiene hijos:");
document.write ("<br>",hijos);
document.write ("<br>");
document.write ("<br>","Numero de hijos menores de 21 años:");
document.write ("<br>",cantidadHijos);
document.write ("<br>");
document.write ("<br>","Desglose de cargos");
document.write ("<br>");
document.write ("<br>","Precio Base:");
document.write ("<br>","Q",precioBase);
document.write ("<br>");
document.write ("<br>","Comision:");
document.write ("<br>","Q",comision);
document.write ("<br>");
document.write ("<br>","Recargos por rango de edad:");
document.write ("<br>","Q",recargos);
document.write ("<br>");
document.write ("<br>","Recargos por Conyuge:");
document.write ("<br>","Q",recargosConyuge);
document.write ("<br>");
document.write ("<br>","Recargo por hijos:");
document.write ("<br>",recargosHijos);
document.write ("<br>");
document.write ("<br>","Total a pagar:");
document.write ("<br>","Q",totalPagar);