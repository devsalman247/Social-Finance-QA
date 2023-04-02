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
				// nextQuestion.scrollIntoView({ behavior: "smooth" });
			}

			if (nextQuestion === null) {
				const nextSection = question.parentElement.parentElement.nextElementSibling;

				if (nextSection !== null) {
					nextSection.querySelector(".question").classList.remove("d-none");
					// nextSection.querySelector(".question").scrollIntoView({ behavior: "smooth" });
					nextSection.classList.remove("disabled");
					nextSection.classList.toggle("active");
					nextSection.querySelector(".accordion-icon").classList.toggle("active");

					const activeSection = question.parentElement.parentElement;
					activeSection.classList.toggle("active");
					activeSection.querySelector(".accordion-icon").classList.toggle("active");
				}
			}
		});
	});
}

let radarChartOptions = {
	responsive: [
		{
			breakpoint: 1024,
			options: {
				chart: {
					height: 250,
					width: 400,
				},
			},
		},
	],
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
	responsive: [
		{
			breakpoint: 1024,
			options: {
				chart: {
					height: 150,
					width: 300,
				},
			},
		},
	],
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
		height: 250,
		width: 400,
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
		height: 150,
		width: 350,
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
	document.getElementById("reset").style.display = "inline-block";
});

document.getElementById("download").addEventListener("click", function downloadPDF(e) {
	e.preventDefault();
	document.getElementById("radar").style.display = "none";
	document.getElementById("bar").style.display = "none";

	document.getElementById("radarAlt").style.display = "block";
	document.getElementById("barAlt").style.display = "block";
	setTimeout(() => {
		const enterBefore = document.querySelector(".accordion");
		const newDiv = document.createElement("div");
		newDiv.id = "calPDF";
		const chartsDiv = document.createElement("div");
		chartsDiv.classList.add("chartsPdf");
		chartsDiv.style.display = "flex";
		chartsDiv.style.justifyContent = "center";
		chartsDiv.style.alignItems = "center";
		chartsDiv.style.width = "100%";
		chartsDiv.style.maxHeight = "400px";
		chartsDiv.style.backgroundColor = "#191919cc";
		enterBefore.prepend(newDiv);

		const radar = document.getElementById("radarAlt");
		const bar = document.getElementById("barAlt");
		radar.style.marginInline = "auto";
		bar.style.marginInline = "auto";
		bar.style.pageBreakAfter = "always";

		const header = document.createElement("div");
		header.innerHTML = `
    	<div id="header-pdf">
    		<h3>
        		INVESTMENT READINESS ROADMAP
    		</h3>
    		<p>
        		Test and improve your capacity to attract and use investment to scale your impact.
    		</p>
    	</div>`;

		const details = document.createElement("div");
		details.innerHTML = `
    	<div id="details-pdf">
    		<p>
        		Welcome to the Investment Readiness Roadmap! It is a systematic toolkit to support impact entrepreneurs on their journeys towards investment readiness and to strengthen their ability to raise capital from investors. The IR Roadmap is introduced in the context of the "B-Briddhi – Scaling Impact Enterprises of Bangladesh" program:
    		</p>
    		<p>
        		It is designed as a practice-driven framework and consists of a series of targeted questions in 5 key categories. These questions will allow you to reflect on where you currently are within your investment readiness journey. Based on your answers, you will see a spiderweb graph highlighting your strengths, gaps and areas for improvement. Don’t assume you’ll need a perfect score in all categories to be able to attract investors. Rather consider it as a continuous opportunity for learning.
    		</p>
    	</div>`;
		details.style.pageBreakAfter = "always";

		const elements = document.getElementsByClassName("accordion-item");
		Array.from(elements).forEach((element) => {
			element.classList.remove("disabled");
			if (!element.classList.contains("active")) {
				element.classList.toggle("active");
			}
		});

		const icons = document.getElementsByClassName("accordion-icon");
		Array.from(icons).forEach((icon) => {
			icon.style.display = "none";
		});

		const radioLabels = document.querySelectorAll(".choices .radio-label");
		Array.from(radioLabels).forEach((label) => {
			label.style.maxWidth = "680px";
		});
		document.getElementById("c1-q2").style.pageBreakAfter = "always";
		document.getElementById("c1-q5").style.pageBreakAfter = "always";
		document.getElementById("c1-q7").style.pageBreakAfter = "always";
		document.getElementById("c2-q1").style.pageBreakAfter = "always";
		document.getElementById("c2-q3").style.pageBreakAfter = "always";
		document.getElementById("c2-q7").style.pageBreakAfter = "always";
		document.getElementById("c3-q1").style.pageBreakAfter = "always";
		document.getElementById("c3-q3").style.pageBreakAfter = "always";
		document.getElementById("c3-q7").style.pageBreakAfter = "always";
		document.getElementById("c4-q1").style.pageBreakAfter = "always";
		document.getElementById("c4-q3").style.pageBreakAfter = "always";
		document.getElementById("c4-q7").style.pageBreakAfter = "always";
		document.getElementById("c5-q2").style.pageBreakAfter = "always";
		document.getElementById("c5-q5").style.pageBreakAfter = "always";
		document.getElementById("c5-q2").style.marginBottom = "7px";
		document.getElementById("c5-q5").style.marginBottom = "7px";
		document.getElementById("c4-q5").style.pageBreakAfter = "always";

		const headings = document.querySelectorAll(".question h3");
		Array.from(headings).forEach((heading) => {
			heading.style.maxWidth = "750px";
		});

		chartsDiv.prepend(radar, bar);
		const parent5 = document.querySelector(".question.c5-0").parentElement.parentElement;
		const parent4 = document.querySelector(".question.c4-0").parentElement.parentElement;
		const parent3 = document.querySelector(".question.c3-0").parentElement.parentElement;
		const parent2 = document.querySelector(".question.c2-0").parentElement.parentElement;
		const parent1 = document.querySelector(".question.c1-0").parentElement.parentElement;
		const radioChecked = document.querySelectorAll('input[type="radio"]:checked + label');
		radioChecked.forEach((label) => {
			label.classList.add("checked-label");
		});
		accordionHeaders.forEach((header) => {
			header.classList.add("accordion-header-pdf");
		});
		newDiv.prepend(header, chartsDiv, details, parent1, parent2, parent3, parent4, parent5);

		const element = document.getElementById("calPDF");
		html2pdf()
			.from(element)
			.set({
				margin: 0.2,
				filename: "Social Finance Q&A.pdf",
				html2canvas: {
					scale: 1.2,
				},
				jsPDF: { unit: "in", format: "letter", orientation: "portrait", compressPDF: true, dpi: 300 },
			})
			.save()
			.then(() => {
				document.getElementById("radar").style.display = "block";
				document.getElementById("bar").style.display = "block";
			});
	}, 2000);
});
document.getElementById("reset").addEventListener("click", function resetForm() {
	document.getElementById("download").style.display = "none";
	document.getElementById("reset").style.display = "none";
	document.getElementById("radar").style.display = "none";
	document.getElementById("bar").style.display = "none";
	document.getElementById("radarAlt").style.display = "none";
	document.querySelector(".accordion").classList.toggle("d-none");
	// document.getElementById("calPDF").style.display = "none";
	document.getElementById("barAlt").style.display = "none";
	document.getElementById("submit").classList.toggle("d-none");
	document.getElementById("c5-q2").style.marginBottom = "";
	document.getElementById("c5-q5").style.marginBottom = "";
	const ctx = document.getElementById("bar");
	const parentCtx = ctx.parentElement;
	parentCtx.classList.add("d-none");
	parentCtx.parentElement.style.backgroundColor = "#f8f8f8";
	parentCtx.parentElement.style.width = "960px";

	const radioChecked = document.querySelectorAll('input[type="radio"]:checked + label');
	radioChecked.forEach((label) => {
		label.classList.remove("checked-label");
	});
	accordionHeaders.forEach((header) => {
		header.classList.remove("accordion-header-pdf");
	});

	const elements = document.getElementsByClassName("accordion-item");
	Array.from(elements).forEach((element, index) => {
		if (index !== 0) {
			element.classList.add("disabled");
			if (element.classList.contains("active")) {
				element.classList.toggle("active");
			}
		} else {
			document.querySelector(".accordion-icon").classList.toggle("active");
			element.classList.toggle("active");
		}
	});

	const questions = document.querySelectorAll(".question");
	Array.from(questions).forEach((question, index) => {
		question.querySelector(".cat-c:checked").checked = false;
		if (index !== 0) {
			if (!question.classList.contains("d-none")) {
				question.classList.toggle("d-none");
			}
		}
	});

	const icons = document.getElementsByClassName("accordion-icon");
	Array.from(icons).forEach((icon) => {
		icon.style.display = "inline";
	});

	const radioLabels = document.querySelectorAll(".choices .radio-label");
	Array.from(radioLabels).forEach((label) => {
		label.style.maxWidth = "765px";
	});

	const headings = document.querySelectorAll(".question h3");
	Array.from(headings).forEach((heading) => {
		heading.style.maxWidth = "100%";
	});
});
