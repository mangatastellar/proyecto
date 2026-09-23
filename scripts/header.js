// Esperamos a que la página cargue completa antes de tocar el DOM
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  // 1. INYECTAMOS EL ENCABEZADO
  if (header) {
    header.innerHTML = `
      <div class="top">
        <div class="menu" id="botonMenu">
          ☰
        </div>

        <!-- LOGO COMO BOTÓN AL INICIO -->
        <div class="logo">
          <a href="index.html">
            <img src="../imagenes_en_general/imagenes_del_menu/logo.jpeg" alt="Logo Supermercado">
          </a>
        </div>

        <div class="buscador">
          <input
            type="text"
            id="buscar"
            placeholder="Buscar productos..."
            onkeyup="buscarProducto()"
          >
          <button onclick="buscarProducto()">
            <i class="fa-solid fa-magnifying-glass icono-lupa"></i>
          </button>
        </div>

        <div class="iconos" onclick="abrirCarrito()" style="cursor: pointer;">
          <i class="fa-solid fa-cart-shopping icono-carrito"></i>
        </div>

        <a href="login.html">
          <button class="ingresar">ingresar</button>
        </a>
      </div>

      <div class="categorias">
        <a href="index.html#oferta">Oferta</a>
        <a href="almacen.html">Almacen</a>
        <a href="verduleria.html">Verduleria</a>
        <a href="congelados.html">Congelados</a>
        <a href="bebidas.html">Bebidas</a>
        <a href="limpieza.html">Limpieza</a>
      </div>
    `;
  }

  // 2. LÓGICA DEL MENÚ LATERAL (Capturamos los elementos DESPUÉS de inyectar el header)
  const botonMenu = document.getElementById("botonMenu");
  const menuLateral = document.getElementById("menuLateral");
  const btnCerrar = document.getElementById("btnCerrar");

  if (botonMenu && menuLateral) {
    botonMenu.addEventListener("click", function () {
      menuLateral.classList.toggle("activo");
    });
  }

  if (btnCerrar && menuLateral) {
    btnCerrar.addEventListener("click", function () {
      menuLateral.classList.remove("activo");
    });
  }

  // 3. LÓGICA DE CATEGORÍAS ACTIVAS
  const categorias = document.querySelectorAll(".categorias a");
  categorias.forEach(function (categoria) {
    categoria.addEventListener("click", function () {
      categorias.forEach(function (c) {
        c.classList.remove("activo");
      });
      categoria.classList.add("activo");
    });
  });
});

// 4. FUNCIONES GLOBALES (van fuera del DOMContentLoaded para que funcionen con los onclick del HTML)
function buscarProducto() {
  let busqueda = document
    .getElementById("buscar")
    .value
    .toLowerCase();

  let productos = document.querySelectorAll(".card");

  productos.forEach(function (producto) {
    let texto = producto.innerText.toLowerCase();

    if (texto.includes(busqueda)) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
}

function ingresar() {
  alert("Ir a inicio de sesión");
}

function abrirCarrito() {
  alert("Tu carrito está vacío");
}

function verProducto(nombre) {
  alert("Producto seleccionado: " + nombre);
}