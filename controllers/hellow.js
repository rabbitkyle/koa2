var fn_hellow =  async (ctx, next) => {
	var name = ctx.params.name;
	ctx.response.body = `<h1>hellow ${name}</h1>`;
        
};



module.exports = {
	'GET /hellow/:name': fn_hellow
};