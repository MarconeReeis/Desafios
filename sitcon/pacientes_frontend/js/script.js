document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = 'http://localhost:8000/index.php?page=1';

    async function fetchPatients() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Erro ao buscar pacientes');
            }
            const data = await response.json();
            console.log('Dados da API:', data);
            populateTable(data);
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    function populateTable(patients) {
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = '';

        patients.forEach(patient => {
            const row = document.createElement('tr');

            const nome = patient.nome || 'Nome não disponível';
            const dataNascimento = patient.dataNasc ? formatDate(patient.dataNasc) : 'Data não disponível';
            const cpf = patient.CPF || 'CPF não disponível';

            row.innerHTML = `
                <td>${nome}</td>
                <td>${dataNascimento}</td>
                <td>${cpf}</td>
                <td><button>Prosseguir</button></td>
            `;

            tableBody.appendChild(row);
        });
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    fetchPatients();
});
