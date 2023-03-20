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
				document.querySelector(".submit.disabled").classList.toggle("disabled");
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
		// height: 350,
		type: "radar",
	},
	// title: {
	// 	text: "Social Finance Survey",
	// },
	// fill: {
	// 	opacity: 1,
	// },
	yaxis: { show: false, min: 0, max: 40 },
	toolbar: { show: false },
	xaxis: {
		categories: [
			"The Social Problem",
			"The Solution & Impact",
			"Market & Distribution",
			"Growth & Scaling",
			"Financing & Forecasts",
		],
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
		// height: 350,
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
	xaxis: {
		categories: [
			"The Social Problem",
			"The Solution & Impact",
			"Market & Distribution",
			"Growth & Scaling",
			"Financing & Forecasts",
		],
	},
};

const barChart = new ApexCharts(document.getElementById("bar"), barChartOptions);
barChart.render();
const radarChart = new ApexCharts(document.getElementById("radar"), radarChartOptions);
radarChart.render();

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
	parentCtx.style.marginInline = "auto";
	parentCtx.style.width = "1260px";
	parentCtx.style.gap = "20px";
	parentCtx.parentElement.classList.add("w100");
	parentCtx.parentElement.style.backgroundColor = "#191919cc";
	// console.log(ctx.parentElement, ctx);

	Chart.defaults.color = "white";
	radarChartOptions.series[0].data = resultArray;
	barChartOptions.series[0].data = resultArray;

	// new Chart(ctx, {
	// 	type: "bar",
	// 	data: {
	// 		labels: [
	// 			"The Social Problem",
	// 			"The Solution & Impact",
	// 			"Market & Distribution",
	// 			"Growth & Scaling",
	// 			"Financing & Forecasts",
	// 		],
	// 		datasets: [
	// 			{
	// 				label: "Score",
	// 				data: resultArray,
	// 				borderWidth: 1,
	// 				backgroundColor: "#a2c709",
	// 				// borderColor: "white",
	// 			},
	// 		],
	// 	},
	// 	options: {
	// 		indexAxis: "y",
	// 		scales: {
	// 			y: {
	// 				beginAtZero: true,
	// 			},
	// 			x: {
	// 				max: 40,
	// 			},
	// 			// xAxes: [
	// 			// 	{
	// 			// 		ticks: {
	// 			// 			fontColor: "white",
	// 			// 		},
	// 			// 		gridLines: {
	// 			// 			color: "white",
	// 			// 		},
	// 			// 	},
	// 			// ],
	// 			// yAxes: [
	// 			// 	{
	// 			// 		ticks: {
	// 			// 			fontColor: "white",
	// 			// 		},
	// 			// 		gridLines: {
	// 			// 			color: "white",
	// 			// 		},
	// 			// 	},
	// 			// ],
	// 		},
	// 	},
	// });
	// new Chart(barAlt, {
	// 	type: "bar",
	// 	data: {
	// 		labels: [
	// 			"The Social Problem",
	// 			"The Solution & Impact",
	// 			"Market & Distribution",
	// 			"Growth & Scaling",
	// 			"Financing & Forecasts",
	// 		],
	// 		datasets: [
	// 			{
	// 				label: "Score",
	// 				data: resultArray,
	// 				borderWidth: 1,
	// 				backgroundColor: "#a2c709",
	// 				borderColor: "white",
	// 			},
	// 		],
	// 	},
	// 	options: {
	// 		indexAxis: "y",
	// 		scales: {
	// 			y: {
	// 				beginAtZero: true,
	// 			},
	// 			x: {
	// 				max: 40,
	// 			},
	// 		},
	// 	},
	// });

	const polarArea = document.getElementById("polar");
	const polarAlt = document.getElementById("polarAlt");

	document.getElementById("download").style.display = "inline-block";
});

document.getElementById("download").addEventListener("click", function downloadPDF(e) {
	e.preventDefault();
	const enterBefore = document.querySelector(".accordion");
	const newDiv = document.createElement("div");
	newDiv.id = "calPDF";
	const chartsDiv = document.createElement("div");
	chartsDiv.classList.add("chartsPdf");
	chartsDiv.style.display = "flex";
	chartsDiv.style.justifyContent = "center";
	chartsDiv.style.alignItems = "center";
	enterBefore.prepend(newDiv);

	const polar = document.getElementById("radar");
	const bar = document.getElementById("bar");
	polar.style.marginInline = "auto";
	bar.style.marginInline = "auto";
	bar.style.pageBreakAfter = "always";

	chartsDiv.prepend(polar, bar);
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
			document.getElementById("polarAlt").style.display = "block";
			document.getElementById("barAlt").style.display = "block";
		});
});
