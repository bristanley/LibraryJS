
var myNexusNine = {
	Brand: 'Nexus',
	Device: 'Tablet',
	Year: 2015,
	Cons: {
		Screen: "Bleed in from corners",
		Battery: "5-6",
		OS: "No support on factory problems after 1yr"
	},
	Pros: {
		OS: "Pure Andriod Experience",
		Sound: "Two front facing speakers",
		Screen: "8.9 inch 1080p",
		Processor: "Tegra power"
	}
};

console.log(myNexusNine.Brand);
console.log(myNexusNine.Cons.Screen);
console.log(myNexusNine.Pros.Sound);


if (myNexusNine.Pros.length > myNexusNine.Cons.length) {
		console.log("You shooud buy a Nexus 9");
};






