// 鼠标移动星星特效文件

(function($) {

var jstar_call_id = 0;

// 默认函数（不用修改）
$.jstars = {};
$.fn.jstars = function(settings)
{
	// check IE. only IE9+ support
	var ua = window.navigator.userAgent,
		msie = ua.indexOf("MSIE ");
	if (msie > 0) {
		if (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))) < 9) return;
	}
	// apply default params
	settings = $.extend({}, $.fn.jstars.defaults, settings);
	// define frequency
	settings.frequency = 20 - Math.max(1, Math.min(settings.frequency, 19));
  
	// save in global
  var jstar_timer = null;
  var jstar_index = 0;
  var jstar_dindex = 0;
  var jstar_image = null;
  var jstar_id = 'jstar_span_' + jstar_call_id++;
	
	return this.each(
		function()
		{
			// preprocess
			if( !jstar_timer ){
        // timer function
        var jstar_uptade_star_bg = function(){
          if( ! $('span.jstar_span').size ) return;

          $('span.jstar_span.'+jstar_id).each(function(){
            var bg_pos = $(this).css('background-position').split(' ');
            var bg_pos_x = parseInt(bg_pos[0]);
            var bg_pos_y = parseInt(bg_pos[1]);
            $(this).css('background-position', (bg_pos_x - settings.width) + 'px ' + bg_pos_y + 'px');
          })
        }        
        
				// init timer
				jstar_timer = setInterval(jstar_uptade_star_bg, settings.delay / 9);
				// init image
				jstar_image = new Image();
				jstar_image.src = "https://om83cysj8.qnssl.com/jstar-map.png";
			}
			
			// hover event
			$(this).mousemove(function(e){
				if( (jstar_dindex++ % settings.frequency) != 0) return;
				
				// define what side we need to show stars:
				var sideX = jstar_rand(-1,1);
				var sideY = jstar_rand(-1,1);
				
				var randX = jstar_rand(5, 30);
				var randY = jstar_rand(5, 30);
				
				var opacity = Math.min(Math.random() + 0.4, 1);
				
				// calculate coordinate
				var x = e.pageX + (sideX * randX);
				var y = e.pageY + (sideY * randY);
				
				// show span and launch animate
				var id = 'jstar_' + jstar_index++;
				
				// append style
				if( settings.style != 'rand' ){
					var bg_pos = '0px ' + settings.style_map[ settings.style ] + 'px';
				}
				else{
					var ind = jstar_rand(0, 5);
					var i = 0;
					for(var key in settings.style_map){
						if( i++ == ind ){
							var bg_pos = '0px ' + settings.style_map[ key ] + 'px';
							break;
						}
					}
				}
				
				jstar_image.src = "https://om83cysj8.qnssl.com/jstar-map.png";
				var span = '<span id="' + id + '" class="jstar_span '+jstar_id+'" style="display:block; width:27px; height:27px; background:url('+jstar_image.src+') no-repeat '+bg_pos+'; margin:0; padding:0; position:absolute; top:-50px; left:0;">&nbsp;</span>';
				$(document.body).append(span);
				
				var star = $('#' + id);
				star
					.css({
						top: y,
						left: x,
						'opacity': opacity
					})
					.animate({ opacity: 0 }, settings.delay, function(){ star.remove(); }); // remove span on finish animate*/
			})
		}
	)
};

// 默认函数（不用修改）
function jstar_rand(from, to){
	var r = Math.random();
	r = r * (to - from);
	r = r + from;
	r = Math.round(r);
	return r;
}

// 此处设定星星参数
$.fn.jstars.defaults = {
	image_path: '',
	image: 'jstar-map.png',
	// 更改style切换对应的星星颜色
	// 比如white/blue/green/red/yellow
	style: 'red',
	// 设定星星的频率
	frequency: 12,
	// 默认（不用修改）
	style_map: {
		white: 0,
		blue: -27,
		green: -54,
		red: -81,
		yellow: -108
	},
	// 星星的宽高（不用修改）
	width: 27,
	height: 27,
	// 设定星星出现的延迟时间
	// 也就是星星的拖尾效果
	delay: 300
};


})(jQuery);
