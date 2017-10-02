/* 
 * Copyright (C) 2017 Slikee
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

$(function() {
	"use strict";
	var x=0;
	var str="";	
	var fccApi="";
	var rank30DaysApi="https://fcctop100.herokuapp.com/api/fccusers/top/recent";
	var rankAllTimeApi="https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
	var $mainTable=$("#mainTable");
	var $toggleRank=$("#toggleRank");	
	
	function display(api) {
		fccApi=api;
		x=1;
		// preparing render array
		str="<table><tbody>";
		str+="<tr><th>RANK</th><th class=\"text-center\">CAMPER NAME</th><th>PAST 30 DAYS</th class=\"text-center\"><th class=\"text-center\">ALL TIME</th></tr>";
		// connecting to fcc api
		$.getJSON(api, function(json) {
			$.each(json, function(a,b) {
				var camperName=json[a].username;
				var allTimeRank=json[a].alltime;
				var rank30Days=json[a].recent;
				var camperImg=json[a].img;
				// adding retrieved datas in render array
				str+="<tr>";
				str+="<td>"+x+"</td>";
				str+="<td><img src=\""+camperImg+"\" class=\"img-fluid\">";
				str+=camperName+"</td>";
				str+="<td class=\"text-center\">"+rank30Days+"</td>";
				str+="<td class=\"text-center\">"+allTimeRank+"</td>";
				str+="</tr>";
				$mainTable.html(str);		
				x++;
			});
		});		
		$mainTable.append("</tbody></table>");		
	};
	// displaying 30 last days ranking
	display(rank30DaysApi);
	// handling toggle between the 2 rankings
	$toggleRank.click(function() {		
		var rank30DaysApi="https://fcctop100.herokuapp.com/api/fccusers/top/recent";
		var rankAllTimeApi="https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
		if (fccApi === rank30DaysApi) {			
			display(rankAllTimeApi);
		}
		else {
			display(rank30DaysApi);
		}
	});	
}); // end $function