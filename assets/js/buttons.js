// Function to print Button widgets.

const generateButtons = () => {
	buttons1.innerHTML = '';
    
    for (const button of CONFIG.buttonsContainer) {
		let item = `
        <div class="widget">
            <i class="fa-${button.iconstyle} fa-${button.icon} widget-icon"></i>
            <a
            href="${button.link}"
            target="_blank"
            >
            ${button.name}
            </a>
        </div>
    `;

		const position = 'beforeend';

		buttons1.insertAdjacentHTML(position, item);
	}
};

generateButtons();
