function toggleNotification() {
	var notification = document.querySelector('.v2-notification');
	notification.style.transform = 'translateX(0px)';
}

function closeNotification() {
	var notification = document.querySelector('.v2-notification');
	notification.style.transform = 'translateX(1050px)';
	localStorage.setItem('notificationClosed', 'true');
}

function checkNotification() {
	if (!localStorage.getItem('notificationClosed')) {
		setTimeout(toggleNotification, 2000);
	}
}

var overlayContainers = document.querySelectorAll('.overlay-container');

overlayContainers.forEach(function (overlayContainer) {
	var overlayBox = overlayContainer.querySelector('.overlay-box');

	overlayBox.addEventListener('click', function (event) {
		event.stopPropagation();
	});
});


var pluginItems = document.querySelectorAll(".plugin-item");
pluginItems.forEach((pluginItem) => {
	pluginItem.querySelector(".plugin-link").addEventListener("click", function () {
		if (confirm("The simple method of installing this plugin is typing '.plugin install [plugin name]' in Minecraft chat, followed by another command, '.plugin load [plugin name]'. If you would like to download the ZIP file instead, Click OK.")) {
			var pluginItems = document.querySelectorAll(".plugin-item");
			pluginItems.forEach((pluginItem) => {
				pluginItem.addEventListener('click', handlePluginItemClick);
			});
		}
	});
})

function handlePluginItemClick() {
	var link = this.querySelector(".plugin-link").getAttribute("value");
	window.open(`${link}`, "_blank", "scrollbars=no,resizable=no,location=no,toolbar=no,menubar=no,width=600,height=10,left=100,top=100");
	location.reload();
}



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
		box.style.transform = 'translateY(100px)';
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
		box.style.transform = 'translateY(100px)';

		containerGood.style.opacity = '1';
		containerGood.style.pointerEvents = 'all';
		boxGood.style.transform = 'translateY(0px)';
	} else {
		container.style.opacity = '1';
		container.style.pointerEvents = 'all';
		box.style.transform = 'translateY(0px)';

		containerGood.style.opacity = '0';
		containerGood.style.pointerEvents = 'none';
		boxGood.style.transform = 'translateY(100px)';
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
		box.style.transform = 'translateY(100px)';
	} else {
		container.style.opacity = '1';
		container.style.pointerEvents = 'all';
		box.style.transform = 'translateY(0px)';
	}
}

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
	creditBox.style.transform = 'translateY(100px)';
}

function closeCredits() {
	var creditContainer = document.querySelector('.overlay-container.credit')
	var creditBox = document.querySelector('.overlay-box.credit')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(100px)';
}

function closeAlerts() {
	var creditContainer = document.querySelector('.overlay-container.alert')
	var creditBox = document.querySelector('.overlay-box.alert')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(100px)';
}

function closeDownload() {
	var creditContainer = document.querySelector('.overlay-container.dl')
	var creditBox = document.querySelector('.overlay-box.dl')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(100px)';
}

function closeAlertsGood() {
	var creditContainer = document.querySelector('.overlay-container.alertGood')
	var creditBox = document.querySelector('.overlay-box.alertGood')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(100px)';
}

function closeLicense() {
	var creditContainer = document.querySelector('.overlay-container.license')
	var creditBox = document.querySelector('.overlay-box.license')

	creditContainer.style.opacity = '0';
	creditContainer.style.pointerEvents = 'none';
	creditBox.style.transform = 'translateY(100px)';
}

window.onload = checkNotification;