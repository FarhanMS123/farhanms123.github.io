// ANCHOR: ifLine.js
/*
ifLine([statement, value_true], [statement, value_true], [sm, vt], ... , [sm, vt]); //will return one of value_true or false
-----------------------------------------------------------------------------------------------------------------------------
ifLine([false, 3], [false, 4], [true, 5], [false, 6], [true, 7]); //return 5
ifLine([false, 3], [false, 4], [false, 5], [false, 6], [false, 7]); //return false
*/

function ifLine(){
	arguments = Array.prototype.slice.call(arguments);
	var i;
	for(i=0;i<arguments.length;i++){
		if((/(null|undefined)/ig).test(arguments[i])) continue;
		if(arguments[i].constructor == Array) if(arguments[i][0] == true) return arguments[i][1];
	}
	return false;
}

// ANCHOR inRange.js
function inRange(x, min, max){
	return x >= min && x <= max;
}

// ANCHOR kickMid_arr.js
function kickMid(arr, index){
	var dt = []; var i;
	for(i=0;i<arr.length;i++){
		if(i==index) continue;
		dt.push(arr[i])
	}
	return dt;
}

// ANCHOR range.js
function range(a, b, x){
  return a + ((b-a) * x);
}

// ANCHOR range2.js
/*
  a -> array = [0,20,40,60,80,100];
  x -> number as coordinates = 0.3
  return 30
*/

function range2(a, x){
	if(typeof a != "object") throw Error("first arguments should an array");
	if(a.constructor != Array) throw Error("first arguments should an array");
	if(a.length<=1) return NaN;
	//0, 1/a_length, 2*(1/a_length), 3*(1/a_length), ...
	//                     0<=x<=1
	if(x==0) return a[0];
	var spr = 1/(a.length-1);
	var i = Math.ceil(x / spr);
	return a[i-1] + ((a[i]-a[i-1]) * (x - (spr * (i-1)))/spr);
}

// ANCHOR time.js
function getDates(date){
	var m = [31,(year % 4 == 0 ? 29 : 28),31,30,31,30,31,31,30,31,30,31];
	var year = date.getFullYear();
	var month = (year * 12) + date.getMonth() + 1;
	var day = ((year - 1) * 365) + (((year - 1) - ((year - 1) % 4)) / 4) + date.getDate();
	if(date.getMonth() + 1 > 1){
		for(i=0; i<date.getMonth() - 1; i++){
			day += m[i]
		}
	}
	var hour = (day * 24) + date.getHours();
	var minute = (hour * 60) + date.getMinutes();
	var second = minute * 60 + date.getSeconds();
	var ms = (second * 1000) + date.getMilliseconds()
	return {year: year, mon: month, day: day, hour:hour, sec:second, ms: ms};
}

// ANCHOR txt2args.js
function splitArgs(arg){
	var full = arg.split(" ");
	var u=-1, x=[], l="", i=undefined;
	for(i=0;i<full.length;i++){
		if(u>-1){
			full[u] += ` ${full[i]}`;
			x.push(i);
		}
		if(u == -1 && (full[i].slice(0,1) == "\"" || full[i].slice(0,1) == "\'")){
			u=i;
			l=full[i].slice(0,1);
			full[i] = full[i].slice(1);
		}
		if(u > -1 && full[i].slice(-1) == l){
			full[u] = full[u].slice(0, -1);
			u=-1;
		}
	}
	var i = undefined;
	for(i=x.length - 1;i>-1;i--){
		var dt = []; var u;
		for(u=0;u<full.length;u++){
			if(u==x[i]) continue;
			dt.push(full[u])
		}
		full = dt;
	}
	return full;
}

// ANCHOR txt2meta.js
function txt2meta(txt){
	txt = txt.replace(/\\"/g, "\"").replace(/\\'/g, "\'").replace(/\\`/g, "\`").replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\\\/g, "\\");
	var rg = [[/\\([abcdef]|[ABCDEF]|[0-9]){3}/g, 8], [/\\x([abcdef]|[ABCDEF]|[0-9]){2}/g, 16], [/\\u([abcdef]|[ABCDEF]|[0-9]){4}/g, 16]];
	var i;
	for(i=0;i<rg.length;i++){
		if(txt.match(rg[i][0]) != null){
			txt.match(rg[i][0]).forEach(function(s){
				txt = txt.replace(s, String.fromCharCode(parseInt( (/([abcdef]|[ABCDEF]|[0-9])+/).exec(s)[0] , rg[i][1])));
			});
		}
	}
	return txt;
}
