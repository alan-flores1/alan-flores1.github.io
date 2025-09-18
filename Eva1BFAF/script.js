// -------------------------
// LISTA DE PRODUCTOS
// -------------------------
// -------------------------
// LISTA DE PRODUCTOS
// -------------------------
const productos = [
  { id: 1, nombre: "Vinilo Luis Miguel", precio: 80000, categoria: "Vinilos",
    imagenes: [
      "productos/vinilos/viniloluismi.jpeg",
      "productos/vinilos/viniloluismi2.png",
      "productos/vinilos/viniloluismi3.jpeg"
    ],
    descripcion: "El clásico de Luis Miguel en vinilo, ideal para los nostálgicos del pop latino."
  },
  { id: 2, nombre: "Los Prisioneros", precio: 150000, categoria: "Vinilos",
    imagenes: [
      "productos/vinilos/viniloprisioneros.jpeg",
      "productos/vinilos/viniloprisioneros2.jpeg",
      "productos/vinilos/viniloprisioneros3.jpeg"
    ],
    descripcion: "La banda chilena que marcó a toda una generación, ahora en formato vinilo para coleccionistas."
  },
  { id: 3, nombre: "Vinilo Queen", precio: 300000, categoria: "Vinilos",
    imagenes: [
      "productos/vinilos/viniloqueen.jpeg",
      "productos/vinilos/viniloqueen2.jpeg",
      "productos/vinilos/viniloqueen3.jpeg"
    ],
    descripcion: "El legado de Freddie Mercury y Queen en vinilo, un imprescindible del rock clásico."
  },
  { id: 4, nombre: "Vinilo Beethoven", precio: 300000, categoria: "Vinilos",
    imagenes: [
      "productos/vinilos/beethoven.png",
      "productos/vinilos/beethoven2.jpeg",
      "productos/vinilos/beethoven3.png"
    ],
    descripcion: "Obras maestras de Beethoven en vinilo, ideal para los amantes de la música clásica."
  },
  { id: 5, nombre: "Vinilo Green Day", precio: 70000, categoria: "Vinilos",
    imagenes: [
      "productos/vinilos/greenday.png",
      "productos/vinilos/greenday2.png",
      "productos/vinilos/greenday3.png"
    ],
    descripcion: "Los éxitos de Green Day en formato vinilo, perfectos para los fanáticos del punk rock."
  },
  { id: 6, nombre: "Vinilo Artic Monkey", precio: 75000, categoria: "Vinilos",
    imagenes: [
      "productos/vinilos/articmonkey.png",
      "productos/vinilos/articmonkey2.png",
      "productos/vinilos/articmonkey3.png"
    ],
    descripcion: "El sonido alternativo de Arctic Monkeys en vinilo, ideal para coleccionistas modernos."
  },
  { id: 7, nombre: "Vinilo Pearl Jam Ten", precio: 65000, categoria: "Vinilos",
    imagenes: [
      "productos/vinilos/pearljam.png",
      "productos/vinilos/pearljam2.png",
      "productos/vinilos/pearljam3.png"
    ],
    descripcion: "El icónico álbum 'Ten' de Pearl Jam en vinilo, un clásico del grunge de los 90."
  },
  { id: 8, nombre: "Vinilo Doja Cat / Planet Her", precio: 300000, categoria: "Vinilos",
    imagenes: [
      "productos/vinilos/dojacat.png",
      "productos/vinilos/dojacat2.png",
      "productos/vinilos/dojacat3.png"
    ],
    descripcion: "El aclamado 'Planet Her' de Doja Cat en vinilo, con un estilo pop moderno y fresco."
  },

  { id: 9, nombre: "CD Bruno Mars / Doo-Wops", precio: 50000, categoria: "CDs",
    imagenes: [
      "productos/cd/bruno.png",
      "productos/cd/bruno2.png",
      "productos/cd/bruno3.png"
    ],
    descripcion: "El debut de Bruno Mars con 'Doo-Wops & Hooligans', lleno de hits inolvidables."
  },
  { id: 10, nombre: "CD Bob Marley", precio: 60000, categoria: "CDs",
    imagenes: [
      "productos/cd/bob.png",
      "productos/cd/bob2.png",
      "productos/cd/bob3.png"
    ],
    descripcion: "Los mejores éxitos de Bob Marley en CD, un viaje directo al reggae más auténtico."
  },
  { id: 11, nombre: "CD Benson Boone / American Heart", precio: 300000, categoria: "CDs",
    imagenes: [
      "productos/cd/benson.png",
      "productos/cd/benson2.png",
      "productos/cd/benson3.png"
    ],
    descripcion: "El álbum 'American Heartbreak' de Benson Boone en CD, con un sonido fresco y juvenil."
  },
  { id: 12, nombre: "CD Olivia Rodrigo / Sour", precio: 300000, categoria: "CDs",
    imagenes: [
      "productos/cd/olivia.png",
      "productos/cd/olivia2.png",
      "productos/cd/olivia3.png"
    ],
    descripcion: "El explosivo debut de Olivia Rodrigo en CD, con todos sus himnos juveniles."
  },
  { id: 13, nombre: "CD Kendrick Lamar", precio: 70000, categoria: "CDs",
    imagenes: [
      "productos/cd/kendric.png",
      "productos/cd/kendric2.png",
      "productos/cd/kendric3.png"
    ],
    descripcion: "Las rimas únicas de Kendrick Lamar en CD, considerado uno de los mejores raperos de su generación."
  },
  { id: 14, nombre: "CD Dua Lipa / Radical", precio: 75000, categoria: "CDs",
    imagenes: [
      "productos/cd/dualipa.png",
      "productos/cd/dualipa2.png",
      "productos/cd/dualipa3.png"
    ],
    descripcion: "El sonido pop renovado de Dua Lipa en su álbum 'Radical', disponible en CD."
  },
  { id: 15, nombre: "CD Los Bunkers", precio: 300000, categoria: "CDs",
    imagenes: [
      "productos/cd/bunkers.png",
      "productos/cd/bunkers2.png",
      "productos/cd/bunkers3.png"
    ],
    descripcion: "El rock chileno de Los Bunkers en CD, una pieza esencial para fanáticos nacionales."
  },
  { id: 16, nombre: "CD Gorillaz / Demon Days", precio: 300000, categoria: "CDs",
    imagenes: [
      "productos/cd/gorilaz.png",
      "productos/cd/gorilaz2.png",
      "productos/cd/gorilaz3.png"
    ],
    descripcion: "El icónico 'Demon Days' de Gorillaz en CD, con una mezcla única de estilos."
  },

  { id: 17, nombre: "Lector de Vinilos", precio: 200000, categoria: "Accesorios",
    imagenes: [
      "productos/accesorios/lectorvinilo.png",
      "productos/accesorios/lectorvinilo2.png",
      "productos/accesorios/lectorvinilo3.png"
    ],
    descripcion: "Reproductor de vinilos de alta calidad, ideal para disfrutar tu colección."
  },
  { id: 18, nombre: "Reproductor CD", precio: 180000, categoria: "Accesorios",
    imagenes: [
      "productos/accesorios/reproductorcd.png",
      "productos/accesorios/reproductorcd2.png",
      "productos/accesorios/reproductorcd3.png"
    ],
    descripcion: "Compacto y moderno reproductor de CDs, perfecto para escuchar tu música favorita."
  },
  { id: 19, nombre: "Fundas Vinilos", precio: 300000, categoria: "Accesorios",
    imagenes: [
      "productos/accesorios/fundas.png",
      "productos/accesorios/fundas2.png",
      "productos/accesorios/fundas3.png"
    ],
    descripcion: "Set de fundas protectoras para vinilos, mantiene tu colección en perfecto estado."
  },
  { id: 20, nombre: "Kit Limpieza Vinilo", precio: 70000, categoria: "Accesorios",
    imagenes: [
      "productos/accesorios/kit.png",
      "productos/accesorios/kit2.png",
      "productos/accesorios/kit3.png"
    ],
    descripcion: "Kit de limpieza para vinilos, elimina polvo y estática para mejor sonido."
  },
  { id: 21, nombre: "Maleta Vinilo", precio: 75000, categoria: "Accesorios",
    imagenes: [
      "productos/accesorios/maleta.png",
      "productos/accesorios/maleta2.png",
      "productos/accesorios/maleta3.png"
    ],
    descripcion: "Maleta rígida para transportar y proteger tus vinilos de forma segura."
  },
  { id: 22, nombre: "Pua Tornamesa", precio: 100000, categoria: "Accesorios",imagenes: [
      "productos/accesorios/pua.png",
      "productos/accesorios/pua2.png",
      "productos/accesorios/pua3.png"
    ],
    descripcion: "Aguja de repuesto para tornamesa, garantiza la mejor calidad de reproducción."
  }
];



// -------------------------
// FUNCIONES GENERALES
// -------------------------
function agregarCarrito(id, cantidad = 1) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let producto = productos.find(p => p.id === id);
  if (!producto) return alert("Producto no encontrado");

  let existente = carrito.find(p => p.id === id);
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    carrito.push({ ...producto, cantidad });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.nombre} (x${cantidad}) añadido al carrito ✅`);
}

// -------------------------
// FUNCION PARA RENDERIZAR PRODUCTOS EN CAROUSEL
// -------------------------
function renderizarCarousel(categoria, carouselId) {
  const lista = productos.filter(p => p.categoria === categoria);
  const carouselItems = document.querySelectorAll(`#${carouselId} .carousel-item`);

  carouselItems.forEach((item, index) => {
    const contenedor = item.querySelector(".row");
    contenedor.innerHTML = "";

    const start = index * 4; // 4 productos por item
    const end = start + 4;
    const slice = lista.slice(start, end);

    slice.forEach(p => {
      const div = document.createElement("div");
      div.className = "col-6 col-sm-4 col-md-3 col-lg-2";
      div.innerHTML = `
        <div class="card compact-card h-100">
          <img src="${p.imagenes[0]}" class="card-img-top" alt="${p.nombre}">
          <div class="card-body text-center p-2">
            <h6 class="card-title mb-1">${p.nombre}</h6>
            <p class="card-text mb-1">$${p.precio}</p>
            <div class="d-flex justify-content-center gap-2">
              <a href="detalle.html?id=${p.id}" class="btn btn-secondary btn-sm">Ver detalle</a>
              <button class="btn btn-danger btn-sm" onclick="agregarCarrito(${p.id})">Comprar</button>
            </div>
          </div>
        </div>
      `;
      contenedor.appendChild(div);
    });
  });
}


// -------------------------
// RENDERIZAR TODOS LOS CAROUSELES AL CARGAR
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderizarCarousel("Vinilos", "carouselVinilos");
  renderizarCarousel("CDs", "carouselVHS");
  renderizarCarousel("Accesorios", "carouselAccesorios");
});

function mostrarOtrosProductos(idActual) {
  const cont = document.getElementById("otros-productos");
  cont.innerHTML = "";

  // Tomamos 4 productos distintos al actual
  const relacionados = productos
    .filter(p => p.id !== idActual)
    .sort(() => 0.5 - Math.random()) // mezcla aleatoria
    .slice(0, 4);

  relacionados.forEach(p => {
    const div = document.createElement("div");
    div.className = "col-6 col-md-3";
    div.innerHTML = `
      <div class="card h-100 bg-light text-dark">
        <img src="${p.imagenes[0]}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body text-center">
          <h6 class="card-title">${p.nombre}</h6>
          <p class="card-text">$${p.precio}</p>
          <a href="detalle.html?id=${p.id}" class="btn btn-danger btn-sm">Ver detalle</a>
        </div>
      </div>
    `;
    cont.appendChild(div);
  });
}


function mostrarDetalle() {
  let params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get("id"));
  let p = productos.find(x => x.id === id);

  let cont = document.getElementById("detalle-producto");

  // Generar slides del carrusel
  let slides = p.imagenes.map((img, i) => `
    <div class="carousel-item ${i === 0 ? "active" : ""}">
      <img src="${img}" class="d-block w-100" style="max-height:400px; object-fit:contain;" alt="${p.nombre}">
    </div>
  `).join("");

  cont.innerHTML = `
    <div class="card p-4 bg-light text-dark">
      <div class="row align-items-center">
        
        <!-- Columna izquierda: Carrusel -->
        <div class="col-md-6">
          <div id="carouselProducto" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${slides}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselProducto" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselProducto" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        <!-- Columna derecha: Descripción -->
        <div class="col-md-6">
          <h2>${p.nombre}</h2>
          <p>${p.descripcion || ""}</p>
          <p><strong>Precio:</strong> $${p.precio}</p>

          <div class="d-flex align-items-center mb-3">
            <button class="btn btn-outline-secondary btn-sm" id="btnMenos">-</button>
            <span id="cantidadProducto" class="mx-3">1</span>
            <button class="btn btn-outline-secondary btn-sm" id="btnMas">+</button>
          </div>

          <button class="btn btn-danger" id="btnAgregar">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;

  // Lógica de cantidad
  let cantidad = 1;
  document.getElementById("btnMenos").onclick = () => {
    if (cantidad > 1) cantidad--;
    document.getElementById("cantidadProducto").textContent = cantidad;
  };
  document.getElementById("btnMas").onclick = () => {
    cantidad++;
    document.getElementById("cantidadProducto").textContent = cantidad;
  };

  // Agregar al carrito
  document.getElementById("btnAgregar").onclick = () => {
    agregarCarrito(id, cantidad);
  };

  // Mostrar otros productos
  mostrarOtrosProductos(id);
}



// Recupera el carrito desde localStorage
function mostrarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const lista = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("carrito-total");

  lista.innerHTML = "";
  let total = 0;

  if (carrito.length === 0) {
    lista.innerHTML = `<p>Tu carrito está vacío.</p>`;
    totalEl.textContent = "$0";
    return;
  }

  carrito.forEach((item, index) => {
    total += item.precio * item.cantidad;

    const div = document.createElement("div");
    div.className = "card mb-3 bg-dark text-white shadow-sm";
    div.innerHTML = `
      <div class="row g-0 align-items-center p-2">
        <div class="col-3">
          <img src="${item.imagenes[0]}" class="img-fluid rounded pe-2" alt="${item.nombre}">
        </div>
        <div class="col-5">
          <h6>${item.nombre}</h6>
          <p>Precio: $${item.precio}</p>
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-outline-light btn-sm menos">-</button>
            <span>${item.cantidad}</span>
            <button class="btn btn-outline-light btn-sm mas">+</button>
          </div>
          <p>Subtotal: $${item.precio * item.cantidad}</p>
        </div>
        <div class="col-4 text-end">
          <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
        </div>
      </div>
    `;

    // Botón eliminar
    div.querySelector(".eliminar").addEventListener("click", () => {
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
    });

    // Botón menos
    div.querySelector(".menos").addEventListener("click", () => {
      if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
      } else {
        // Si llega a 0, lo eliminamos
        carrito.splice(index, 1);
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
    });

    // Botón más
    div.querySelector(".mas").addEventListener("click", () => {
      carrito[index].cantidad++;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
    });

    lista.appendChild(div);
  });

  totalEl.textContent = "$" + total;
}

// Botón pagar (vacía carrito)
const btnPagar = document.getElementById("btnPagar");
if (btnPagar) {
  btnPagar.addEventListener("click", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    alert(`Gracias por tu compra! Total: $${total}`);
    localStorage.removeItem("carrito");
    mostrarCarrito();
  });
}

// Mostrar el carrito al cargar
document.addEventListener("DOMContentLoaded", mostrarCarrito);



// -------------------------
// REGISTRO DE USUARIO
// -------------------------
const formRegistro = document.querySelector("#formRegistro");
if (formRegistro) {
  formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmar = document.getElementById("confirmar").value.trim();

    // Validación correo
    const emailRegex = /^[^\s@]+@(duocuc.cl|duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (!emailRegex.test(email)) {
      alert("El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com");
      return; // Detiene aquí
    }

    // Validación contraseña
    if (password.length < 4 || password.length > 10) {
      alert("La contraseña debe tener entre 4 y 10 caracteres");
      return; // Detiene aquí
    }

    if (password !== confirmar) {
      alert("Las contraseñas no coinciden");
      return; // Detiene aquí
    }

    // Si todo bien, guardamos
    const usuario = { nombre, email, password };
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "Sesion.html";
  });
}
// -------------------------
// INICIO DE SESIÓN
// -------------------------
const formLogin = document.querySelector("#formLogin");
if (formLogin) {
  formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validación correo
    const emailRegex = /^[^\s@]+@(duocuc.cl|duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (!emailRegex.test(email)) {
      alert("El correo debe ser de dominio @duoc.cl, @profesor.duoc.cl o @gmail.com");
      return; // Detiene aquí
    }

    // Validación contraseña
    if (password.length < 4 || password.length > 10) {
      alert("La contraseña debe tener entre 4 y 10 caracteres");
      return; // Detiene aquí
    }

    // Recuperar usuario registrado
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));
    if (!usuarioGuardado) {
      alert("No hay usuarios registrados");
      return; // Detiene aquí
    }

    // Comparar credenciales
    if (usuarioGuardado.email === email && usuarioGuardado.password === password) {
      alert("Inicio de sesión exitoso");
      localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioGuardado));
      window.location.href = "index.html"; 
    } else {
      alert("Correo o contraseña incorrectos");
      return; // Muy importante detener aquí
    }
  });
}

// -------------------------
// MOSTRAR AVATAR EN NAVBAR
// -------------------------
window.addEventListener("DOMContentLoaded", () => {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
  const nav = document.querySelector(".navbar-nav.ms-auto"); // ul de la derecha

  if (usuarioLogueado && nav) {
    const loginLink = nav.querySelector('a[href="Sesion.html"]');
    if (loginLink) {
      loginLink.parentElement.remove();
    }

    // Crear avatar + cerrar sesión
    const li = document.createElement("li");
    li.className = "nav-item d-flex align-items-center ms-3";

    li.innerHTML = `
      <img src="images/usuario.png" alt="avatar" 
           style="height:40px; width:40px; border-radius:50%; border:2px solid #fff; margin-right:8px;">
      <button id="btnLogout" class="btn btn-sm btn-outline-light">Cerrar sesión</button>
    `;

    nav.appendChild(li);

    // Evento para cerrar sesión
    document.getElementById("btnLogout").addEventListener("click", () => {
      localStorage.removeItem("usuarioLogueado");
      alert("Sesión cerrada");
      window.location.href = "index.html"; // vuelve al home
    });
  }

  
});


