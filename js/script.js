const message = 'If you are looking for easter eggs, try clicking on the title';
console.log(`%c${message}`, 'color: #55ffc9; background: #333; padding: 8px 15px; font-size: 16px; border-radius: 5px');

const ANIMATION_TIMEOUT = 100;

const makeRunningAnimation = ($textElement) => {
    const subItemClass = 'item';
    const glowClass = 'glow';

    const titleItems = [];
    for (let i of $textElement.textContent) {
        const className = (i === ' ') ? '' : subItemClass;
        titleItems.push(`<span class="${className}">${i}</span>`);
    }
    $textElement.innerHTML = titleItems.join('');
    const $innerItems = $textElement.querySelectorAll(`.${subItemClass}`);

    let filledCount = 0;
    let runningPosition = $innerItems.length;
    setInterval(() => {
        if (runningPosition >= (filledCount + 1)) {
            if (runningPosition < $innerItems.length) {
                $innerItems[runningPosition].classList.remove(glowClass);
            }
            runningPosition--;
            $innerItems[runningPosition].classList.add(glowClass);
        } else {
            runningPosition = $innerItems.length;
            filledCount++;
        }
        if (filledCount > ($innerItems.length - 1)) {
            $innerItems.forEach(($item) => {
                $item.classList.remove(glowClass);
            });
            filledCount = 0;
            runningPosition = $innerItems.length - 1;
        }
    }, ANIMATION_TIMEOUT);
};

window.onload = () => {
    const title2Id = 'title2';
    const $title2 = document.getElementById(title2Id);

    $title2.addEventListener('click', () => {
        makeRunningAnimation($title2);
    });
};