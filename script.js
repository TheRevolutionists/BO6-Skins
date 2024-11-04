document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const weaponGrid = document.getElementById('weaponGrid');

    searchBar.addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const weaponCards = weaponGrid.querySelectorAll('.weapon-card');

        weaponCards.forEach(card => {
            const weaponName = card.textContent.toLowerCase();
            card.style.display = weaponName.includes(searchQuery) ? '' : 'none';
        });
    });
});
