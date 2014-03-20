$.fn.paralaxer = function() 
{
	var el = this;

	var paralaxer = {
		markup :
		{
			init : function()
			{
				this.self = el;
				this.$self = $(el);
			}
		},
		init : function()
		{
			paralaxer.markup.init();

			paralaxer.markup.self.each(function(){
				console.log(this);
			});

			return paralaxer;
		}
	}

	paralaxer.init();
};