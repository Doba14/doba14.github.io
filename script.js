// Configuration API
const API_BASE_URL = 'https://bd05845e-0f73-4439-8efa-2c90a4aafda0.preview.emergentagent.com/api';
// Variables globales
let currentUser = null;
let authToken = null;
let isLoginMode = true;

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initialisation de l\'application');
    initializeApp();
});

function initializeApp() {
    // Récupérer les données de session
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
        authToken = token;
        currentUser = JSON.parse(userData);
        console.log('Utilisateur connecté:', currentUser);
        showDashboard();
    } else {
        console.log('Aucun utilisateur connecté');
        showAuthPage();
    }
    
    // Configurer les événements
    setupEventListeners();
}

function setupEventListeners() {
    console.log('Configuration des événements');
    
    // Bouton de basculement connexion/inscription
    const toggleBtn = document.getElementById('toggleAuth');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            console.log('Basculement auth mode');
            toggleAuthMode();
        });
    }
    
    // Formulaire d'authentification
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Soumission formulaire auth');
            handleAuthSubmit(e);
        });
    }
    
    // Changement de rôle
    const roleSelect = document.getElementById('role');
    if (roleSelect) {
        roleSelect.addEventListener('change', function() {
            console.log('Changement de rôle:', this.value);
            handleRoleChange();
        });
    }
    
    // Boutons de déconnexion
    const teacherLogout = document.getElementById('teacherLogout');
    if (teacherLogout) {
        teacherLogout.addEventListener('click', logout);
    }
    
    const studentLogout = document.getElementById('studentLogout');
    if (studentLogout) {
        studentLogout.addEventListener('click', logout);
    }
    
    // Onglets professeur
    const teacherDocsTab = document.getElementById('teacherDocsTab');
    if (teacherDocsTab) {
        teacherDocsTab.addEventListener('click', function() {
            switchTeacherTab('docs');
        });
    }
    
    const teacherQuestionsTab = document.getElementById('teacherQuestionsTab');
    if (teacherQuestionsTab) {
        teacherQuestionsTab.addEventListener('click', function() {
            switchTeacherTab('questions');
        });
    }
    
    // Onglets étudiant
    const studentDocsTab = document.getElementById('studentDocsTab');
    if (studentDocsTab) {
        studentDocsTab.addEventListener('click', function() {
            switchStudentTab('docs');
        });
    }
    
    const studentQuestionsTab = document.getElementById('studentQuestionsTab');
    if (studentQuestionsTab) {
        studentQuestionsTab.addEventListener('click', function() {
            switchStudentTab('questions');
        });
    }
    
    // Formulaire upload document
    const docForm = document.getElementById('docUploadForm');
    if (docForm) {
        docForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Soumission upload document');
            handleDocumentUpload(e);
        });
    }
    
    // Formulaire question
    const questionForm = document.getElementById('questionForm');
    if (questionForm) {
        questionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Soumission question');
            handleQuestionSubmit(e);
        });
    }
}

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    
    const authTitle = document.getElementById('authTitle');
    const authSubmit = document.getElementById('authSubmit');
    const toggleAuth = document.getElementById('toggleAuth');
    const nameField = document.getElementById('nameField');
    const roleField = document.getElementById('roleField');
    const subjectField = document.getElementById('subjectField');
    const classField = document.getElementById('classField');
    
    if (isLoginMode) {
        // Mode connexion
        authTitle.textContent = 'Connexion';
        authSubmit.textContent = 'Se connecter';
        toggleAuth.textContent = 'Pas de compte? S\'inscrire';
        
        // Masquer les champs d'inscription
        nameField.style.display = 'none';
        roleField.style.display = 'none';
        subjectField.style.display = 'none';
        classField.style.display = 'none';
        
        // Retirer required
        document.getElementById('name').removeAttribute('required');
        document.getElementById('subject').removeAttribute('required');
        document.getElementById('class_name').removeAttribute('required');
    } else {
        // Mode inscription
        authTitle.textContent = 'Inscription';
        authSubmit.textContent = 'S\'inscrire';
        toggleAuth.textContent = 'Déjà un compte? Se connecter';
        
        // Afficher les champs d'inscription
        nameField.style.display = 'block';
        roleField.style.display = 'block';
        classField.style.display = 'block';
        
        // Ajouter required
        document.getElementById('name').setAttribute('required', 'required');
        document.getElementById('class_name').setAttribute('required', 'required');
        
        // Gérer le champ matière selon le rôle
        handleRoleChange();
    }
    
    // Masquer les messages
    hideMessage();
}

function handleRoleChange() {
    const role = document.getElementById('role').value;
    const subjectField = document.getElementById('subjectField');
    const subjectInput = document.getElementById('subject');
    
    if (role === 'teacher') {
        subjectField.style.display = 'block';
        subjectInput.setAttribute('required', 'required');
    } else {
        subjectField.style.display = 'none';
        subjectInput.removeAttribute('required');
    }
}

async function handleAuthSubmit(e) {
    console.log('Traitement authentification');
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    if (!email || !password) {
        showMessage('Veuillez remplir tous les champs', 'error');
        return;
    }
    
    try {
        showLoading();
        
        if (isLoginMode) {
            await handleLogin(email, password);
        } else {
            const name = formData.get('name');
            const role = formData.get('role');
            const className = formData.get('class_name');
            const subject = formData.get('subject');
            
            await handleRegister(email, password, name, role, className, subject);
        }
    } catch (error) {
        console.error('Erreur auth:', error);
        showMessage(error.message, 'error');
    } finally {
        hideLoading();
    }
}

async function handleLogin(email, password) {
    console.log('Connexion...', email);
    
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.detail || 'Erreur de connexion');
    }
    
    console.log('Connexion réussie:', data);
    
    authToken = data.access_token;
    currentUser = data.user;
    
    // Sauvegarder en localStorage
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('userData', JSON.stringify(currentUser));
    
    showDashboard();
}

async function handleRegister(email, password, name, role, className, subject) {
    console.log('Inscription...', { email, name, role, className, subject });
    
    const registerData = {
        email: email,
        password: password,
        name: name,
        role: role,
        class_name: className
    };
    
    if (role === 'teacher' && subject) {
        registerData.subject = subject;
    }
    
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData)
    });
    
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.detail || 'Erreur lors de l\'inscription');
    }
    
    console.log('Inscription réussie:', data);
    showMessage('Inscription réussie! Vous pouvez maintenant vous connecter.', 'success');
    
    // Basculer vers le mode connexion après 2 secondes
    setTimeout(() => {
        toggleAuthMode();
    }, 2000);
}

function logout() {
    console.log('Déconnexion');
    
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    authToken = null;
    currentUser = null;
    
    showAuthPage();
}

function showAuthPage() {
    console.log('Affichage page auth');
    
    document.getElementById('authPage').style.display = 'flex';
    document.getElementById('teacherDashboard').style.display = 'none';
    document.getElementById('studentDashboard').style.display = 'none';
}

function showDashboard() {
    console.log('Affichage dashboard pour:', currentUser.role);
    
    document.getElementById('authPage').style.display = 'none';
    
    if (currentUser.role === 'teacher') {
        document.getElementById('teacherDashboard').style.display = 'block';
        document.getElementById('studentDashboard').style.display = 'none';
        document.getElementById('teacherName').textContent = currentUser.name;
        loadTeacherData();
    } else {
        document.getElementById('studentDashboard').style.display = 'block';
        document.getElementById('teacherDashboard').style.display = 'none';
        document.getElementById('studentName').textContent = currentUser.name;
        loadStudentData();
    }
}

function switchTeacherTab(tab) {
    console.log('Basculement onglet professeur:', tab);
    
    const docsTab = document.getElementById('teacherDocsTab');
    const questionsTab = document.getElementById('teacherQuestionsTab');
    const docsContent = document.getElementById('teacherDocsContent');
    const questionsContent = document.getElementById('teacherQuestionsContent');
    
    if (tab === 'docs') {
        docsTab.className = 'border-blue-500 text-blue-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm';
        questionsTab.className = 'border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm';
        docsContent.style.display = 'block';
        questionsContent.style.display = 'none';
    } else {
        questionsTab.className = 'border-blue-500 text-blue-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm';
        docsTab.className = 'border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm';
        questionsContent.style.display = 'block';
        docsContent.style.display = 'none';
        loadTeacherQuestions();
    }
}

function switchStudentTab(tab) {
    console.log('Basculement onglet étudiant:', tab);
    
    const docsTab = document.getElementById('studentDocsTab');
    const questionsTab = document.getElementById('studentQuestionsTab');
    const docsContent = document.getElementById('studentDocsContent');
    const questionsContent = document.getElementById('studentQuestionsContent');
    
    if (tab === 'docs') {
        docsTab.className = 'border-blue-500 text-blue-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm';
        questionsTab.className = 'border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm';
        docsContent.style.display = 'block';
        questionsContent.style.display = 'none';
    } else {
        questionsTab.className = 'border-blue-500 text-blue-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm';
        docsTab.className = 'border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm';
        questionsContent.style.display = 'block';
        docsContent.style.display = 'none';
        loadStudentQuestions();
    }
}

async function loadTeacherData() {
    console.log('Chargement données professeur');
    await loadDocuments();
}

async function loadStudentData() {
    console.log('Chargement données étudiant');
    await loadDocuments();
}

async function loadDocuments() {
    console.log('Chargement documents');
    
    try {
        const response = await fetch(`${API_BASE_URL}/documents`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Erreur chargement documents');
        }
        
        const documents = await response.json();
        console.log('Documents chargés:', documents);
        
        if (currentUser.role === 'teacher') {
            displayTeacherDocuments(documents);
        } else {
            displayStudentDocuments(documents);
        }
    } catch (error) {
        console.error('Erreur chargement documents:', error);
    }
}

function displayTeacherDocuments(documents) {
    const container = document.getElementById('teacherDocsList');
    container.innerHTML = '';
    
    if (documents.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-4">Aucun document téléchargé</p>';
        return;
    }
    
    documents.forEach(doc => {
        const docElement = document.createElement('div');
        docElement.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-md mb-2';
        docElement.innerHTML = `
            <div>
                <p class="font-medium">${doc.title}</p>
                <p class="text-sm text-gray-500">${doc.subject} - ${doc.class_name}</p>
            </div>
            <div class="text-sm text-gray-500">
                ${new Date(doc.uploaded_at).toLocaleDateString('fr-FR')}
            </div>
        `;
        container.appendChild(docElement);
    });
}

function displayStudentDocuments(documents) {
    const container = document.getElementById('studentDocsList');
    container.innerHTML = '';
    
    if (documents.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-4">Aucun document disponible</p>';
        return;
    }
    
    documents.forEach(doc => {
        const docElement = document.createElement('div');
        docElement.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-md mb-2';
        docElement.innerHTML = `
            <div>
                <p class="font-medium">${doc.title}</p>
                <p class="text-sm text-gray-500">${doc.subject} - ${doc.class_name}</p>
            </div>
            <button onclick="downloadDocument('${doc.id}', '${doc.filename}')" 
                    class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                Télécharger
            </button>
        `;
        container.appendChild(docElement);
    });
}

async function downloadDocument(docId, filename) {
    console.log('Téléchargement document:', docId, filename);
    
    try {
        const response = await fetch(`${API_BASE_URL}/documents/${docId}/download`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Erreur téléchargement');
        }
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        console.log('Téléchargement réussi');
    } catch (error) {
        console.error('Erreur téléchargement:', error);
        alert('Erreur lors du téléchargement: ' + error.message);
    }
}

async function handleDocumentUpload(e) {
    console.log('Upload document');
    
    const title = document.getElementById('docTitle').value.trim();
    const subject = document.getElementById('docSubject').value.trim();
    const className = document.getElementById('docClass').value.trim();
    const fileInput = document.getElementById('docFile');
    const file = fileInput.files[0];
    
    // Validation
    if (!title || !subject || !className) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    if (!file) {
        alert('Veuillez sélectionner un fichier PDF');
        return;
    }
    
    if (file.type !== 'application/pdf') {
        alert('Le fichier doit être un PDF');
        return;
    }
    
    try {
        showLoading();
        
        // Convertir en base64
        const base64 = await convertFileToBase64(file);
        
        const data = {
            title: title,
            filename: file.name,
            file_data: base64,
            file_type: file.type,
            subject: subject,
            class_name: className
        };
        
        console.log('Envoi document:', data);
        
        const response = await fetch(`${API_BASE_URL}/documents`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.detail || 'Erreur upload');
        }
        
        console.log('Document uploadé:', result);
        alert('Document téléchargé avec succès!');
        
        // Réinitialiser le formulaire
        document.getElementById('docUploadForm').reset();
        
        // Recharger les documents
        await loadDocuments();
        
    } catch (error) {
        console.error('Erreur upload document:', error);
        alert('Erreur: ' + error.message);
    } finally {
        hideLoading();
    }
}

async function handleQuestionSubmit(e) {
    console.log('Envoi question');
    
    const title = document.getElementById('questionTitle').value.trim();
    const content = document.getElementById('questionContent').value.trim();
    const subject = document.getElementById('questionSubject').value.trim();
    const className = document.getElementById('questionClass').value.trim();
    const imageInput = document.getElementById('questionImage');
    const imageFile = imageInput.files[0];
    
    // Validation
    if (!title || !content || !subject || !className) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }
    
    try {
        showLoading();
        
        let imageData = null;
        if (imageFile) {
            if (!imageFile.type.startsWith('image/')) {
                alert('Le fichier doit être une image');
                return;
            }
            imageData = await convertFileToBase64(imageFile);
        }
        
        const data = {
            title: title,
            content: content,
            subject: subject,
            class_name: className,
            image_data: imageData
        };
        
        console.log('Envoi question:', data);
        
        const response = await fetch(`${API_BASE_URL}/questions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.detail || 'Erreur envoi question');
        }
        
        console.log('Question envoyée:', result);
        alert('Question envoyée avec succès!');
        
        // Réinitialiser le formulaire
        document.getElementById('questionForm').reset();
        
        // Recharger les questions
        await loadStudentQuestions();
        
    } catch (error) {
        console.error('Erreur envoi question:', error);
        alert('Erreur: ' + error.message);
    } finally {
        hideLoading();
    }
}

async function loadTeacherQuestions() {
    console.log('Chargement questions professeur');
    
    try {
        const response = await fetch(`${API_BASE_URL}/questions`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Erreur chargement questions');
        }
        
        const questions = await response.json();
        console.log('Questions chargées:', questions);
        
        displayTeacherQuestions(questions);
    } catch (error) {
        console.error('Erreur chargement questions:', error);
    }
}

async function loadStudentQuestions() {
    console.log('Chargement questions étudiant');
    
    try {
        const response = await fetch(`${API_BASE_URL}/questions`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Erreur chargement questions');
        }
        
        const questions = await response.json();
        console.log('Questions chargées:', questions);
        
        displayStudentQuestions(questions);
    } catch (error) {
        console.error('Erreur chargement questions:', error);
    }
}

function displayTeacherQuestions(questions) {
    const container = document.getElementById('teacherQuestionsList');
    container.innerHTML = '';
    
    if (questions.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-4">Aucune question posée</p>';
        return;
    }
    
    questions.forEach(question => {
        const questionElement = document.createElement('div');
        questionElement.className = 'border border-gray-200 rounded-lg p-4 mb-4';
        
        const statusBadge = question.answered ? 
            '<span class="badge badge-green">Répondue</span>' : 
            '<span class="badge badge-yellow">En attente</span>';
        
        const imageDisplay = question.image_data ? 
            `<img src="data:image/jpeg;base64,${question.image_data}" class="max-w-xs rounded-lg mb-2" alt="Question">` : 
            '';
        
        questionElement.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h4 class="font-medium text-lg">${question.title}</h4>
                ${statusBadge}
            </div>
            <p class="text-gray-700 mb-2">${question.content}</p>
            ${imageDisplay}
            <div class="text-sm text-gray-500 mb-4">
                Par ${question.student_name} - ${question.subject} - ${question.class_name}<br>
                ${new Date(question.created_at).toLocaleDateString('fr-FR')}
            </div>
            <div id="answers-${question.id}" class="mb-4"></div>
            ${!question.answered ? `
                <button onclick="showAnswerForm('${question.id}')" 
                        class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                    Répondre
                </button>
                <div id="answer-form-${question.id}" class="hidden mt-3">
                    <div class="space-y-2">
                        <textarea id="answer-content-${question.id}" placeholder="Votre réponse..." rows="3" required 
                                  class="w-full p-2 border border-gray-300 rounded-md"></textarea>
                        <input type="file" id="answer-image-${question.id}" accept="image/*" 
                               class="block w-full border border-gray-300 rounded-md p-2">
                        <div class="flex space-x-2">
                            <button onclick="submitAnswer('${question.id}')" 
                                    class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                                Envoyer
                            </button>
                            <button onclick="hideAnswerForm('${question.id}')" 
                                    class="bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-400">
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            ` : ''}
        `;
        
        container.appendChild(questionElement);
        
        // Charger les réponses
        loadAnswers(question.id);
    });
}

function displayStudentQuestions(questions) {
    const container = document.getElementById('studentQuestionsList');
    container.innerHTML = '';
    
    if (questions.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-4">Aucune question posée</p>';
        return;
    }
    
    questions.forEach(question => {
        const questionElement = document.createElement('div');
        questionElement.className = 'border border-gray-200 rounded-lg p-4 mb-4';
        
        const statusBadge = question.answered ? 
            '<span class="badge badge-green">Répondue</span>' : 
            '<span class="badge badge-yellow">En attente</span>';
        
        const imageDisplay = question.image_data ? 
            `<img src="data:image/jpeg;base64,${question.image_data}" class="max-w-xs rounded-lg mb-2" alt="Question">` : 
            '';
        
        questionElement.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h4 class="font-medium text-lg">${question.title}</h4>
                ${statusBadge}
            </div>
            <p class="text-gray-700 mb-2">${question.content}</p>
            ${imageDisplay}
            <div class="text-sm text-gray-500 mb-4">
                ${question.subject} - ${question.class_name}<br>
                ${new Date(question.created_at).toLocaleDateString('fr-FR')}
            </div>
            <div id="answers-${question.id}" class="mb-4"></div>
        `;
        
        container.appendChild(questionElement);
        
        // Charger les réponses
        loadAnswers(question.id);
    });
}

async function loadAnswers(questionId) {
    try {
        const response = await fetch(`${API_BASE_URL}/answers/${questionId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        
        if (!response.ok) {
            return;
        }
        
        const answers = await response.json();
        
        if (answers.length > 0) {
            displayAnswers(questionId, answers);
        }
    } catch (error) {
        console.error('Erreur chargement réponses:', error);
    }
}

function displayAnswers(questionId, answers) {
    const container = document.getElementById(`answers-${questionId}`);
    container.innerHTML = '';
    
    const answersDiv = document.createElement('div');
    answersDiv.className = 'pl-4 border-l-2 border-blue-200';
    answersDiv.innerHTML = '<h5 class="font-medium text-blue-800 mb-2">Réponses:</h5>';
    
    answers.forEach(answer => {
        const answerElement = document.createElement('div');
        answerElement.className = 'mb-3 p-3 bg-blue-50 rounded';
        
        const imageDisplay = answer.image_data ? 
            `<img src="data:image/jpeg;base64,${answer.image_data}" class="max-w-xs rounded-lg mt-2" alt="Réponse">` : 
            '';
        
        answerElement.innerHTML = `
            <p class="text-gray-700">${answer.content}</p>
            ${imageDisplay}
            <div class="text-sm text-gray-500 mt-1">
                Par ${answer.teacher_name} - ${new Date(answer.created_at).toLocaleDateString('fr-FR')}
            </div>
        `;
        
        answersDiv.appendChild(answerElement);
    });
    
    container.appendChild(answersDiv);
}

function showAnswerForm(questionId) {
    const form = document.getElementById(`answer-form-${questionId}`);
    form.classList.remove('hidden');
}

function hideAnswerForm(questionId) {
    const form = document.getElementById(`answer-form-${questionId}`);
    form.classList.add('hidden');
}

async function submitAnswer(questionId) {
    console.log('Envoi réponse pour question:', questionId);
    
    const content = document.getElementById(`answer-content-${questionId}`).value.trim();
    const imageInput = document.getElementById(`answer-image-${questionId}`);
    const imageFile = imageInput.files[0];
    
    if (!content) {
        alert('Veuillez saisir une réponse');
        return;
    }
    
    try {
        showLoading();
        
        let imageData = null;
        if (imageFile) {
            if (!imageFile.type.startsWith('image/')) {
                alert('Le fichier doit être une image');
                return;
            }
            imageData = await convertFileToBase64(imageFile);
        }
        
        const data = {
            question_id: questionId,
            content: content,
            image_data: imageData
        };
        
        console.log('Envoi réponse:', data);
        
        const response = await fetch(`${API_BASE_URL}/answers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.detail || 'Erreur envoi réponse');
        }
        
        console.log('Réponse envoyée:', result);
        alert('Réponse envoyée avec succès!');
        
        hideAnswerForm(questionId);
        await loadTeacherQuestions();
        
    } catch (error) {
        console.error('Erreur envoi réponse:', error);
        alert('Erreur: ' + error.message);
    } finally {
        hideLoading();
    }
}

// Fonctions utilitaires
function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64 = e.target.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = function(error) {
            reject(error);
        };
        reader.readAsDataURL(file);
    });
}

function showMessage(message, type = 'info') {
    const messageDiv = document.getElementById('authMessage');
    const messageText = document.getElementById('messageText');
    
    if (messageDiv && messageText) {
        messageText.textContent = message;
        
        // Appliquer les styles selon le type
        let bgColor, borderColor, textColor;
        switch(type) {
            case 'success':
                bgColor = 'bg-green-100';
                borderColor = 'border-green-300';
                textColor = 'text-green-800';
                break;
            case 'error':
                bgColor = 'bg-red-100';
                borderColor = 'border-red-300';
                textColor = 'text-red-800';
                break;
            case 'warning':
                bgColor = 'bg-yellow-100';
                borderColor = 'border-yellow-300';
                textColor = 'text-yellow-800';
                break;
            default:
                bgColor = 'bg-blue-100';
                borderColor = 'border-blue-300';
                textColor = 'text-blue-800';
        }
        
        messageDiv.className = `mt-4 p-3 border rounded-md ${bgColor} ${borderColor}`;
        messageText.className = `text-sm ${textColor}`;
        messageDiv.style.display = 'block';
        
        // Masquer automatiquement après 5 secondes
        setTimeout(() => {
            hideMessage();
        }, 5000);
    }
}

function hideMessage() {
    const messageDiv = document.getElementById('authMessage');
    if (messageDiv) {
        messageDiv.style.display = 'none';
    }
}

function showLoading() {
    document.body.style.cursor = 'wait';
    // Ajouter un overlay de chargement si nécessaire
}

function hideLoading() {
    document.body.style.cursor = 'default';
    // Retirer l'overlay de chargement si nécessaire
}

// Fonction globale pour le téléchargement (nécessaire pour onclick)
window.downloadDocument = downloadDocument;
window.showAnswerForm = showAnswerForm;
window.hideAnswerForm = hideAnswerForm;
window.submitAnswer = submitAnswer;

console.log('Script JavaScript chargé');