document.getElementById('formuc').style.display = 'none';
document.getElementById('formucp').style.display = 'none';
document.getElementById('formut').style.display = 'none';
document.getElementById('formutp').style.display = 'none';
document.getElementById('formure').style.display = 'none';
document.getElementById('formurep').style.display = 'none';
document.getElementById('formucirculo').style.display = 'none';
document.getElementById('formucirp').style.display = 'none';

















document.getElementById('radio').style.display = 'none';
document.getElementById('radioin').style.display = 'none';
document.getElementById('lado3').style.display = 'none';
document.getElementById('lado3in').style.display = 'none';
document.getElementById('lado2').style.display = 'none';
document.getElementById('lado2in').style.display = 'none';
document.getElementById('altura').style.display = 'none';
document.getElementById('alturain').style.display = 'none';
document.getElementById('base').style.display = 'none';
document.getElementById('basein').style.display = 'none';
document.getElementById('fiel').style.display = 'none';
document.getElementById("btn1").style.display = 'none';
document.getElementById("btn2").style.display = 'none';
document.getElementById("ladolabel").style.display = 'none';
document.getElementById("lado").style.display = 'none';
function squaree(){
var info=(document.getElementById("figuraa").value);
console.log(info);
if(info=="Cuadrado"){
    document.getElementById('formuc').style.display = 'block';
document.getElementById('formucp').style.display = 'block';
document.getElementById('formut').style.display = 'none';
document.getElementById('formutp').style.display = 'none';
document.getElementById('formure').style.display = 'none';
document.getElementById('formurep').style.display = 'none';
document.getElementById('formucirculo').style.display = 'none';
document.getElementById('formucirp').style.display = 'none';

    document.getElementById('radio').style.display = 'none';
document.getElementById('radioin').style.display = 'none';
    document.getElementById('lado3').style.display = 'none';
document.getElementById('lado3in').style.display = 'none';
document.getElementById('lado2').style.display = 'none';
document.getElementById('lado2in').style.display = 'none';
    document.getElementById('altura').style.display = 'none';
document.getElementById('alturain').style.display = 'none';
    document.getElementById('base').style.display = 'none';
document.getElementById('basein').style.display = 'none';
    document.getElementById('fiel').style.display = 'none';
    document.getElementById("kk").innerHTML = null;
    document.getElementById("resu").innerHTML = null;
    document.getElementById("kk2").innerHTML = null;
    document.getElementById("resu2").innerHTML = null;
document.getElementById("Titulo").innerHTML=info;
document.getElementById("img").src="cua.png";
document.getElementById("ladolabel").style.display = 'block';
document.getElementById("lado").style.display = 'block';
document.getElementById("btn1").style.display = 'block';
document.getElementById("btn2").style.display = 'block';
}else if(info=="Triangulo"){
    document.getElementById('formuc').style.display = 'none';
document.getElementById('formucp').style.display = 'none';
document.getElementById('formut').style.display = 'block';
document.getElementById('formutp').style.display = 'block';
document.getElementById('formure').style.display = 'none';
document.getElementById('formurep').style.display = 'none';
document.getElementById('formucirculo').style.display = 'none';
document.getElementById('formucirp').style.display = 'none';

    document.getElementById('radio').style.display = 'none';
document.getElementById('radioin').style.display = 'none';
    document.getElementById('lado3').style.display = 'block';
document.getElementById('lado3in').style.display = 'block';
document.getElementById('lado2').style.display = 'block';
document.getElementById('lado2in').style.display = 'block';
    document.getElementById('altura').style.display = 'block';
document.getElementById('alturain').style.display = 'block';
    document.getElementById("ladolabel").style.display = 'none';
document.getElementById("lado").style.display = 'none';
    document.getElementById('base').style.display = 'block';
document.getElementById('basein').style.display = 'block';
    document.getElementById('fiel').style.display = 'none';
    document.getElementById("Titulo").innerHTML=info;
    document.getElementById("kk").innerHTML = null;
    document.getElementById("resu").innerHTML = null;
    document.getElementById("kk2").innerHTML = null;
    document.getElementById("resu2").innerHTML = null;
    document.getElementById("img").src="tri.jfif";
    document.getElementById("btn1").style.display = 'block';
document.getElementById("btn2").style.display = 'block';
}else if(info=="Rectangulo"){
      document.getElementById("ladolabel").style.display = 'none';
document.getElementById("lado").style.display = 'none';
    document.getElementById('formuc').style.display = 'none';
document.getElementById('formucp').style.display = 'none';
document.getElementById('formut').style.display = 'none';
document.getElementById('formutp').style.display = 'none';
document.getElementById('formure').style.display = 'block';
document.getElementById('formurep').style.display = 'block';
document.getElementById('formucirculo').style.display = 'none';
document.getElementById('formucirp').style.display = 'none';

    document.getElementById('radio').style.display = 'none';
document.getElementById('radioin').style.display = 'none';
    document.getElementById('lado3').style.display = 'none';
document.getElementById('lado3in').style.display = 'none';
document.getElementById('lado2').style.display = 'none';
document.getElementById('lado2in').style.display = 'none';
    document.getElementById('altura').style.display = 'block';
document.getElementById('alturain').style.display = 'block';
    document.getElementById('base').style.display = 'block';
document.getElementById('basein').style.display = 'block';
    document.getElementById('fiel').style.display = 'none';
    document.getElementById("kk").innerHTML = null;
    document.getElementById("resu").innerHTML = null;
    document.getElementById("kk2").innerHTML = null;
    document.getElementById("resu2").innerHTML = null;
    document.getElementById("Titulo").innerHTML=info;
    document.getElementById("img").src="rec.jpg";
    document.getElementById("btn1").style.display = 'block';
document.getElementById("btn2").style.display = 'block';
}else if(info=="Circulo"){
      document.getElementById("ladolabel").style.display = 'none';
document.getElementById("lado").style.display = 'none';
    document.getElementById('formuc').style.display = 'none';
document.getElementById('formucp').style.display = 'none';
document.getElementById('formut').style.display = 'none';
document.getElementById('formutp').style.display = 'none';
document.getElementById('formure').style.display = 'none';
document.getElementById('formurep').style.display = 'none';
document.getElementById('formucirculo').style.display = 'block';
document.getElementById('formucirp').style.display = 'block';

    document.getElementById('radio').style.display = 'block';
document.getElementById('radioin').style.display = 'block';
    document.getElementById('lado3').style.display = 'none';
document.getElementById('lado3in').style.display = 'none';
document.getElementById('lado2').style.display = 'none';
document.getElementById('lado2in').style.display = 'none';
    document.getElementById('altura').style.display = 'none';
document.getElementById('alturain').style.display = 'none';
    document.getElementById('base').style.display = 'none';
document.getElementById('basein').style.display = 'none';
    document.getElementById('fiel').style.display = 'none';
    document.getElementById("kk").innerHTML = null;
    document.getElementById("resu").innerHTML = null;
    document.getElementById("kk2").innerHTML = null;
    document.getElementById("resu2").innerHTML = null;
    document.getElementById("Titulo").innerHTML=info;
    document.getElementById("img").src="circulo.png";
    document.getElementById("btn1").style.display = 'block';
document.getElementById("btn2").style.display = 'block';
}else{
    document.getElementById('formuc').style.display = 'none';
document.getElementById('formucp').style.display = 'none';
document.getElementById('formut').style.display = 'none';
document.getElementById('formutp').style.display = 'none';
document.getElementById('formure').style.display = 'none';
document.getElementById('formurep').style.display = 'none';
document.getElementById('formucirculo').style.display = 'none';
document.getElementById('formucirp').style.display = 'none';

    document.getElementById('radio').style.display = 'none';
document.getElementById('radioin').style.display = 'none';
    document.getElementById('lado3').style.display = 'none';
document.getElementById('lado3in').style.display = 'none';
document.getElementById('lado2').style.display = 'none';
document.getElementById('lado2in').style.display = 'none';
    document.getElementById('altura').style.display = 'none';
document.getElementById('alturain').style.display = 'none';
    document.getElementById('base').style.display = 'none';
document.getElementById('basein').style.display = 'none';
    document.getElementById('fiel').style.display = 'none';
    document.getElementById("kk").
    innerHTML = null;
    document.getElementById("resu").innerHTML = null;
    document.getElementById("kk2").innerHTML = null;
    document.getElementById("resu2").innerHTML = null;
    document.getElementById("Titulo").innerHTML=null;
    document.getElementById("img").src="pri.png";
    document.getElementById("btn1").style.display = 'none';
document.getElementById("btn2").style.display = 'none';
    document.getElementById("ladolabel").style.display = 'none';
document.getElementById("lado").style.display = 'none';
}



}
function area(){
  document.getElementById('fiel').style.display = 'block';
   
    var info=(document.getElementById("figuraa").value);
    if(info=="Cuadrado"){
        var lado=(parseInt(document.getElementById('lado').value));
var resultadocuadrado = lado*lado;
console.log(resultadocuadrado);
document.getElementById("kk").innerHTML = "RESULTADO AREA";
document.getElementById("resu").innerHTML = resultadocuadrado+"cm²";
        }else if(info=="Triangulo"){
       var basee=(parseInt(document.getElementById('basein').value));
       var alturaa=(parseInt(document.getElementById('alturain').value));
       var resultadoo=((basee*alturaa)/2);
       document.getElementById("kk").innerHTML = "RESULTADO AREA";
       document.getElementById("resu").innerHTML = resultadoo+"cm²";
        }else if(info=="Rectangulo"){
            var baserec=(parseInt(document.getElementById('basein').value));
            var alturarec=(parseInt(document.getElementById('alturain').value));
    var arearec=(baserec*alturarec);
    document.getElementById("kk").innerHTML = "RESULTADO AREA";
    document.getElementById("resu").innerHTML = arearec+"cm²";
        }else if(info=="Circulo"){
    var radiocirculo = (parseInt(document.getElementById('radioin').value));
    var resultadocirculo = (Math.PI*(radiocirculo ** 2));
    document.getElementById("kk").innerHTML = "RESULTADO AREA";
    document.getElementById("resu").innerHTML = resultadocirculo+"cm²";
        }else{

        }

}
function peri(){
    document.getElementById('fiel').style.display = 'block'
    var info=(document.getElementById("figuraa").value);
    if(info=="Cuadrado"){
        var lado=(parseInt(document.getElementById('lado').value));
var perimetro = lado+lado+lado+lado;
console.log(perimetro);
document.getElementById("kk2").innerHTML = "RESULTADO PERIMETRO";
document.getElementById("resu2").innerHTML = perimetro+"cm";
        }else if(info=="Triangulo"){
       var base =(parseInt(document.getElementById('basein').value));
       var lado2a=(parseInt(document.getElementById('lado2in').value));
       var lado3a = (parseInt(document.getElementById('lado3in').value));
       var resultadoperi = (base+lado2a+lado3a);
       document.getElementById("kk2").innerHTML = "RESULTADO PERIMETRO";
document.getElementById("resu2").innerHTML = resultadoperi+"cm";
        }else if(info=="Rectangulo"){
            var baserec=(parseInt(document.getElementById('basein').value));
            var alturarec=(parseInt(document.getElementById('alturain').value));
            var perirec = ((2*baserec)+(2*alturarec));
            document.getElementById("kk2").innerHTML = "RESULTADO PERIMETRO";
            document.getElementById("resu2").innerHTML = perirec+"cm";
        }else if(info=="Circulo"){
            var radiocir=(parseInt(document.getElementById('radioin').value));
            var perimetrocir = (2*Math.PI*radiocir);
            document.getElementById("kk2").innerHTML = "RESULTADO PERIMETRO";
            document.getElementById("resu2").innerHTML = perimetrocir+"cm";
        }else{

        }



}
