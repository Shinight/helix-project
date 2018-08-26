var headerSlide_i = 0;
var headerSlide_array = ["Egyensúly","Biztonság","Átláthatóság","Támogatás","Korszerűség","Kreativitás","Lendület","Realitás","Optimalizálás"];	
var headerSlide_elem;
function headerSlideNext(){
	headerSlide_i++;
	headerSlide_elem.style.opacity = 0;		
	if(headerSlide_i > (headerSlide_array.length - 1)){		
		headerSlide_i = 0;
	}
	setTimeout('headerSlide()',1000);
}
function headerSlide(){		
	headerSlide_elem.innerHTML = headerSlide_array[headerSlide_i];	
	headerSlide_elem.style.opacity = 1;
	setTimeout('headerSlideNext()',2000);
}
headerSlide_elem = document.getElementById("headerSlide"); headerSlide(); 