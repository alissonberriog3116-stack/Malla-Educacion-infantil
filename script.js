const malla = [
  {
    semestre: 1,
    materias: [
      { nombre: "Taller de conceptos: Infancia y saber pedagógico 🌷", creditos: 6, requisito: null },
      { nombre: "Laboratorio de experiencias: Escenarios educativos, culturales y experiencias infantiles 🌸", creditos: 4, requisito: null },
      { nombre: "Arte, juego y creatividad 🎨", creditos: 3, requisito: null },
      { nombre: "Nuevas tecnologías y educación 🖥️", creditos: 3, requisito: null },
      { nombre: "Inglés I 🇺🇸", creditos: 2, requisito: null }
    ]
  },
  {
    semestre: 2,
    materias: [
      { nombre: "Taller de conceptos: infancia y desarrollo 🌺", creditos: 6, requisito: "Taller de conceptos: Infancia y saber pedagógico" },
      { nombre: "Laboratorio de experiencias: Prácticas de crianza y cuidado ✨", creditos: 4, requisito: "Laboratorio de experiencias: Escenarios educativos, culturales y experiencias infantiles" },
      { nombre: "Estilos de vida saludable 🍓", creditos: 3, requisito: null },
      { nombre: "Taller de lectura y escritura I 📖", creditos: 2, requisito: null },
      { nombre: "Inglés II 🇺🇸", creditos: 2, requisito: "Inglés I" }
    ]
  },
  {
    semestre: 3,
    materias: [
      { nombre: "Taller de conceptos: infancia y política 🐣", creditos: 4, requisito: "Taller de conceptos: infancia y desarrollo" },
      { nombre: "Laboratorio de experiencias: Educación, familia y comunidad 👩🏻‍🏫", creditos: 4, requisito: "Laboratorio de experiencias: Prácticas de crianza y cuidados" },
      { nombre: "Afectividad y relación pedagógica 🫂", creditos: 3, requisito: "Arte, juego y creatividad" },
      { nombre: "Taller de lectura y escritura II 📖", creditos: 2, requisito: "Taller de lectura y escritura I" },
      { nombre: "Electiva complementaria I 🧸", creditos: 2, requisito: null },
      { nombre: "Inglés III 🇺🇸", creditos: 2, requisito: "Inglés II" }
    ]
  },
  {
    semestre: 4,
    materias: [
      { nombre: "Infancia, cuerpo y salud 🍃", creditos: 3, requisito: "Taller de conceptos: infancia y política" },
      { nombre: "Inclusión y discapacidad ❤️‍🩹", creditos: 3, requisito: null },
      { nombre: "Práctica pedagógica: Educación y atención integral a la primera infancia 🍁", creditos: 4, requisito: null },
      { nombre: "Literatura infantil 🦋", creditos: 3, requisito: null },
      { nombre: "Electiva complementaria II 🧸", creditos: 2, requisito: "Electiva complementaria I 🧸" },
      { nombre: "Inglés IV 🇺🇸", creditos: 2, requisito: "Inglés II" }
    ]
  },
  {
    semestre: 5,
    materias: [
      { nombre: "Pensamiento científico 🌼", creditos: 3, requisito: "Inclusión y discapacidad" },
      { nombre: "Enseñanza y educación infantil 💜", creditos: 3, requisito: "Afectividad y relación pedagógica" },
      { nombre: "Estudios curriculares, saberes escolares y educación infantil 🐝", creditos: 3, requisito: null },
      { nombre: "Práctica: enseñanza y aprendizaje de la lectura y escritura ✍🏻", creditos: 3, requisito: null },
      { nombre: "Práctica: pensamiento matemático, enseñanza y aprendizaje 🔢", creditos: 3, requisito: null },
      { nombre: "Electiva profesional I 🧸", creditos: 2, requisito: null }
    ]
  },
  {
    semestre: 6,
    materias: [
      { nombre: "Derechos y participación de la infancia 🐛", creditos: 3, requisito: "Pensamiento científico" },
      { nombre: "Práctica pedagógica: Educación especial y diversidad ☘️", creditos: 4, requisito: "Práctica pedagógica: Educación y atención integral a la primera infancia" },
      { nombre: "Pedagogía y diversidad 🍀", creditos: 3, requisito: "Práctica pedagógica: Educación y atención integral a la primera infancia" },
      { nombre: "Pedagogía, ética e infancia🪻", creditos: 3, requisito: null },
      { nombre: "Electiva profesional II 🧸", creditos: 2, requisito: "Electiva profesional I 🧸" },
      { nombre: "Electiva profesional III 🧸", creditos: 2, requisito: "Electiva profesional I 🧸" }
    ]
  },
  {
    semestre: 7,
    materias: [
      { nombre: "Práctica pedagógica e investigación I 🔍", creditos: 8, requisito: "Práctica pedagógica: Educación especial y diversidad" },
      { nombre: "Lenguaje narrativo y expresión lúdico teatral 🎭", creditos: 2, requisito: null },
      { nombre: "Electiva profesional IV 🧸", creditos: 2, requisito: "Electiva profesional III 🧸" },
      { nombre: "Electiva profesional V 🧸", creditos: 2, requisito: "Electiva profesional III 🧸" },
      { nombre: "Electiva profesional VI 🧸", creditos: 2, requisito: "Electiva profesional III 🧸" }
    ]
  },
  {
    semestre: 8,
    materias: [
      { nombre: "Práctica pedagógica e investigación II 🔍", creditos: 8, requisito: "Práctica pedagógica e investigación I" },
      { nombre: "Trabajo de grado 👩🏻‍🏫💜", creditos: 6, requisito: null }
    ]
  }
];

let progreso = JSON.parse(localStorage.getItem('progreso')) || [];

function requisitosCumplidos(requisito) {
  return !requisito || progreso.includes(requisito);
}

function renderMalla() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';
  let totalCreditos = 0;

  malla.forEach(sem => {
    const semDiv = document.createElement('div');
    semDiv.className = 'semestre';
    semDiv.innerHTML = `<h2>Semestre ${sem.semestre}</h2>`;

    sem.materias.forEach(mat => {
      const bloqueado = !requisitosCumplidos(mat.requisito);
      const matDiv = document.createElement('div');
      matDiv.className = 'materia';
      if (bloqueado) matDiv.classList.add('bloqueada');
      if (progreso.includes(mat.nombre)) matDiv.classList.add('completada');
      matDiv.innerHTML = `<span>${mat.nombre}</span><span>${mat.creditos}</span>`;

      matDiv.addEventListener('click', () => {
        if (!bloqueado) toggleMateria(mat.nombre);
      });

      semDiv.appendChild(matDiv);

      if (progreso.includes(mat.nombre)) totalCreditos += mat.creditos;
    });

    contenedor.appendChild(semDiv);
  });

  document.getElementById('total-creditos').textContent = totalCreditos;
}

function toggleMateria(nombre) {
  if (progreso.includes(nombre)) {
    progreso = progreso.filter(n => n !== nombre);
  } else {
    progreso.push(nombre);
  }
  localStorage.setItem('progreso', JSON.stringify(progreso));
  renderMalla();
}

document.getElementById("add-materia").addEventListener("click", () => {
  const nombre = prompt("Nombre de la materia:");
  if (!nombre) return;

  const creditos = parseInt(prompt("Créditos:"), 10);
  if (isNaN(creditos) || creditos <= 0) return;

  const semestre = parseInt(prompt(`¿En qué semestre quieres agregarla? (1 a ${malla.length})`), 10);
  if (isNaN(semestre) || semestre < 1 || semestre > malla.length) {
    alert("Semestre inválido.");
    return;
  }

  malla[semestre - 1].materias.push({ nombre, creditos, requisito: null });
  renderMalla();
});

renderMalla();
