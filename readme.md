# 🍔 Backend - Sistema de Pedidos para Rotisería

## 📌 Descripción

Este proyecto consiste en el desarrollo de un **backend para una aplicación web de pedidos de comida**, orientado a una rotisería.

El sistema permite:

* Gestionar productos (CRUD)
* Crear pedidos
* Registrar clientes
* Almacenar los ítems de cada pedido

Está diseñado siguiendo una arquitectura por capas y buenas prácticas para facilitar su escalabilidad y mantenimiento.

---

## 🧠 Tecnologías utilizadas

* Node.js
* Express
* TypeScript
* Supabase (PostgreSQL)
* REST API

---

## 🏗️ Arquitectura del proyecto

El backend está organizado en capas para separar responsabilidades:

```
Request → Routes → Controller → Service → Base de Datos
```

### 📁 Estructura de carpetas

```
/src
  /config
    bd.ts

  /models
    producto.types.ts
    pedido.types.ts
    carrito.types.ts

  /dto
    pedido.dto.ts

  /services
    productos.service.ts
    pedidos.service.ts

  /controllers
    productos.controller.ts
    pedidos.controller.ts

  /routes
    productos.routes.ts
    pedidos.routes.ts

  app.ts
  server.ts
```

---

## 🧱 Modelado de datos

Se definieron distintos tipos para separar responsabilidades:

### 🔹 Models (Base de datos)

Representan cómo se almacenan los datos.

* `Producto`
* `Pedido`
* `PedidoItem`

### 🔹 DTOs (Data Transfer Objects)

Representan los datos que viajan en la API.

* `CrearPedidoDTO`

### 🔹 Tipos de frontend

* `CarritoItem` → representa el carrito del usuario

---

## ⚠️ Decisión clave: separación de tipos

No se utiliza el mismo tipo para todo.

Ejemplo:

| Tipo        | Rol                    |
| ----------- | ---------------------- |
| CarritoItem | Entrada desde frontend |
| Pedido      | Entidad principal      |
| PedidoItem  | Persistencia en DB     |

👉 Esto evita mezclar lógica de frontend con base de datos.

---

## 🧾 Flujo de creación de pedidos

### 1. El frontend envía:

```json
{
  "cliente": {...},
  "carrito": [...],
  "total": 7800
}
```

---

### 2. El backend procesa:

#### ✔ Paso 1: Crear cliente

Se inserta en tabla `clientes`.

#### ✔ Paso 2: Crear pedido

Se genera en tabla `pedidos` con relación al cliente.

#### ✔ Paso 3: Crear items

Se transforma el carrito en registros de `pedido_items`.

---

### 🔄 Transformación importante

```text
CarritoItem → PedidoItem
```

Esto permite adaptar los datos del frontend al modelo relacional de la base de datos.

---

## 🧠 Validaciones y decisiones importantes

### ❌ No confiar en el frontend

El frontend puede enviar datos incorrectos o manipulados.

Por eso:

* El backend debería obtener precios desde la base de datos
* El total debería calcularse en el backend

---

### ⚠️ Problema detectado durante desarrollo

Error:

```
violates foreign key constraint
```

👉 Causa:
Se enviaban IDs de productos que no existían en la base de datos.

✔ Solución:
Verificar siempre los IDs reales antes de usarlos.

---

## 🧪 Testing con Postman

Se probaron los endpoints manualmente:

### ✔ Productos

* GET /productos
* POST /productos
* PUT /productos/:id
* DELETE /productos/:id

### ✔ Pedidos

* POST /pedidos

---

## 📦 Base de datos

Se utilizaron las siguientes tablas:

* productos
* clientes
* pedidos
* pedido_items

Relaciones:

* pedidos → clientes
* pedido_items → pedidos
* pedido_items → productos

---

## ⚠️ Consideraciones actuales

* No hay transacciones (puede haber inconsistencias si falla un paso)
* No hay validación avanzada de datos
* No hay autenticación

---

## 🚀 Mejoras futuras

* Validación con Zod o Joi
* Manejo de transacciones
* Autenticación de usuarios
* Optimización de consultas
* Uso de ORM (opcional)

---

## 🎯 Conclusión

Se construyó un backend funcional y estructurado que:

* Sigue buenas prácticas
* Separa responsabilidades correctamente
* Permite escalar a futuro
* Está listo para integrarse con el frontend

---

## 👨‍💻 Autor

Thiago Perrig
Desarrollador Web Full Stack (en formación)
