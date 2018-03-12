function test() {
	return { name: "test" };
}
define("test", function() {}),
	require(["./test"], function(e) {
		return console.log(e), { name: "werun" };
	}),
	define("werun", function() {});
