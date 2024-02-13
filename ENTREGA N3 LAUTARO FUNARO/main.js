boton.addEventListener("click", () => {
    Toastify({
      title: "Ingrese le nombre del producto a buscar",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Look up",
    }).then((result) => {
      const producto = productos.find((item) => item.nombre === result.value);
      if (result.isConfirmed) {
        Swal.fire({
          title: result.value,
        });
      }
    });
  });