document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.querySelector('tbody');
    const pagination = document.getElementById('pagination');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');
    const searchInput = document.getElementById('searchInput');

    let currentPage = 1;
    const rowsPerPage = 10;

    function fetchSolicitations() {
        return [
            { nome: "Paciente 1", cpf: "123.456.789-00", tipo: "Consulta", procedimentos: "Exame", data: "2024-08-08", hora: "14:00" },
            { nome: "Paciente 2", cpf: "987.654.321-00", tipo: "Consulta", procedimentos: "Exame", data: "2024-08-08", hora: "15:00" },
        ];
    }

    function renderTable(data) {
        tbody.innerHTML = '';
        data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.nome}</td>
                <td>${item.cpf}</td>
                <td>${item.tipo}</td>
                <td>${item.procedimentos}</td>
                <td>${item.data}</td>
                <td>${item.hora}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    function updatePagination(totalRows) {
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        pageInfo.textContent = `${currentPage} / ${totalPages}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    function loadPage(page) {
        const data = fetchSolicitations();
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        renderTable(data.slice(start, end));
        updatePagination(data.length);
    }

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadPage(currentPage);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const data = fetchSolicitations();
        const totalPages = Math.ceil(data.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            loadPage(currentPage);
        }
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const data = fetchSolicitations().filter(item =>
            item.nome.toLowerCase().includes(query) || item.cpf.includes(query)
        );
        renderTable(data.slice(0, rowsPerPage));
        currentPage = 1;
        updatePagination(data.length);
    });

    loadPage(currentPage);
});