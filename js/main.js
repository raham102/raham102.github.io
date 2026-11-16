const filterButtons = document.querySelectorAll('.filter-btn');
const questCards = document.querySelectorAll('.quest-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        questCards.forEach(card => {
            const matches = filter === 'all' || card.dataset.category === filter;
            card.classList.toggle('hidden', !matches);
        });
    });
});

const statFills = document.querySelectorAll('.stat-fill');

const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.level + '%';
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statFills.forEach(fill => statObserver.observe(fill));
const copyBtn = document.querySelector('#copy-email');

copyBtn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(copyBtn.dataset.email);
    copyBtn.textContent = 'COPIED!';
    setTimeout(() => { copyBtn.textContent = 'EMAIL'; }, 2000);
});