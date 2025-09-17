// -------------------------
// LISTA DE PRODUCTOS
// -------------------------
const productos = [
  // Vinilos (8 productos)
  { id: 1, nombre: "Vinilo Luis Miguel", precio: 80000, categoria: "Vinilos", imagen: "productos/vinilos/viniloluismi.jpeg", descripcion: "El clásico de Luis Miguel en vinilo, ideal para los nostálgicos del pop latino." },
  { id: 2, nombre: "Los Prisioneros", precio: 150000, categoria: "Vinilos", imagen: "productos/vinilos/viniloprisioneros.jpeg", descripcion: "La banda chilena que marcó a toda una generación, ahora en formato vinilo para coleccionistas." },
  { id: 3, nombre: "Vinilo Queen", precio: 300000, categoria: "Vinilos", imagen: "productos/vinilos/viniloqueen.jpeg", descripcion: "El legado de Freddie Mercury y Queen en vinilo, un imprescindible del rock clásico." },
  { id: 4, nombre: "Vinilo Beethoven", precio: 300000, categoria: "Vinilos", imagen: "productos/vinilos/beethoven.png", descripcion: "Obras maestras de Beethoven en vinilo, ideal para los amantes de la música clásica." },
  { id: 5, nombre: "Vinilo Green Day", precio: 70000, categoria: "Vinilos", imagen: "productos/vinilos/greenday.png", descripcion: "Los éxitos de Green Day en formato vinilo, perfectos para los fanáticos del punk rock." },
  { id: 6, nombre: "Vinilo Artic Monkey", precio: 75000, categoria: "Vinilos", imagen: "productos/vinilos/articmonkey.png", descripcion: "El sonido alternativo de Arctic Monkeys en vinilo, ideal para coleccionistas modernos." },
  { id: 7, nombre: "Vinilo Pearl Jam Ten", precio: 65000, categoria: "Vinilos", imagen: "productos/vinilos/pearljam.png", descripcion: "El icónico álbum 'Ten' de Pearl Jam en vinilo, un clásico del grunge de los 90." },
  { id: 8, nombre: "Vinilo Doja Cat / Planet Her", precio: 300000, categoria: "Vinilos", imagen: "productos/vinilos/dojacat.png", descripcion: "El aclamado 'Planet Her' de Doja Cat en vinilo, con un estilo pop moderno y fresco." },

  // CDs (8 productos)
  { id: 9, nombre: "CD Bruno Mars / Doo-Wops", precio: 50000, categoria: "CDs", imagen: "productos/cd/bruno.png", descripcion: "El debut de Bruno Mars con 'Doo-Wops & Hooligans', lleno de hits inolvidables." },
  { id: 10, nombre: "CD Bob Marley", precio: 60000, categoria: "CDs", imagen: "productos/cd/bob.png", descripcion: "Los mejores éxitos de Bob Marley en CD, un viaje directo al reggae más auténtico." },
  { id: 11, nombre: "CD Benson Boone / American Heart", precio: 300000, categoria: "CDs", imagen: "productos/cd/benson.png", descripcion: "El álbum 'American Heartbreak' de Benson Boone en CD, con un sonido fresco y juvenil." },
  { id: 12, nombre: "CD Olivia Rodrigo / Sour", precio: 300000, categoria: "CDs", imagen: "productos/cd/olivia.png", descripcion: "El explosivo debut de Olivia Rodrigo en CD, con todos sus himnos juveniles." },
  { id: 13, nombre: "CD Kendrick Lamar", precio: 70000, categoria: "CDs", imagen: "productos/cd/kendric.png", descripcion: "Las rimas únicas de Kendrick Lamar en CD, considerado uno de los mejores raperos de su generación." },
  { id: 14, nombre: "CD Dua Lipa / Radical", precio: 75000, categoria: "CDs", imagen: "productos/cd/dualipa.png", descripcion: "El sonido pop renovado de Dua Lipa en su álbum 'Radical', disponible en CD." },
  { id: 15, nombre: "CD Los Bunkers", precio: 300000, categoria: "CDs", imagen: "productos/cd/bunkers.png", descripcion: "El rock chileno de Los Bunkers en CD, una pieza esencial para fanáticos nacionales." },
  { id: 16, nombre: "CD Gorillaz / Demon Days", precio: 300000, categoria: "CDs", imagen: "productos/cd/gorilaz.png", descripcion: "El icónico 'Demon Days' de Gorillaz en CD, con una mezcla única de estilos." },

  // Accesorios (6 productos)
  { id: 17, nombre: "Lector de Vinilos", precio: 200000, categoria: "Accesorios", imagen: "productos/accesorios/lectorvinilo.png", descripcion: "Reproductor de vinilos de alta calidad, ideal para disfrutar tu colección." },
  { id: 18, nombre: "Reproductor CD", precio: 180000, categoria: "Accesorios", imagen: "productos/accesorios/reproductorcd.png", descripcion: "Compacto y moderno reproductor de CDs, perfecto para escuchar tu música favorita." },
  { id: 19, nombre: "Fundas Vinilos", precio: 300000, categoria: "Accesorios", imagen: "productos/accesorios/fundas.png", descripcion: "Set de fundas protectoras para vinilos, mantiene tu colección en perfecto estado." },
  { id: 20, nombre: "Kit Limpieza Vinilo", precio: 70000, categoria: "Accesorios", imagen: "productos/accesorios/kit.png", descripcion: "Kit de limpieza para vinilos, elimina polvo y estática para mejor sonido." },
  { id: 21, nombre: "Maleta Vinilo", precio: 75000, categoria: "Accesorios", imagen: "productos/accesorios/maleta.png", descripcion: "Maleta rígida para transportar y proteger tus vinilos de forma segura." },
  { id: 22, nombre: "Pua Tornamesa", precio: 100000, categoria: "Accesorios", imagen: "productos/accesorios/pua.png", descripcion: "Aguja de repuesto para tornamesa, garantiza la mejor calidad de reproducción." },
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
        <div class="card compact-card">
          <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
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
        <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
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
  cont.innerHTML = `
    <div class="card p-4 bg-light text-dark">
      <div class="row align-items-center">
        <!-- Columna izquierda: Imagen -->
        <div class="col-md-6 text-center">
          <img src="${p.imagen}" alt="${p.nombre}" class="img-fluid my-3" style="max-width:300px;">
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

  let cantidad = 1;
  document.getElementById("btnMenos").onclick = () => {
    if (cantidad > 1) cantidad--;
    document.getElementById("cantidadProducto").textContent = cantidad;
  };
  document.getElementById("btnMas").onclick = () => {
    cantidad++;
    document.getElementById("cantidadProducto").textContent = cantidad;
  };

  document.getElementById("btnAgregar").onclick = () => {
    agregarCarrito(id, cantidad);
  };

  mostrarOtrosProductos(id);
}



// Recupera el carrito desde localStorage
function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const lista = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("carrito-total");

  lista.innerHTML = ""; // limpiar lista
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
          <img src="${item.imagen}" class="img-fluid rounded" alt="${item.nombre}">
        </div>
        <div class="col-5">
          <h6>${item.nombre}</h6>
          <p>Precio: $${item.precio}</p>
          <p>Cantidad: ${item.cantidad}</p>
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


