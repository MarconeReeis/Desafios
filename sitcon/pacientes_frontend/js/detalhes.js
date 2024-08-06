document.addEventListener("DOMContentLoaded", () => {
    const apiUrlProcedures = 'http://localhost:8000/index.php?endpoint=procedimentos';
    const apiUrlTipoSolicitacao = 'http://localhost:8000/index.php?endpoint=tipoSolicitacao';
    const apiUrlProfissionais = 'http://localhost:8000/index.php?endpoint=profissionais';

    function populateSelect(selectElement, data, valueKey, textKey) {
        selectElement.innerHTML = '';

        if (Array.isArray(data) && data.length === 0) {
            selectElement.innerHTML = '<option value="">Nenhuma opção disponível.</option>';
            return;
        }

        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item[valueKey];
            option.textContent = item[textKey];
            selectElement.appendChild(option);
        });
    }

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }
            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    async function fetchAndPopulateSelects() {
        const [procedimentos, tipoSolicitacao, profissionais] = await Promise.all([
            fetchData(apiUrlProcedures),
            fetchData(apiUrlTipoSolicitacao),
            fetchData(apiUrlProfissionais)
        ]);

        const proceduresSelect = document.getElementById('procedures');
        const tipoSolicitacaoSelect = document.getElementById('solicitationType');
        const profissionaisSelect = document.getElementById('professional');

        populateSelect(proceduresSelect, procedimentos, 'id', 'descricao');
        populateSelect(tipoSolicitacaoSelect, tipoSolicitacao, 'id', 'descricao');
        populateSelect(profissionaisSelect, profissionais, 'id', 'descricao');
    }

    function populatePatientDetails(patient) {
        if (patient) {
            document.getElementById('patientName').value = patient.nome || '';
            document.getElementById('patientDate').value = patient.dataNasc || '';
            document.getElementById('patientCpf').value = patient.CPF || '';
        }
    }

    function loadPatientDetails() {
        const selectedPatient = localStorage.getItem('selectedPatient');
        if (selectedPatient) {
            const patient = JSON.parse(selectedPatient);
            populatePatientDetails(patient);
        }
    }

    function setupBackButton() {
        const backButton = document.getElementById('back-button');
        if (backButton) {
            backButton.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }
    }

    fetchAndPopulateSelects();
    loadPatientDetails();
    setupBackButton();
});