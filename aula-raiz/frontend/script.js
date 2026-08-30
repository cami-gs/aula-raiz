const subjects = ["Lenguaje", "Matemática", "Historia", "Ciencias", "Inglés"];
const resourceTypes = ["PDF", "Guía", "Video"];

let resources = [
  {
    id: "lenguaje-pdf-comprension",
    title: "Comprensión lectora",
    subject: "Lenguaje",
    type: "PDF",
    description: "Lectura guiada con preguntas de comprensión, vocabulario y análisis de ideas principales.",
    path: "materiales/lenguaje/comprension-lectora.pdf"
  },
  {
    id: "lenguaje-guia-analisis",
    title: "Guía de análisis de texto",
    subject: "Lenguaje",
    type: "Guía",
    description: "Actividades para reconocer propósito comunicativo, estructura textual y argumentos.",
    path: "materiales/lenguaje/guia-analisis-texto.pdf"
  },
  {
    id: "lenguaje-video-estrategias",
    title: "Estrategias de lectura",
    subject: "Lenguaje",
    type: "Video",
    description: "Video breve con estrategias para anticipar, subrayar y resumir información relevante.",
    path: "materiales/lenguaje/estrategias-lectura.mp4"
  },
  {
    id: "matematica-pdf-ecuaciones",
    title: "Ecuaciones de primer grado",
    subject: "Matemática",
    type: "PDF",
    description: "Material de apoyo para comprender igualdad, incógnita y despeje paso a paso.",
    path: "materiales/matematica/ecuaciones-primer-grado.pdf"
  },
  {
    id: "matematica-guia-ejercicios",
    title: "Guía de ejercicios",
    subject: "Matemática",
    type: "Guía",
    description: "Ejercicios graduados para practicar resolución de ecuaciones y verificar resultados.",
    path: "materiales/matematica/guia-ejercicios-ecuaciones.pdf"
  },
  {
    id: "matematica-video-paso",
    title: "Resolución paso a paso",
    subject: "Matemática",
    type: "Video",
    description: "Demostración audiovisual de métodos para resolver ecuaciones de primer grado.",
    path: "materiales/matematica/resolucion-paso-a-paso.mp4"
  },
  {
    id: "historia-pdf-derechos",
    title: "Derechos humanos y ciudadanía",
    subject: "Historia",
    type: "PDF",
    description: "Síntesis sobre derechos humanos, ciudadanía, participación y vida democrática.",
    path: "materiales/historia/derechos-humanos-ciudadania.pdf"
  },
  {
    id: "historia-guia-reflexion",
    title: "Guía de reflexión histórica",
    subject: "Historia",
    type: "Guía",
    description: "Preguntas orientadoras para analizar procesos sociales desde una mirada histórica.",
    path: "materiales/historia/guia-reflexion-historica.pdf"
  },
  {
    id: "historia-video-memoria",
    title: "Memoria y sociedad",
    subject: "Historia",
    type: "Video",
    description: "Recurso audiovisual para dialogar sobre memoria, comunidad y convivencia social.",
    path: "materiales/historia/memoria-sociedad.mp4"
  },
  {
    id: "ciencias-pdf-cuidado",
    title: "Cuidado del cuerpo y salud",
    subject: "Ciencias",
    type: "PDF",
    description: "Contenido sobre hábitos saludables, autocuidado y prevención en la vida diaria.",
    path: "materiales/ciencias/cuidado-cuerpo-salud.pdf"
  },
  {
    id: "ciencias-guia-cientifica",
    title: "Guía científica",
    subject: "Ciencias",
    type: "Guía",
    description: "Actividades de observación, registro y explicación de fenómenos cotidianos.",
    path: "materiales/ciencias/guia-cientifica.pdf"
  },
  {
    id: "ciencias-video-vida",
    title: "Ciencias en la vida cotidiana",
    subject: "Ciencias",
    type: "Video",
    description: "Ejemplos audiovisuales para relacionar ciencias naturales con decisiones diarias.",
    path: "materiales/ciencias/ciencias-vida-cotidiana.mp4"
  },
  {
    id: "ingles-pdf-vocabulario",
    title: "Vocabulario cotidiano",
    subject: "Inglés",
    type: "PDF",
    description: "Listado de palabras y expresiones frecuentes para situaciones de comunicación básica.",
    path: "materiales/ingles/vocabulario-cotidiano.pdf"
  },
  {
    id: "ingles-guia-basica",
    title: "Guía básica",
    subject: "Inglés",
    type: "Guía",
    description: "Ejercicios iniciales de lectura, escritura y pronunciación de expresiones simples.",
    path: "materiales/ingles/guia-basica.pdf"
  },
  {
    id: "ingles-video-saludos",
    title: "Saludos y presentación personal",
    subject: "Inglés",
    type: "Video",
    description: "Video para practicar saludos, despedidas y presentación personal en inglés.",
    path: "materiales/ingles/saludos-presentacion-personal.mp4"
  }
];

let accessLog = [];
let selectedResourceId = null;
let toastTimer = null;

const views = document.querySelectorAll(".view");
const navButtons = document.querySelectorAll("[data-view]");
const searchInput = document.querySelector("#busqueda");
const typeFilter = document.querySelector("#filtro-tipo");
const subjectStrip = document.querySelector("#subject-strip");
const resourceGrid = document.querySelector("#resource-grid");
const studentEmpty = document.querySelector("#student-empty");
const teacherTable = document.querySelector("#teacher-table");
const teacherCount = document.querySelector("#teacher-count");
const materialForm = document.querySelector("#material-form");
const toast = document.querySelector("#toast");

function normalizeText(value) {
  return value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getTypeClass(type) {
  if (type === "Guía") {
    return "guia";
  }

  if (type === "Video") {
    return "video";
  }

  return "pdf";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

function navigateTo(viewId) {
  views.forEach((view) => {
    view.classList.toggle("is-active", view.id === viewId);
  });

  document.querySelectorAll(".nav-link").forEach((button) => {
    const isCurrent = button.dataset.view === viewId;
    button.classList.toggle("is-active", isCurrent);
    button.setAttribute("aria-current", isCurrent ? "page" : "false");
  });

  if (viewId === "estudiante") {
    renderStudentResources();
  }

  if (viewId === "docente") {
    renderTeacherTable();
  }

  if (viewId === "estadisticas") {
    renderStats();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSubjectStrip() {
  subjectStrip.innerHTML = subjects
    .map((subject) => {
      const total = resources.filter((resource) => resource.subject === subject).length;
      return `<span class="subject-chip">${subject}: ${total}</span>`;
    })
    .join("");
}

function getFilteredResources() {
  const query = normalizeText(searchInput.value.trim());
  const selectedType = typeFilter.value;

  return resources.filter((resource) => {
    const matchesType = selectedType === "todos" || resource.type === selectedType;
    const searchableText = normalizeText(
      `${resource.title} ${resource.subject} ${resource.type} ${resource.description}`
    );
    const matchesQuery = !query || searchableText.includes(query);
    return matchesType && matchesQuery;
  });
}

function createResourceCard(resource) {
  return `
    <article class="resource-card">
      <div class="card-meta">
        <span class="subject-chip">${resource.subject}</span>
        <span class="type-pill ${getTypeClass(resource.type)}">${resource.type}</span>
      </div>
      <h2>${resource.title}</h2>
      <p>${resource.description}</p>
      <div class="card-actions">
        <button class="small-action" type="button" data-open-resource="${resource.id}">Ver</button>
        <button class="small-action" type="button" data-download-resource="${resource.id}">Descargar</button>
      </div>
    </article>
  `;
}

function renderStudentResources() {
  renderSubjectStrip();
  const filteredResources = getFilteredResources();

  resourceGrid.innerHTML = filteredResources.map(createResourceCard).join("");
  studentEmpty.hidden = filteredResources.length > 0;
}

function registerAccess(resource) {
  accessLog.push({
    resourceId: resource.id,
    title: resource.title,
    subject: resource.subject,
    type: resource.type,
    timestamp: new Date().toISOString()
  });
}

function openResource(resourceId) {
  const resource = resources.find((item) => item.id === resourceId);

  if (!resource) {
    showToast("El recurso ya no está disponible en esta sesión.");
    return;
  }

  selectedResourceId = resource.id;
  registerAccess(resource);
  renderResourceDetail(resource);
  navigateTo("detalle");
  showToast("Acceso registrado para estadísticas.");
}

function renderResourceDetail(resource) {
  document.querySelector("#detalle-titulo").textContent = resource.title;
  document.querySelector("#detalle-asignatura").textContent = resource.subject;
  document.querySelector("#detalle-tipo").textContent = resource.type;
  document.querySelector("#detalle-descripcion").textContent = resource.description;
  document.querySelector("#detalle-ruta").textContent = resource.path;
  document.querySelector("#detalle-descarga").onclick = () => simulateDownload(resource.id);
}

function simulateDownload(resourceId) {
  const resource = resources.find((item) => item.id === resourceId) || resources.find((item) => item.id === selectedResourceId);

  if (!resource) {
    showToast("No se pudo simular la descarga porque el recurso fue eliminado.");
    return;
  }

  showToast(`Descarga simulada: ${resource.title}`);
}

function renderTeacherTable() {
  teacherCount.textContent = `${resources.length} materiales`;

  teacherTable.innerHTML = resources
    .map((resource) => {
      return `
        <tr>
          <td><strong>${resource.title}</strong><br><span>${resource.description}</span></td>
          <td>${resource.subject}</td>
          <td>${resource.type}</td>
          <td>${resource.path}</td>
          <td><button class="delete-action" type="button" data-delete-resource="${resource.id}">Eliminar</button></td>
        </tr>
      `;
    })
    .join("");
}

function createResourceId(title) {
  const slug = normalizeText(title)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `${slug || "material"}-${Date.now().toString(36)}`;
}

function addResource(event) {
  event.preventDefault();

  const formData = new FormData(materialForm);
  const newResource = {
    id: createResourceId(formData.get("titulo")),
    title: formData.get("titulo").trim(),
    subject: formData.get("asignatura"),
    type: formData.get("tipo"),
    description: formData.get("descripcion").trim(),
    path: formData.get("ruta").trim()
  };

  resources.unshift(newResource);
  materialForm.reset();
  renderTeacherTable();
  renderStudentResources();
  renderStats();
  showToast("Material agregado durante la sesión.");
}

function deleteResource(resourceId) {
  const resource = resources.find((item) => item.id === resourceId);

  if (!resource) {
    return;
  }

  const shouldDelete = window.confirm(`¿Eliminar "${resource.title}" durante esta sesión?`);

  if (!shouldDelete) {
    return;
  }

  resources = resources.filter((item) => item.id !== resourceId);
  renderTeacherTable();
  renderStudentResources();
  renderStats();
  showToast("Material eliminado durante la sesión.");
}

function countBy(items, key) {
  return items.reduce((accumulator, item) => {
    accumulator[item[key]] = (accumulator[item[key]] || 0) + 1;
    return accumulator;
  }, {});
}

function getMostConsulted(key) {
  if (accessLog.length === 0) {
    return "Sin registros";
  }

  const counts = countBy(accessLog, key);
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

function renderStatsTable(targetSelector, labels, counts) {
  const target = document.querySelector(targetSelector);
  target.innerHTML = labels
    .map((label) => {
      return `
        <tr>
          <td>${label}</td>
          <td><strong>${counts[label] || 0}</strong></td>
        </tr>
      `;
    })
    .join("");
}

function renderStats() {
  const subjectCounts = countBy(accessLog, "subject");
  const typeCounts = countBy(accessLog, "type");

  document.querySelector("#stat-materiales").textContent = resources.length;
  document.querySelector("#stat-accesos").textContent = accessLog.length;
  document.querySelector("#stat-asignatura").textContent = getMostConsulted("subject");
  document.querySelector("#stat-tipo").textContent = getMostConsulted("type");

  renderStatsTable("#stats-subjects", subjects, subjectCounts);
  renderStatsTable("#stats-types", resourceTypes, typeCounts);
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const openButton = event.target.closest("[data-open-resource]");
  const downloadButton = event.target.closest("[data-download-resource]");
  const deleteButton = event.target.closest("[data-delete-resource]");

  if (viewButton) {
    navigateTo(viewButton.dataset.view);
  }

  if (openButton) {
    openResource(openButton.dataset.openResource);
  }

  if (downloadButton) {
    simulateDownload(downloadButton.dataset.downloadResource);
  }

  if (deleteButton) {
    deleteResource(deleteButton.dataset.deleteResource);
  }
});

searchInput.addEventListener("input", renderStudentResources);
typeFilter.addEventListener("change", renderStudentResources);
materialForm.addEventListener("submit", addResource);

renderStudentResources();
renderTeacherTable();
renderStats();
