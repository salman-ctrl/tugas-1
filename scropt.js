document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.tab-link');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Menghapus kelas 'selected' dan 'selected1' dari semua tautan
            links.forEach(l => {
                l.classList.remove('selected', 'selected1');
            });

            // Menambahkan kelas 'selected' atau 'selected1' ke tautan yang diklik
            if (this.classList.contains('selected')) {
                this.classList.add('selected');
            } else {
                this.classList.add('selected1');
            }
        });
    });
});

