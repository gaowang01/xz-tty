/* ========================================================================
 * xz-tty: time.js v0.0.1
 * @描述：根据时间按钮显示不同的内容
*/

+function($){
	'use strict'
	//Time Class definition
	var Time = function(element){
		this.element = $(element);
	}

	Time.VERSION = '0.0.1';
	Time.TRANSITION_DURATION = 150;

	Time.prototype.show = function(){
		var $this = this.element;
		var $ul = $this.closest('ul');
		var selector = $this.data('target');

		if (!selector) {
			selector = $this.attr('href');
			selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')//strip # ie7
		}
		//如果当前激活 返回
		if ($this.parent('li').hasClass('active')) return;

		//找到当前激活的li
		var $previous = $ul.find('.active:last a');
		//发出事件
		this.active($this.closest('li'),$ul);
		//异步请求
	}

	Time.prototype.active = function(element,container,callback){
		var $active = container.find('> .active');
		$active.removeClass('active');
		element.addClass('active');
	}

	//Time Plugn definition
	function Plugin(option){
		return this.each(function(){
			var $this = $(this);
			var data = $this.data('xz.time');

			if (!data) $this.data('xz.time',(data = new Time(this)));
			//执行 option 函数
			if (typeof option == 'string') data[option]();
		})
	}

	//Time DATA-API
	var clickHandler = function(e) {
		e.preventDefault();
		Plugin.call($(this),'show');
	}

	$(document).on('click.xz.time.data-api','[data-toggle="time"]',clickHandler);
}(jQuery)
