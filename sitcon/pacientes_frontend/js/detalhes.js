document.addEventListener("DOMContentLoaded", () => {
    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    function loadPatientDetails() {
        const patientData = localStorage.getItem('selectedPatient');
        if (patientData) {
            const patient = JSON.parse(patientData);

            document.getElementById('patientName').value = patient.nome || 'Nome não disponível';
            document.getElementById('patientDate').value = patient.dataNasc ? formatDate(patient.dataNasc) : 'Data não disponível';
            document.getElementById('patientCpf').value = patient.CPF || 'CPF não disponível';
        } else {
            document.getElementById('patientName').value = 'Paciente não encontrado.';
            document.getElementById('patientDate').value = '';
            document.getElementById('patientCpf').value = '';
        }
    }

    function goBack() {
        window.location.href = 'index.html';
    }

    loadPatientDetails();

    document.getElementById('back-button').addEventListener('click', goBack);
});
