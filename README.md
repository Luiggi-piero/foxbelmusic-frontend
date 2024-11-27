## Descripción del proyecto
Buscador de canciones por título o nombre del artista, autenticación de usuarios usando React

## Funcionalidades
- [x] Al ingresar a la página
* Los resultados esperados deben ser los de un artista (Adele)
  
- [x] Barra de búsqueda
* El buscador funciona al presionar 'Enter' o el ícono de la lupa
* Se puede buscar por nombre de la canción o nombre del artista
  
- [x] Página de resultados
* Debe estar en una url con el query de la búsqueda (ejemplo: dominio.com/tracks?search={búsqueda_del_usuario})
* Solo se mostrarán los resultados de la búsqueda, el infocard ya no deberá estar desplegado.

- [x] Página de usuario
* Si el usuario no se encuentra con la sesión iniciada se mostrarán las opciones: inciar o registrar
* Registro de usuario
  * Se presentará un formulario con los siguientes datos: Nombre(Obligatorio), Apellido(Obligatorio), Celular(Opcional), Género(Opcional), Correo(Obligatorio), Contraseña(Obligatorio)
  * Con el registro terminado, el usuario es considerado con la sesión activa y no debe ingresar las credenciales para iniciar sesión

* Inicio de sesión
  * Debe ingresar su correo y contraseña
* Usuario con sesión iniciada
  * En la sección de Perfil, se mostrarán los datos del usuario con la posibilidad de modificarlos, confirmando la acción con su contraseña actual

- [x] Interacción con la página
* Si el usuario no se encuentra con la sesión activa, entonces no se mostrará la sección `Mi Librería`
* Si el usuario tiene la sesión activa puede agregar a favoritos cualquier canción
* El usuario con la sesión activa puede ver sus canciones favoritas en `Mi Librería / Canciones`
* El usuario autenticado puede cerrar sesión
* Las rutas del usuario `(favorites y profile)` deben estar protegidas


### `npm i`

Instala las dependencias.


### `npm run dev`

Ejecuta la aplicación en modo desarrollo.
