let allPatients = [];

function savePatientDetails(patientId) {
    const patient = allPatients.find(p => p.id === patientId);
    if (patient) {
        localStorage.setItem('selectedPatient', JSON.stringify(patient));
        window.location.href = 'detalhes.html';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = 'http://localhost:8000/index.php?endpoint=pacientes';

    async function fetchPatients() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Erro ao buscar pacientes');
            }
            const data = await response.json();

            console.log('Dados recebidos da API:', data);

            allPatients = data;

            populateTable(allPatients);
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    function populateTable(patients) {
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = '';

        if (Array.isArray(patients) && patients.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="4">Nenhum paciente encontrado.</td></tr>';
            return;
        }

        patients.forEach(patient => {
            const row = document.createElement('tr');

            const nome = patient.nome || 'Nome não disponível';
            const dataNascimento = patient.dataNasc ? formatDate(patient.dataNasc) : 'Data não disponível';
            const cpf = patient.CPF || 'CPF não disponível';

            row.innerHTML = `
                <td>${nome}</td>
                <td>${dataNascimento}</td>
                <td>${cpf}</td>
                <td><button onclick="savePatientDetails(${patient.id})">Prosseguir</button></td>
            `;

            tableBody.appendChild(row);
        });
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    function filterPatients(searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        const filteredPatients = allPatients.filter(patient => {
            const nome = patient.nome ? patient.nome.toLowerCase() : '';
            const cpf = patient.CPF ? patient.CPF : '';

            return nome.includes(lowerCaseSearchTerm) || cpf.includes(searchTerm);
        });

        populateTable(filteredPatients);
    }

    document.getElementById('searchInput').addEventListener('input', (event) => {
        const searchTerm = event.target.value;
        filterPatients(searchTerm);
    });

    fetchPatients();
});