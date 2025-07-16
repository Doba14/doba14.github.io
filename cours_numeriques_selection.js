 const data = {
      "Première A": {
        "Français": {
          "Les tonalités": {},
          "La dissertation littéraire": {}
        },
        "Philosophie": {
          "Introduction au commentaire de texte": {},
          "L'Antiquité": {}
        },
        "Histoire": {
          "L'impérialisme et le congrès de Berlin": {},
          "La Première Guerre mondiale": {},
          "La Seconde Guerre mondiale": {}
        }
      },
      "Première C": {
        "Maths": {
          "Équations et inéquations dans R": {},
          "Barycentre": {},
          "Dérivabilité": {}
        },
        "Physique-Chimie": {
          "Composés oxygénés": {},
          "Composés organiques": {},
          "Amplificateur opérationnel": {},
          "Travail et puissance d'une force": {}
        },
        "SVT": {
          "Structure interne du globe terrestre": {},
          "Réflexes innés": {},
          "Synthèse des protéines": {}
        }
      },
      "Première D": {
        "Maths": {
          "Équations et inéquations dans R": {},
          "Barycentre": {},
          "Dérivabilité": {}
        },
        "Physique-Chimie": {
          "Composés oxygénés": {},
          "Composés organiques": {},
          "Amplificateur opérationnel": {},
          "Travail et puissance d'une force": {}
        },
        "SVT": {
          "Structure interne du globe terrestre": {},
          "Réflexes innés": {},
          "Synthèse des protéines": {}
        }
      }
    };

    function updateMatieres() {
      const matiereSelect = document.getElementById("matiere");
      const classe = document.getElementById("classe").value;
      matiereSelect.innerHTML = '<option value="">-- Choisir la matière --</option>';
      if (classe && data[classe]) {
        for (let matiere in data[classe]) {
          matiereSelect.innerHTML += `<option value="${matiere}">${matiere}</option>`;
        }
      }
      updateLecons();
    }

    function updateLecons() {
      const leconSelect = document.getElementById("lecon");
      const classe = document.getElementById("classe").value;
      const matiere = document.getElementById("matiere").value;
      leconSelect.innerHTML = '<option value="">-- Choisir la leçon --</option>';
      if (classe && matiere && data[classe][matiere]) {
        for (let lecon in data[classe][matiere]) {
          leconSelect.innerHTML += `<option value="${lecon}">${lecon}</option>`;
        }
      }
      document.getElementById("courseInfo").style.display = "none";
    }

    function showCourse() {
      const classe = document.getElementById("classe").value;
      const matiere = document.getElementById("matiere").value;
      const lecon = document.getElementById("lecon").value;
      if (classe && matiere && lecon) {
        document.getElementById("description").innerText = `Cours de ${lecon} (${matiere} - ${classe})`;
        document.getElementById("pdfLink").href = `https://lyc.ecole-ci.org/course/`;
        document.getElementById("videoLink").href = `https://www.youtube.com/results?search_query=cour+premiere+`; // à personnaliser si besoin
        document.getElementById("courseInfo").style.display = "block";
      }
    }