// Lista de productos disponibles en la tienda
const productos = [
  { id: 1, nombre: "CD Rock", precio: 10000, descripcion: "Clásicos del rock", imagen: "Disco_de_Vinilo.jpg" },
  { id: 2, nombre: "Vinilo Jazz", precio: 15000, descripcion: "Vinilo de jazz clásico", imagen: "Disco_de_Vinilo.jpg" },
  { id: 3, nombre: "CD Pop", precio: 12000, descripcion: "Hits modernos del pop", imagen: "Disco_de_Vinilo.jpg" },
  { id: 4, nombre: "Vinilo Indie", precio: 14000, descripcion: "Sonidos indie auténticos", imagen: "Disco_de_Vinilo.jpg" }
];

// Función para agregar un producto al carrito
function agregarCarrito(nombre, precio) {
  // Recupera el carrito del localStorage (si no existe, lo crea vacío [])
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Agrega un objeto con nombre y precio al carrito
  carrito.push({ nombre, precio });

  // Guarda el carrito actualizado en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Mensaje de confirmación
  alert(nombre + " añadido al carrito");
}

// Función para mostrar los productos en la página productos.html
function mostrarProductos() {
  let cont = document.getElementById("productos-lista"); // Contenedor donde van los productos

  // Recorre la lista de productos y los dibuja en la página
  productos.forEach(p => {
    let div = document.createElement("div");
    div.className = "col-md-3 producto-card"; // Bootstrap: 4 columnas por fila
    div.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>$${p.precio}</p>
      <p>${p.descripcion}</p>
      <img src="${p.imagen}" alt="${p.nombre}" class="img-fluid my-3" style="max-width:300px;">
      <!-- Botón para agregar directamente al carrito -->
      <button class="btn btn-success btn-sm" onclick="agregarCarrito('${p.nombre}', ${p.precio})">Agregar</button>
      <!-- Botón que envía al detalle del producto -->
      <button class="btn btn-info btn-sm" onclick="verDetalle(${p.id})">Ver detalle</button>
    `;
    cont.appendChild(div);
  });
}

// Función que redirige a la página de detalle con el id del producto
function verDetalle(id) {
  // Cambia la URL a detalle.html?id=ID_PRODUCTO
  window.location.href = "detalle.html?id=" + id;
}

// Función para mostrar la información del producto en detalle.html
function mostrarDetalle() {
  // Lee el parámetro "id" desde la URL (ej: detalle.html?id=2)
  let params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get("id"));

  // Busca el producto con ese id
  let p = productos.find(x => x.id === id);

  // Contenedor principal del detalle
  let cont = document.getElementById("detalle-producto");
  cont.innerHTML = `
    <div class="card p-4 bg-light">
      <h2>${p.nombre}</h2>
      
      <p>${p.descripcion}</p>
      <img src="${p.imagen}" alt="${p.nombre}" class="img-fluid my-3" style="max-width:300px;">
      <p>Precio: $${p.precio}</p>
      <button class="btn btn-success" onclick="agregarCarrito('${p.nombre}', ${p.precio})">Agregar al carrito</button>
    </div>
  `;

  // Mostrar otros productos abajo en "detalle.html"
  let otros = document.getElementById("otros-productos");
  productos.filter(prod => prod.id !== id).forEach(prod => {
    let div = document.createElement("div");
    div.className = "col-md-3 producto-card";
    div.innerHTML = `
      <h4>${prod.nombre}</h4>
      <p>$${prod.precio}</p>
      <button class="btn btn-info btn-sm" onclick="verDetalle(${prod.id})">Ver detalle</button>
    `;
    otros.appendChild(div);
  });
}

// Función para mostrar los productos del carrito en carrito.html
function mostrarCarrito() {
  // Recupera el carrito desde localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  let lista = document.getElementById("lista-carrito"); // Lista de productos en carrito.html
  let total = 0;
  lista.innerHTML = ""; // Limpia el contenido antes de mostrarlo

  // Recorre cada producto del carrito
  carrito.forEach((item, i) => {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${item.nombre} - $${item.precio}`;

    // Botón para eliminar producto del carrito
    let btn = document.createElement("button");
    btn.className = "btn btn-danger btn-sm";
    btn.textContent = "Eliminar";

    // Cuando se hace clic, se elimina este producto del array
    btn.onclick = () => {
      carrito.splice(i, 1); // elimina en la posición i
      localStorage.setItem("carrito", JSON.stringify(carrito)); // guarda el nuevo carrito
      mostrarCarrito(); // vuelve a actualizar la lista en pantalla
    };

    // Añade el botón al <li>
    li.appendChild(btn);
    lista.appendChild(li);

    // Acumula el precio en el total
    total += item.precio;
  });

  // Muestra el total al final
  document.getElementById("carrito-total").textContent = "Total: $" + total;
}
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
    const emailRegex = /^[^\s@]+@(duoc.cl|profesor.duoc.cl|gmail.com)$/;
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
    const emailRegex = /^[^\s@]+@(duoc.cl|profesor.duoc.cl|gmail.com)$/;
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