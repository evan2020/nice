$(document).ready(function(){

	chrome.storage.local.get(null,function(item){
			// console.log(item);
			if(item.isPar==undefined){
				console.log("particle功能未定义，即将初始化particle功能");
				var isPar={};
				isPar.value="run";
				chrome.storage.local.set({
					isPar
				}, function(){
			   		console.log("初始化particle成功");
				});
			}else if(item.isPar.value=="run"){
				console.log("particle已设定开启");
				initAnchors();
				initStars();
				console.log("particle开启成功");
			}else if(item.isPar.value=="stop"){
				console.log("particle已设定停止")
			}
		});


	// initAnchors();
	// initStars();
})

//默认函数（不用修改）
function initAnchors() {
	new SmoothScroll({
		anchorLinks: '.nav > li > a',
		extraOffset: function() {
			var totalHeight = 0;
			jQuery('.navbar-fixed-top').each(function(){
				totalHeight += jQuery(this).outerHeight();
			});
			return totalHeight;
		},
		activeClasses: 'link'
	});
}

// 设置网页中哪些元素有星星
function initStars() {

	$('html').jstars({
		image_path: 'images'
	});

	$('body').jstars({
		image_path: 'images'
	});

	$('div').jstars({
		image_path: 'images'
	});

	$('p').jstars({
		image_path: 'images'
	});

	$('img').jstars({
		image_path: 'images'
	});

	$('a').jstars({
		image_path: 'images'
	});

	$('section').jstars({
		image_path: 'images'
	});

	$('table').jstars({
		image_path: 'images'
	});

	$('button').jstars({
		image_path: 'images'
	});

	$('iframe').jstars({
		image_path: 'images'
	});

	$('frame').jstars({
		image_path: 'images'
	});

	$('ol').jstars({
		image_path: 'images'
	});

	$('ul').jstars({
		image_path: 'images'
	});

	$('dl').jstars({
		image_path: 'images'
	});

	$('input').jstars({
		image_path: 'images'
	});

	$('form').jstars({
		image_path: 'images'
	});

	$('header').jstars({
		image_path: 'images'
	});

	$('footer').jstars({
		image_path: 'images'
	});

	$('nav').jstars({
		image_path: 'images'
	});

	$('li').jstars({
		image_path: 'images'
	});

	$('th').jstars({
		image_path: 'images'
	});

	$('td').jstars({
		image_path: 'images'
	});

	$('strong').jstars({
		image_path: 'images'
	});



	// $('#example-blue').jstars({
	// 	image_path: 'images',
	// 	style: 'blue',
 //    frequency: 15
	// });

	// $('#example-yellow').jstars({
	// 	image_path: 'images',
	// 	style: 'yellow',
	// 	frequency: 19
	// });

	// $('#example-green').jstars({
	// 	image_path: 'images',
	// 	style: 'green'
	// });

	// $('#example-red').jstars({
	// 	image_path: 'images',
	// 	style: 'red',
	// 	frequency: 5
	// });

	// $('#example-rand').jstars({
	// 	image_path: 'images',
	// 	style: 'rand'
	// });

	// $('#custom').jstars({
	// 	image_path: 'images',
 //    image: 'candy-cane-stars.png',
	// 	style: 'white',
 //    width: 34,
 //    height: 34,
 //    delay: 700,
 //    frequency: 5
	// });  
  
}
