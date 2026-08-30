# 🌱 Aula Raíz

**Plataforma Educativa Local para Contextos con Acceso Restringido**

## Descripción

Aula Raíz es un **prototipo funcional de plataforma web educativa** diseñada para el Liceo Santa María Eufrasia (CPF San Joaquín), destinada a estudiantes de segundo nivel medio EPJA (3.º y 4.º medio).

### Propósito

Facilitar el acceso a recursos educativos digitales en contextos donde:
- La navegación abierta por internet está restringida por condiciones institucionales y de seguridad
- Se requiere funcionamiento en red local sin dependencia de internet externo
- Los docentes necesitan administrar y actualizar contenidos localmente

## Características

✅ **Red Local**: Funciona completamente en red local sin internet externo  
✅ **Organización de Recursos**: Materiales ordenados por asignatura (Lenguaje, Matemática, Historia, Ciencias, Inglés)  
✅ **Tipos de Contenidos**: PDF, Guías, Videos  
✅ **Vista Estudiante**: Búsqueda, filtrado y visualización de recursos  
✅ **Panel Docente**: Administración de materiales en tiempo real  
✅ **Estadísticas**: Registro de acceso y análisis de consultas  
✅ **Interfaz Accesible**: Diseño responsivo, navegación clara  
✅ **Prototipo Funcional**: Lista de recursos precargada para demostración  

## Tecnologías Usadas

- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Backend** (futuro): Node.js, Express, PostgreSQL
- **Base de Datos** (futuro): PostgreSQL 12+
- **Diseño**: Responsive, accesible, sin frameworks externos

## Instalación Rápida

### 1. Clonar repositorio
```bash
git clone https://github.com/cami-gs/aula-raiz.git
cd aula-raiz
```

### 2. Servir aplicación web
```bash
cd frontend
python3 -m http.server 8000
```

### 3. Acceder
Abre tu navegador: `http://localhost:8000`

## Vistas Disponibles

| Vista | Descripción | Usuario |
|-------|-------------|---------|
| **Inicio** | Presentación y propuesta de valor | Todos |
| **Estudiante** | Búsqueda y visualización de recursos | Estudiantes |
| **Docente** | Administración de materiales | Docentes |
| **Estadísticas** | Medición de acceso y uso | Administradores |
| **Acerca** | Información del proyecto | Todos |

## Recursos de Demostración

El prototipo incluye 15 recursos de ejemplo:

**Lenguaje (3)**
- Comprensión lectora (PDF)
- Guía de análisis de texto (Guía)
- Estrategias de lectura (Video)

**Matemática (3)**
- Ecuaciones de primer grado (PDF)
- Guía de ejercicios (Guía)
- Resolución paso a paso (Video)

**Historia (3)**
- Derechos humanos y ciudadanía (PDF)
- Guía de reflexión histórica (Guía)
- Memoria y sociedad (Video)

**Ciencias (3)**
- Cuidado del cuerpo y salud (PDF)
- Guía científica (Guía)
- Ciencias en la vida cotidiana (Video)

**Inglés (3)**
- Vocabulario cotidiano (PDF)
- Guía básica (Guía)
- Saludos y presentación personal (Video)

## Funcionalidades Implementadas

### Vista Estudiante
- 🔍 Búsqueda de materiales
- 🏷️ Filtrado por tipo de recurso
- 📊 Visualización por asignatura
- 📥 Descarga simulada de recursos
- 📝 Registro automático de acceso

### Panel Docente
- ➕ Agregar materiales
- 📋 Tabla de recursos administrables
- ❌ Eliminar recursos
- 🔄 Actualización en tiempo real

### Estadísticas
- 📈 Total de materiales
- 📊 Total de accesos
- 🎯 Asignatura más consultada
- 📝 Tipo de recurso más consultado
- 📋 Tablas de acceso por asignatura y tipo

## Desarrollo Local

### Requisitos
- Git
- Navegador web moderno
- Python 3 (para servidor local)

### Pasos
1. Clonar repositorio
2. Navegar a carpeta `frontend`
3. Ejecutar: `python3 -m http.server 8000`
4. Acceder a `http://localhost:8000`

### Estructura de Código

**index.html**: Estructura HTML con múltiples vistas (secciones)  
**style.css**: Estilos CSS3 con variables, gradientes, responsive design  
**script.js**: Lógica JavaScript para navegación, gestión de recursos, estadísticas

## Próximas Mejoras

- [ ] Backend con API REST (Node.js/Express)
- [ ] Autenticación y autorización (JWT)
- [ ] Base de datos PostgreSQL
- [ ] Carga real de archivos
- [ ] Persistencia de datos
- [ ] Interfaz de administración mejorada
- [ ] Análisis avanzado de uso
- [ ] Exportación de reportes
- [ ] Integración con sistemas educacionales

## Licencia

Proyecto prototipo académico. Derechos reservados © 2026

## Contacto

Desarrollado por **Camila Ignacia González Silva**  
Email: camila.gonzalez.3@ug.uchile.cl

---

**Última actualización**: Agosto 2026
