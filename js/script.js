const accordionHeaders = document.querySelectorAll(".accordion-header");
const values = {
	c1: [0, 0, 0, 0, 0, 0, 0, 0],
	c2: [0, 0, 0, 0, 0, 0, 0, 0],
	c3: [0, 0, 0, 0, 0, 0, 0, 0],
	c4: [0, 0, 0, 0, 0, 0, 0, 0],
	c5: [0, 0, 0, 0, 0, 0, 0, 0],
};
const result = {
	c1: 0,
	c2: 0,
	c3: 0,
	c4: 0,
	c5: 0,
};

const resultArray = [];

accordionHeaders.forEach((header) => {
	header.addEventListener("click", () => {
		if (!header.parentNode.classList.contains("disabled")) {
			header.parentNode.classList.toggle("active");
			header.querySelector(".accordion-icon").classList.toggle("active");
		}
	});
});

const questions = document.querySelectorAll(".question");

for (let question of questions) {
	const choices = question.querySelectorAll(".cat-c");

	choices.forEach((choice) => {
		choice.addEventListener("click", function (e) {
			const categories = e.target.parentElement.parentElement.classList[1].split("-");
			values[categories[0]][categories[1]] = Number(e.target.value);

			if (e.target.name === "cat5-q8") {
				document.querySelector(".submit.disabled")?.classList.toggle("disabled");
			}

			const nextQuestion = question.nextElementSibling;

			if (nextQuestion) {
				nextQuestion.classList.remove("d-none");
			}

			if (nextQuestion === null) {
				const nextSection = question.parentElement.parentElement.nextElementSibling;

				if (nextSection !== null) {
					nextSection.querySelector(".question").classList.remove("d-none");
					nextSection.classList.remove("disabled");
					nextSection.classList.toggle("active");
					nextSection.querySelector(".accordion-icon").classList.toggle("active");

					const activeSection = question.parentElement.parentElement;
					activeSection.classList.toggle("active");
					activeSection.querySelector(".accordion-icon").classList.toggle("active");
				}
			}
			document.getElementById("scroll").scrollIntoView({ behavior: "smooth" });
		});
	});
}

let radarChartOptions = {
	series: [
		{
			name: "Score",
			data: [],
		},
	],
	chart: {
		type: "radar",
		height: 400,
		width: 600,
	},
	colors: ["#a2c709"],
	fill: {
		colors: ["#a2c709"],
		opacity: 0.85,
	},
	yaxis: { show: false, min: 0, max: 40 },
	toolbar: { show: false },
	xaxis: {
		labels: {
			style: {
				colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
			},
		},
		categories: [
			"The Social Problem",
			"The Solution & Impact",
			"Market & Distribution",
			"Growth & Scaling",
			"Financing & Forecasts",
		],
	},
	markers: {
		size: 4,
		colors: ["#a2c709"],
	},
	dataLabels: {
		style: {
			fontSize: "14px",
			fontFamily: "Karla, Arial, sans-serif",
			fontWeight: "bold",
			colors: undefined,
		},
	},
};

const barChartOptions = {
	series: [
		{
			name: "Score",
			data: [],
		},
	],
	chart: {
		type: "bar",
		height: 250,
		width: 450,
	},
	plotOptions: {
		bar: {
			borderRadius: 4,
			horizontal: true,
		},
	},
	dataLabels: {
		enabled: false,
	},
	toolbar: { show: false },
	fill: {
		colors: ["#a2c709"],
	},
	xaxis: {
		labels: {
			style: {
				colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
			},
		},
		categories: [
			"The Social Problem",
			"The Solution & Impact",
			"Market & Distribution",
			"Growth & Scaling",
			"Financing & Forecasts",
		],
		min: 0,
		max: 40,
	},
	yaxis: {
		labels: {
			style: {
				colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
			},
		},
	},
	grid: {
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
};

let radarAltChartOptions = {
	series: [
		{
			name: "Score",
			data: [],
		},
	],
	chart: {
		type: "radar",
		height: 300,
		width: 450,
	},
	colors: ["#a2c709"],
	fill: {
		colors: ["#a2c709"],
		opacity: 0.85,
	},
	yaxis: { show: false, min: 0, max: 40 },
	toolbar: { show: false },
	xaxis: {
		labels: {
			style: {
				colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
			},
		},
		categories: [
			"The Social Problem",
			"The Solution & Impact",
			"Market & Distribution",
			"Growth & Scaling",
			"Financing & Forecasts",
		],
	},
	markers: {
		size: 4,
		colors: ["#a2c709"],
	},
	dataLabels: {
		style: {
			fontSize: "14px",
			fontFamily: "Karla, Arial, sans-serif",
			fontWeight: "bold",
			colors: undefined,
		},
	},
};

const barAltChartOptions = {
	series: [
		{
			name: "Score",
			data: [],
		},
	],
	chart: {
		type: "bar",
		height: 200,
		width: 400,
	},
	plotOptions: {
		bar: {
			borderRadius: 4,
			horizontal: true,
		},
	},
	dataLabels: {
		enabled: false,
	},
	toolbar: { show: false },
	fill: {
		colors: ["#a2c709"],
	},
	xaxis: {
		labels: {
			style: {
				colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
			},
		},
		categories: [
			"The Social Problem",
			"The Solution & Impact",
			"Market & Distribution",
			"Growth & Scaling",
			"Financing & Forecasts",
		],
		min: 0,
		max: 40,
	},
	yaxis: {
		labels: {
			style: {
				colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
			},
		},
	},
	grid: {
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
};

const barChart = new ApexCharts(document.getElementById("bar"), barChartOptions);
barChart.render();
const radarChart = new ApexCharts(document.getElementById("radar"), radarChartOptions);
radarChart.render();
const barAltChart = new ApexCharts(document.getElementById("barAlt"), barAltChartOptions);
barAltChart.render();
const radarAltChart = new ApexCharts(document.getElementById("radarAlt"), radarAltChartOptions);
radarAltChart.render();

document.getElementById("submit").addEventListener("click", (e) => {
	for (let prop in values) {
		if (values.hasOwnProperty(prop) && Array.isArray(values[prop])) {
			const sum = values[prop].reduce((partialSum, a) => partialSum + a, 0);
			result[prop] = sum;
			resultArray.push(sum);
		}
	}

	e.target.classList.add("d-none");
	document.querySelector(".accordion").classList.add("d-none");

	const barAlt = document.getElementById("barAlt");
	const ctx = document.getElementById("bar");
	const parentCtx = ctx.parentElement;
	parentCtx.classList.remove("d-none");
	parentCtx.style.display = "flex";
	parentCtx.style.justifyContent = "center";
	parentCtx.style.alignItems = "center";
	parentCtx.parentElement.classList.add("w100");
	parentCtx.parentElement.style.backgroundColor = "#191919cc";

	Chart.defaults.color = "white";
	radarChartOptions.series[0].data = resultArray;
	barChartOptions.series[0].data = resultArray;
	radarAltChartOptions.series[0].data = resultArray;
	barAltChartOptions.series[0].data = resultArray;

	document.getElementById("download").style.display = "inline-block";
});

document.getElementById("download").addEventListener("click", function downloadPDF(e) {
	e.preventDefault();
	document.getElementById("radar").style.display = "none";
	document.getElementById("bar").style.display = "none";

	document.getElementById("radarAlt").style.display = "block";
	document.getElementById("barAlt").style.display = "block";

	const enterBefore = document.querySelector(".accordion");
	const newDiv = document.createElement("div");
	newDiv.id = "calPDF";
	const chartsDiv = document.createElement("div");
	chartsDiv.classList.add("chartsPdf");
	chartsDiv.style.display = "flex";
	chartsDiv.style.justifyContent = "center";
	chartsDiv.style.alignItems = "center";
	chartsDiv.style.width = "100%";
	chartsDiv.style.height = "100%";
	chartsDiv.style.backgroundColor = "#191919cc";
	enterBefore.prepend(newDiv);

	const radar = document.getElementById("radarAlt");
	const bar = document.getElementById("barAlt");
	radar.style.marginInline = "auto";
	bar.style.marginInline = "auto";
	bar.style.pageBreakAfter = "always";

	chartsDiv.prepend(radar, bar);
	newDiv.prepend(chartsDiv);

	const element = document.getElementById("calPDF");
	html2pdf()
		.from(element)
		.set({
			margin: 0.5,
			filename: "Social Finance Q&A.pdf",
			html2canvas: { scale: 2 },
			jsPDF: { unit: "in", format: "letter", orientation: "portrait", compressPDF: true, dpi: 300 },
		})
		.save()
		.then(() => {
			document.getElementById("radar").style.display = "block";
			document.getElementById("bar").style.display = "block";
		});
});
