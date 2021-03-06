const blocks = [
	"0011",
	"0101",
	"0110",
	"1001",
	"1010",
	"1100"
];

const grid = [
	"012345",
	"6789AB",
	"CDEFGH",
	"IJKLMN",
	"OPQRST",
	"UVWXYZ"
];

var short = document.createElement('img');
short.classList.add("stripe");
var long = short.cloneNode(true);
short.src = "assets/short.png";
long.src = "assets/long.png";

var topbar = document.getElementById("topbtns");
var botbar = document.getElementById("botbtns");

var toppart = 0;
var botpart = 0;

function btnclick(btn)
{
	var block = parseInt(btn.getAttribute("block"));
	var id = btn.parentElement.id;

	if (id == "topbtns")
		toppart = block;
	else if (id == "botbtns")
		botpart = block;

	update();
}

function update()
{
	document.getElementById("dp-result").innerText = grid[toppart][botpart];
	document.getElementById("dp-kix").innerText = grid[toppart][botpart];
}

function reset()
{
	toppart = botpart = 0;
	update();
}

function clearbuffer()
{
	document.getElementById("buffer").value = "";
}

function addchar()
{
	document.getElementById("buffer").value += grid[toppart][botpart];
	reset();
}

(function() {
	for (var i = 0; i < blocks.length; i++)
	{
		var btn = document.createElement('button');

		btn.classList.add("kixbtn");
		btn.setAttribute("block", i);
		btn.setAttribute("onclick", "btnclick(this)");

		for (var c = 0; c < blocks[i].length; c++)
		{
			var char = blocks[i][c];
			if (char == "0")
				btn.appendChild(short.cloneNode(true));
			else if (char == "1")
				btn.appendChild(long.cloneNode(true));
		}

		topbar.appendChild(btn);
		botbar.appendChild(btn.cloneNode(true));
	}

	update();
})();