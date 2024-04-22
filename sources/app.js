var overlayContainers = document.querySelectorAll('.overlay-container');

overlayContainers.forEach(function (overlayContainer) {
    var overlayBox = overlayContainer.querySelector('.overlay-box');

    overlayBox.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

function toggleAlert() {
	const container = document.querySelector('.overlay-container.alert');
	const box = document.querySelector('.overlay-box.alert');

	if (
	navigator.userAgent.includes("Windows") === true &&
	navigator.userAgent.includes("x64") === true &&
	window.location.href.includes("?bypass-device-check") === false
	) {
		container.style.opacity = '0';
		container.style.pointerEvents = 'none';
		box.style.transform = 'translateY(70px)';
	} else {
		container.style.opacity = '1';
		container.style.pointerEvents = 'all';
		box.style.transform = 'translateY(0px)';
	}
}

var disclaimerVisible = false;

function toggleDisclaimer() {
	var disclaimer = document.getElementById("disclaimer-text");
	disclaimer.style.display = disclaimerVisible ? "none" : "inline";
	disclaimerVisible = !disclaimerVisible;
}

var explanationVisible = false;

function toggleExplanation() {
	var explanation = document.getElementById("explanation-text");
	explanation.style.display = explanationVisible ? "none" : "inline";
	explanationVisible = !explanationVisible;
}

function toggleAlertButton() {
	const container = document.querySelector('.overlay-container.alert');
	const box = document.querySelector('.overlay-box.alert');
	const containerGood = document.querySelector('.overlay-container.alertGood');
	const boxGood = document.querySelector('.overlay-box.alertGood');

	if (
	navigator.userAgent.includes("Windows") === true &&
	navigator.userAgent.includes("x64") === true &&
	window.location.href.includes("?bypass-device-check") === false
	) {
		container.style.opacity = '0';
		container.style.pointerEvents = 'none';
		box.style.transform = 'translateY(70px)';

		containerGood.style.opacity = '1';
		containerGood.style.pointerEvents = 'all';
		boxGood.style.transform = 'translateY(0px)';
	} else {
		container.style.opacity = '1';
		container.style.pointerEvents = 'all';
		box.style.transform = 'translateY(0px)';

		containerGood.style.opacity = '0';
		containerGood.style.pointerEvents = 'none';
		boxGood.style.transform = 'translateY(70px)';
	}
}

function toggleAlertDownlaodButton() {
	const container = document.querySelector('.overlay-container.alert');
	const box = document.querySelector('.overlay-box.alert');

	if (
	navigator.userAgent.includes("Windows") === true &&
	navigator.userAgent.includes("x64") === true &&
	window.location.href.includes("?bypass-device-check") === false
	) {
		container.style.opacity = '0';
		container.style.pointerEvents = 'none';
		box.style.transform = 'translateY(70px)';
	} else {
		container.style.opacity = '1';
		container.style.pointerEvents = 'all';
		box.style.transform = 'translateY(0px)';
	}
}

// const navbar = document.querySelector('.no-blur');
// const blurThreshold = 0;

// window.addEventListener('scroll', () => {
// 	if (window.scrollY > blurThreshold) {
// 		navbar.classList.add('blur');
// 	} else {
// 		navbar.classList.remove('blur');
// 	}
// });

const buttons = document.querySelectorAll('.faqbutton');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const faq = button.nextElementSibling;
		const icon = button.children[1];

		faq.classList.toggle('reveal');
		icon.classList.toggle('icon-rotate');
	})
});

const dlButtons = document.querySelectorAll('.dropdown-dl-button');

dlButtons.forEach(dlButton => {
	dlButton.addEventListener('click', () => {
		const faq = dlButton.nextElementSibling;
		const icon = dlButton.children[1];

		faq.classList.toggle('revealul');
		icon.classList.toggle('icon-rotate');
	})
});

function toggleCredits() {
	var creditContainer = document.querySelector('.overlay-container.credit')
	var creditBox = document.querySelector('.overlay-box.credit')

	creditContainer.style.opacity = '1';
	creditContainer.style.pointerEvents = 'all';
	creditBox.style.transform = 'translateY(0)';
}

function toggleBeta() {
	var creditContainer = document.querySelector('.overlay-container.beta')
	var creditBox = document.querySelector('.overlay-box.beta')

	creditContainer.style.opacity = '1';
	creditContainer.style.pointerEvents = 'all';
	creditBox.style.transform = 'translateY(0)';
}

function toggleLicense() {
	var creditContainer = document.querySelector('.overlay-container.license')
	var creditBox = document.querySelector('.overlay-box.license')

	creditContainer.style.opacity = '1';
	creditContainer.style.pointerEvents = 'all';
	creditBox.style.transform = 'translateY(0)';
}

function toggleDownload() {
	var creditContainer = document.querySelector('.overlay-container.dl')
	var creditBox = document.querySelector('.overlay-box.dl')

	creditContainer.style.opacity = '1';
	creditContainer.style.pointerEvents = 'all';
	creditBox.style.transform = 'translateY(0)';
}

function closeBeta() {
	var creditContainer = document.querySelector('.overlay-container.beta')
	var creditBox = document.querySelector('.overlay-box.beta')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(70px)';
}

function closeCredits() {
	var creditContainer = document.querySelector('.overlay-container.credit')
	var creditBox = document.querySelector('.overlay-box.credit')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(70px)';
}

function closeAlerts() {
	var creditContainer = document.querySelector('.overlay-container.alert')
	var creditBox = document.querySelector('.overlay-box.alert')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(70px)';
}

function closeDownload() {
	var creditContainer = document.querySelector('.overlay-container.dl')
	var creditBox = document.querySelector('.overlay-box.dl')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(70px)';
}

function closeAlertsGood() {
	var creditContainer = document.querySelector('.overlay-container.alertGood')
	var creditBox = document.querySelector('.overlay-box.alertGood')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(70px)';
}

function closeLicense() {
	var creditContainer = document.querySelector('.overlay-container.license')
	var creditBox = document.querySelector('.overlay-box.license')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(70px)';
}

// window.onload = toggleAlert;