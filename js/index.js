$(document).ready(function(){

	
// ----------------------------------------------

	// 打开网页默认设置
	chrome.storage.local.get(null,function(item){
		
		// 检查回到顶部功能
		if(item.isTop==undefined){
			console.log("top功能未定义，即将初始化top功能");
			var isTop={};
			isTop.value="top";
			chrome.storage.local.set({
				isTop
			}, function(){
		   		console.log("初始化top成功");
		   		top();
			});
		}else if(item.isTop.value=="top"){
			console.log("回到顶部功能已开启");
			top();
		}else if(item.isTop.value=="noTop"){
			console.log("回到顶部功能已关闭");
		}

		// 网页加载后自动生成右键菜单
		if(item.cMenus==undefined){
			console.log("cMenus功能未定义，即将初始化cMenus功能");
			var cMenus={};
			cMenus.value="menus";
			chrome.storage.local.set({
				cMenus
			}, function(){
				// 向后台发送消息
		   		chrome.runtime.sendMessage({cMenus: "menus"}, function(response) {
				  console.log("cMenus已开启");
				});
			});
		}else if(item.cMenus.value=="menus"){
			// 向后天发送消息
			chrome.runtime.sendMessage({cMenus: "menus"}, function(response) {
				  console.log("cMenus已开启");
			});
		}


	});


// ----------------------------------------------
	// 回到顶部效果（一）开始

	function top(){

		// 创建a标签
		var a=$("<a></a>");
		a.addClass("cd-top");
		a.attr("href","#0");
		$("body").append(a);
		console.log("创建新元素a");

		// 设置参数
		var offset = 300,
			offset_opacity = 1200,
			scroll_top_duration = 700,
			$back_to_top = $('.cd-top');

			// 监听滚动条件
			$(window).scroll(function(){
				( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
				if( $(this).scrollTop() > offset_opacity ) { 
					$back_to_top.addClass('cd-fade-out');
				}
				console.log("回到顶部")
			});

			// 点击a标签回到顶部
			$back_to_top.on('click', function(event){
				event.preventDefault();
				$('body,html').animate({
					scrollTop: 0 ,
				 	}, scroll_top_duration
				);
				console.log("已经回到顶部")
			});
	}

	
	// 回到顶部效果（一）结束
// -------------------------------------------------

	// 鼠标指针特效 开始

	// 每次打开网页首先获取存储内容（当前cursor样式）
	chrome.storage.local.get(null,function(item){
		// 打印进度
		console.log("获取所有存储内容");
		// 打印当前鼠标指针资源url
		console.log(item.cursorUrl.current);
		// 定义当前选定鼠标指针样式
		var cursor="url("+item.cursorUrl.current+")"+","+"auto"
		// 样式赋值到所有网页元素
		$("body").css({

				"cursor":cursor
			});
		$("div").css({

			"cursor":cursor
		});
		$("p").css({

			"cursor":cursor
		});
		$("video").css({

			"cursor":cursor
		});
		$("header").css({

			"cursor":cursor
		});
		$("footer").css({

			"cursor":cursor
		});
		$("a").css({

			"cursor":cursor
		});
		$("button").css({

			"cursor":cursor
		});
		$("form").css({

			"cursor":cursor
		});
		$("iframe").css({

			"cursor":cursor
		});
		$("img").css({

			"cursor":cursor
		});
		$("input").css({

			"cursor":cursor
		});
		$("nav").css({

			"cursor":cursor
		});
		$("ul").css({

			"cursor":cursor
		});
		$("ol").css({

			"cursor":cursor
		});
		$("section").css({

			"cursor":cursor
		});
		$("table").css({

			"cursor":cursor
		});
		$("span").css({

			"cursor":cursor
		});
	});

	// 监听存储改变
	chrome.storage.onChanged.addListener(function (data,area){
		// 打印进度
		console.log("存储改变");
		// 打印存储改变内容
		console.log(data);
		// 打印储存改变区域
		console.log(area);

		// 当储存改变后重新获取cursor值，并改变样式
		chrome.storage.local.get(null,function(item){
			// 打印进度
			console.log("获取所有存储内容");
			// 打印当前鼠标指针资源url
			console.log(item.cursorUrl.current);
			// 定义当前选定鼠标指针样式
			var cursor="url("+item.cursorUrl.current+")"+","+"auto"
			// 样式赋值到所有网页元素
			$("body").css({

				"cursor":cursor
			});
			$("div").css({

				"cursor":cursor
			});
			$("p").css({

				"cursor":cursor
			});
			$("video").css({

				"cursor":cursor
			});
			$("header").css({

				"cursor":cursor
			});
			$("footer").css({

				"cursor":cursor
			});
			$("a").css({

				"cursor":cursor
			});
			$("button").css({

				"cursor":cursor
			});
			$("form").css({

				"cursor":cursor
			});
			$("iframe").css({

				"cursor":cursor
			});
			$("img").css({

				"cursor":cursor
			});
			$("input").css({

				"cursor":cursor
			});
			$("nav").css({

				"cursor":cursor
			});
			$("ul").css({

				"cursor":cursor
			});
			$("ol").css({

				"cursor":cursor
			});
			$("section").css({

				"cursor":cursor
			});
			$("table").css({

				"cursor":cursor
			});
			$("span").css({

				"cursor":cursor
			});
		});
	});

	// 鼠标指针特效 结束

// --------------------------------------------------


})