// 放在DOM加载之前的内容不受后台页面刷新影响


// 监听内容脚本消息（自动生成右键菜单）
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	    console.log(sender.tab ?
            "来自内容脚本：" + sender.tab.url :
            "来自扩展程序");
	// 判断菜单生成条件
    if (request.cMenus == "menus"){
    	// 生成菜单
    	chrome.contextMenus.create({
		    type: 'normal',
		    id:"100" ,
		    title: '爱心特效',
		    contexts: ['all'],
		},function(){
			console.log("右键菜单已经建立");
		});
    }
});

// 定义插入爱心js的文件
function love(){
	chrome.tabs.executeScript({file: "./js/love.js"},function(){
		console.log("love.js已经插入")
	});
}


// 监听菜单点击并执行函数
chrome.contextMenus.onClicked.addListener(function(){
	console.log("右键菜单收到一万吨点击");
	love();
	console.log("已经插入爱心特效");
});

// 设定通知类型和内容
var options = {
  type: "basic",
  title: "主要标题",
  message: "要显示的主要消息",
  iconUrl: "./img/icon_48.png"
}

// 创建并显示通知
// chrome.notifications.create("id", options, function(){
// 	console.log("创建并显示通知")
// });


// 获取当前用户是否开启通知
chrome.notifications.getPermissionLevel(function(){
	console.log("当前用户开启了通知")
})

// 用户单击了通知中的非按钮区域
chrome.notifications.onClicked.addListener(function(){
	console.log("用户单击了通知中的非按钮区域")
})

// 通知由系统或用户操作关闭(的时候)
chrome.notifications.onClosed.addListener(function(data){
	console.log("通知由系统或用户操作关闭")
})

// 设置浏览器按钮上的徽章，显示在图标上
chrome.browserAction.setBadgeText({
	text:""
})

// 设置徽章的背景颜色
chrome.browserAction.setBadgeBackgroundColor({
	color:"#666"
})





$(document).ready(function(){

<<<<<<< HEAD
=======

>>>>>>> eca50a601948656a23cebfc11aee541fbd44cc53
// ---------------------------------------------------

	// 设定选择开启粒子特效功能 开始

	// 点击开启粒子特效
	$("#pLeft").on("click",function(){
		chrome.storage.local.get(null,function(item){
			if(item.isPar==undefined){
					console.log("particle功能未定义，即将初始化particle功能");
					var isPar={};
					isPar.value="run";
					chrome.storage.local.set({
						isPar
					}, function(){
				   		console.log("初始化particle成功");
				   		$("#yPar").attr("checked","checked");
					});
			}else if(item.isPar.value=="run"){
				$("#yPar").attr("checked","checked");
				
			}else if(item.isPar.value=="stop"){
				$("#yPar").attr("checked","checked");
				var isPar={};
					isPar.value="run";
					chrome.storage.local.set({
						isPar
					}, function(){
				   		console.log("particle功能已开启");
					});
			}
		});
	})

	// 点击关闭粒子特效
	$("#pRight").on("click",function(){
		chrome.storage.local.get(null,function(item){
			if(item.isPar==undefined){
					console.log("particle功能未定义，即将初始化particle功能");
					var isPar={};
					isPar.value="run";
					chrome.storage.local.set({
						isPar
					}, function(){
				   		console.log("初始化particle成功");
				   		$("#yPar").attr("checked","checked");
					});
			}else if(item.isPar.value=="run"){
				$("#nPar").attr("checked","checked");
				var isPar={};
					isPar.value="stop";
					chrome.storage.local.set({
						isPar
					}, function(){
				   		console.log("particle功能已关闭");
					});
				
			}else if(item.isPar.value=="stop"){
				
			}
		});
	})
	
	// 设定选择开启粒子特效功能 结束

// ---------------------------------------------------

	// 鼠标指针特效 开始

	// 当点击鼠标指针图像时
	$("#cursor img").on("click",function(){
		// 打印获取到的鼠标指针资源
		console.log($(this).attr("title"));

		// 新建变量存放指针url
		var cursorUrl={};
		cursorUrl.current=$(this).attr("title");

		// 把资源url放入浏览器本地储存
		chrome.storage.local.set({

			cursorUrl
		}, function(){
			// 打印进度
	   		console.log("存储成功local:cursorUrl");
		});

		// 监听存储改变
		chrome.storage.onChanged.addListener(function (data,area){
			// 打印进度
			console.log("存储改变");
			// 打印改变的元素
			console.log(data);
			// 打印改变的存储区域
			console.log(area);
		});
	});

	// 当点击默认指针按钮时
	$("#default").on("click",function(){
		// 打印获取到的鼠标指针资源
		console.log($(this).attr("title"));

		// 新建变量存放指针url
		var cursorUrl={};
		cursorUrl.current=$(this).attr("title");

		// 把资源url放入浏览器本地储存
		chrome.storage.local.set({

			cursorUrl
		}, function(){
			// 打印进度
	   		console.log("存储成功local:cursorUrl");
		});

		// 监听存储改变
		chrome.storage.onChanged.addListener(function (data,area){
			// 打印进度
			console.log("存储改变");
			// 打印改变的元素
			console.log(data);
			// 打印改变的存储区域
			console.log(area);
		});
	})

	// 鼠标指针特效 结束

// ---------------------------------------------------
	
	// 控制回到顶部功能设置

	// 初始化顶部开关和特效开关样式样式
	chrome.storage.local.get(null,function(item){
			// console.log(item);
			// 设置顶部开关
			if(item.isTop==undefined){
				console.log("top功能未定义");
			}else if(item.isTop.value=="top"){
				$("#yTop").attr("checked","checked");
				console.log("top已开启");
			}else if(item.isTop.value=="noTop"){
				$("#nTop").attr("checked","checked");
				console.log("top功能已关闭");
			}

			// 设置特效开关
			if(item.isPar==undefined){
				console.log("particle功能未定义");
			}else if(item.isPar.value=="run"){
				$("#yPar").attr("checked","checked");
				console.log("particle功能已开启");
			}else if(item.isPar.value=="stop"){
				$("#nPar").attr("checked","checked");
				console.log("particle功能已关闭");
			}

	});

	// 关闭回到顶部按钮
	$("#noTop").on("click",function(){
		$("top").removeAttr('checked');
		chrome.storage.local.get(null,function(item){
			// console.log(item);
			if(item.isTop==undefined){
				console.log("top功能未定义，即将初始化top功能");
				var isTop={};
				isTop.value="top";
				chrome.storage.local.set({
					isTop
				}, function(){
			   		console.log("初始化top成功");
				});
			}else if(item.isTop.value=="top"){
				var isTop={};
				isTop.value="noTop";
				chrome.storage.local.set({
						isTop
					}, function(){
				   		console.log("isTop改为noTop"+"top功能已关闭");
				});
				chrome.storage.onChanged.addListener(function (data,area){
					// 打印进度
					console.log("存储改变");
					// 打印改变的元素
					console.log(data);
					// 打印改变的存储区域
					console.log(area);
				});
			}else if(item.isTop.value=="noTop"){
				console.log("noTop")
			}
		});
		
	})
	// 开启回到顶部按钮
	$("#top").on("click",function(){
		chrome.storage.local.get(null,function(item){
		// console.log(item);
		if(item.isTop==undefined){
			console.log("top功能未定义，即将初始化top功能");
			var isTop={};
			isTop.value="top";
			chrome.storage.local.set({
				isTop
			}, function(){
		   		console.log("初始化top成功");
			});
		}else if(item.isTop.value=="top"){
			console.log("top");
		}else if(item.isTop.value=="noTop"){
			var isTop={};
			isTop.value="top";
			chrome.storage.local.set({
					isTop
				}, function(){
			   		console.log("isTop改为top"+"top功能已开启");
			});
			chrome.storage.onChanged.addListener(function (data,area){
				// 打印进度
				console.log("存储改变");
				// 打印改变的元素
				console.log(data);
				// 打印改变的存储区域
				console.log(area);
			});
		}
		});
		
	})



})