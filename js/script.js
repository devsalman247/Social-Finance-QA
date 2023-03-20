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
			// console.log(e.target.id, e.target.id.includes("cat1")); // string type

			const categories = e.target.parentElement.parentElement.classList[1].split("-");
			// console.log(categories);
			// console.log(values[categories[0]]);
			values[categories[0]][categories[1]] = Number(e.target.value);
			// console.log(values[categories[0]][categories[1]]);
			// if (categories.includes("c1")) {
			// 	values.social += Number(e.target.value);
			// } else if (categories.includes("c2")) {
			// 	values.solution += Number(e.target.value);
			// } else if (categories.includes("c3")) {
			// 	values.market += Number(e.target.value);
			// }

			if (e.target.name === "cat5-q8") {
				document.querySelector(".submit.disabled").classList.toggle("disabled");
			}

			const nextQuestion = question.nextElementSibling;

			if (nextQuestion) {
				// nextQuestion.scrollIntoView({ behavior: "smooth", block: "end" });
				// nextQuestion.focus();
				nextQuestion.classList.remove("d-none");
			}

			if (nextQuestion === null) {
				// console.log(question.parentElement.parentElement.nextElementSibling.classList);

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

document.getElementById("submit").addEventListener("click", (e) => {
	for (let prop in values) {
		if (values.hasOwnProperty(prop) && Array.isArray(values[prop])) {
			const sum = values[prop].reduce((partialSum, a) => partialSum + a, 0);
			result[prop] = sum;
			resultArray.push(sum);
		}
	}
	// console.log(result);

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

	new Chart(ctx, {
		type: "bar",
		data: {
			labels: [
				"The Social Problem",
				"The Solution & Impact",
				"Market & Distribution",
				"Growth & Scaling",
				"Financing & Forecasts",
			],
			datasets: [
				{
					label: "Score",
					data: resultArray,
					borderWidth: 1,
					backgroundColor: "#a2c709",
					// borderColor: "white",
				},
			],
		},
		options: {
			indexAxis: "y",
			scales: {
				y: {
					beginAtZero: true,
				},
				x: {
					max: 40,
				},
				// xAxes: [
				// 	{
				// 		ticks: {
				// 			fontColor: "white",
				// 		},
				// 		gridLines: {
				// 			color: "white",
				// 		},
				// 	},
				// ],
				// yAxes: [
				// 	{
				// 		ticks: {
				// 			fontColor: "white",
				// 		},
				// 		gridLines: {
				// 			color: "white",
				// 		},
				// 	},
				// ],
			},
		},
	});
	new Chart(barAlt, {
		type: "bar",
		data: {
			labels: [
				"The Social Problem",
				"The Solution & Impact",
				"Market & Distribution",
				"Growth & Scaling",
				"Financing & Forecasts",
			],
			datasets: [
				{
					label: "Score",
					data: resultArray,
					borderWidth: 1,
					backgroundColor: "#a2c709",
					borderColor: "white",
				},
			],
		},
		options: {
			indexAxis: "y",
			scales: {
				y: {
					beginAtZero: true,
				},
				x: {
					max: 40,
				},
			},
		},
	});

	const polarArea = document.getElementById("polar");
	const polarAlt = document.getElementById("polarAlt");

	new Chart(polarArea, {
		type: "polarArea",
		data: {
			labels: [
				"The Social Problem",
				"The Solution & Impact",
				"Market & Distribution",
				"Growth & Scaling",
				"Financing & Forecasts",
			],
			datasets: [
				{
					label: "Score",
					data: resultArray,
					borderWidth: 1,
					backgroundColor: "#a2c709",
					// borderColor: "#a2c709",
				},
			],
		},
		options: {
			responsive: true,
			scales: {
				r: {
					pointLabels: {
						display: true,
						centerPointLabels: true,
						font: {
							size: 18,
						},
					},
					max: 40,
					grid: {
						color: "white",
					},
				},
			},
			plugins: {
				legend: {
					// position: "top",
					display: false,
				},
				// title: {
				// 	display: true,
				// 	text: "Chart.js Polar Area Chart With Centered Point Labels",
				// },
			},
		},
	});
	new Chart(polarAlt, {
		type: "polarArea",
		data: {
			labels: [
				"The Social Problem",
				"The Solution & Impact",
				"Market & Distribution",
				"Growth & Scaling",
				"Financing & Forecasts",
			],
			datasets: [
				{
					label: "Score",
					data: resultArray,
					borderWidth: 1,
					backgroundColor: "#a2c709",
					borderColor: "#a2c709",
				},
			],
		},
		options: {
			responsive: true,
			scales: {
				r: {
					pointLabels: {
						display: true,
						centerPointLabels: true,
						font: {
							size: 18,
						},
					},
					grid: {
						color: "white",
					},
					max: 40,
				},
				// xAxes: [
				// 	{
				// 		ticks: {
				// 			fontColor: "white",
				// 		},
				// 	},
				// ],
			},
			plugins: {
				legend: {
					// position: "top",
					display: false,
				},
				// title: {
				// 	display: true,
				// 	text: "Chart.js Polar Area Chart With Centered Point Labels",
				// },
			},
		},
	});
	document.getElementById("download").style.display = "inline-block";
});

document.getElementById("download").addEventListener("click", function downloadPDF(e) {
	e.preventDefault();
	// creating div for downloading pdf
	const enterBefore = document.querySelector(".accordion");
	const newDiv = document.createElement("div");
	newDiv.id = "calPDF";
	const chartsDiv = document.createElement("div");
	chartsDiv.classList.add("chartsPdf");
	// chartsDiv.style.pageBreakBefore = "always";
	chartsDiv.style.display = "flex";
	chartsDiv.style.justifyContent = "center";
	chartsDiv.style.alignItems = "center";
	// chartsDiv.style.gap = "20px";
	// chartsDiv.style.position = "relative";
	// chartsDiv.style.top = "50%";
	// chartsDiv.style.transform = "translateY(-50%)";
	enterBefore.prepend(newDiv);

	// const physical = document.querySelector(".physical-wellbeing");
	// const mental = document.querySelector(".mental-wellbeing");
	// mental.style.pageBreakAfter = "always";
	// const professional = document.querySelector(".professional-life");
	// const social = document.querySelector(".social-life");
	// social.style.pageBreakAfter = "always";
	// const wheel = document.querySelector(".wheel-of-wellness");
	// wheel.style.pageBreakAfter = "always";
	// const goals = document.querySelector(".goals-section");
	// goals.style.pageBreakAfter = "always";
	// const purpose = document.querySelector(".purpose-section");
	// purpose.style.pageBreakAfter = "always";
	// const change = document.querySelector(".change-section");
	// const environment = document.querySelector(".environment-section");
	// const time = document.querySelector(".time-section");
	// const stress = document.querySelector(".stress-section");
	// stress.style.pageBreakAfter = "always";
	// const last = document.querySelector(".last-section");
	const polar = document.getElementById("polar");
	const bar = document.getElementById("bar");
	polar.style.width = "650px";
	polar.style.height = "690px";
	polar.style.marginInline = "auto";
	bar.style.width = "650px";
	bar.style.height = "690px";
	bar.style.marginInline = "auto";
	bar.style.pageBreakAfter = "always";
	// const container = document.querySelector(".container");
	// const details = document.createElement("div");
	// details.innerHTML = `
	// <div id="download-div">
	// <h3>
	//     Wheel of Wellness
	// </h3>
	// <p>
	//     To be truly fulfilled, one needs to lead a balanced life. When life is busy, or all your energy is focused on a special project, you can find yourself off balance, not paying enough attention to important areas of your life. By regularly taking a helicopter view of your life, you can bring things back into balance.
	// </p>
	// </div>
	// `;
	chartsDiv.prepend(polar, bar);
	newDiv.prepend(
		// 	physical,
		// 	mental,
		// 	professional,
		// 	social,
		// 	wheel,
		// 	details,
		chartsDiv
		// container
		// 	goals,
		// 	purpose,
		// 	change,
		// 	environment,
		// 	time,
		// 	stress,
		// 	last
	);

	const element = document.getElementById("calPDF");
	html2pdf()
		.from(element)
		.set({
			margin: 0.5,
			filename: "Social Finance Q&A.pdf",
			html2canvas: { scale: 2 },
			jsPDF: { unit: "in", format: "letter", orientation: "portrait", compressPDF: true, dpi: 300 },
			// html2canvas: {
			// 	scale: 1,
			// },
			// jsPDF: {
			// 	orientation: "portrait",
			// 	unit: "in",
			// 	format: "letter",
			// 	compressPDF: true,
			// },
		})
		.save()
		.then(() => {
			document.getElementById("polarAlt").style.display = "block";
			document.getElementById("barAlt").style.display = "block";
		});
});
