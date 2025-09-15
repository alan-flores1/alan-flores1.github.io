// Información de productos
const productos = [
  { id: 1, nombre: "CD Rock", precio: 10000, descripcion: "Clásicos del rock para toda ocasión", imagen: "Disco_de_Vinilo.jpg" },
  { id: 2, nombre: "Vinilo Jazz", precio: 15000, descripcion: "Vinilo con lo mejor del jazz", imagen: "Disco_de_Vinilo.jpg" },
  { id: 3, nombre: "CD Pop", precio: 12000, descripcion: "Éxitos modernos del pop", imagen: "Disco_de_Vinilo.jpg" },
  { id: 4, nombre: "Vinilo Indie", precio: 14000, descripcion: "Sonidos indie en vinilo", imagen: "Disco_de_Vinilo.jpg" }
];

// Guardar en carrito
function agregarCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(nombre + " añadido al carrito");
}

// Mostrar carrito
function mostrarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let lista = document.getElementById("lista-carrito");
  let total = 0;
  lista.innerHTML = "";

  carrito.forEach((item, i) => {
    let li = document.createElement("li");
    li.textContent = item.nombre + " - $" + item.precio;
    let btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.onclick = () => {
      carrito.splice(i, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
    };
    li.appendChild(btn);
    lista.appendChild(li);
    total += item.precio;
  });

  document.getElementById("carrito-total").textContent = "Total: $" + total;
}

// Ir al detalle
function verDetalle(id) {
  window.location.href = "detalle.html?id=" + id;
}

// Mostrar detalle de un producto
function mostrarDetalle() {
  let params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get("id"));
  let p = productos.find(x => x.id === id);

  // Contenedor principal
  let cont = document.getElementById("detalle-producto");
  cont.innerHTML = `
    <h2>${p.nombre}</h2>
    <p>${p.descripcion}</p>
    <img src="${p.imagen}" alt="${p.nombre}" style="max-width:300px; display:block; margin:15px 0;">
    <p>Precio: $${p.precio}</p>
    <button onclick="agregarCarrito('${p.nombre}', ${p.precio})">Agregar al carrito</button>
  `;

  // Otros productos
  let otros = document.getElementById("otros-productos");
  otros.innerHTML = "";
  productos
    .filter(prod => prod.id !== id) // quitar el actual
    .forEach(prod => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h4>${prod.nombre}</h4>
        <p>$${prod.precio}</p>
        <button onclick="verDetalle(${prod.id})">Ver detalle</button>
      `;
      otros.appendChild(div);
    });
}