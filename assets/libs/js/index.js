$(document).ready(function()
{
	$("#wordCloud").jQWCloud({
		words: [
				{word: 'Java', weight: 40},
				{word: 'Jquery', weight: 39},
				{word: 'Planen', weight: 11, color: 'green'},
				{word: 'Requierments', weight: 27},
				{word: 'ITSM', weight: 36},
				{word: 'BSSW', weight: 39},
				{word: 'GPI', weight: 12, color: 'green'},
				{word: 'C++', weight: 27},
				{word: 'Phyton', weight: 36},
				{word: 'Rechnungen', weight: 22},
				{word: 'Post', weight: 40},
				{word: 'Meetings', weight: 39},
				{word: 'Dokumentationen', weight: 11, color: 'green'},
				{word: 'Audit', weight: 27},
				{word: 'Präsentation', weight: 36},
				{word: 'Network', weight: 39},
				{word: 'Security', weight: 12, color: 'green'},
				{word: 'Risk Management', weight: 27},
				{word: 'Finance', weight: 80},
				{word: 'Feierabend', weight: 22}

		],
		//cloud_color: 'yellow',
		minFont: 10,
		maxFont: 50,
		//fontOffset: 5,
		//cloud_font_family: 'Owned',
		//verticalEnabled: false,
		padding_left: 1,
		//showSpaceDIV: true,
		//spaceDIVColor: 'white',
		word_common_classes: 'WordClass',
		word_mouseEnter :function(){
			$(this).css("text-decoration","underline");
		},
		word_mouseOut :function(){
			$(this).css("text-decoration","none");
		},
		word_click: function(){
			alert("You have selected:" +$(this).text());
		},
		beforeCloudRender: function(){
		       date1=new Date();
	 	},
	 	afterCloudRender: function(){
				var date2=new Date();
				console.log("Cloud Completed in "+(date2.getTime()-date1.getTime()) +" milliseconds");
			}
	});

});
