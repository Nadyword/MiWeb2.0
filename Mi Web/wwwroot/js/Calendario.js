export function CalendarioJS() {

    // Variables globales
    const currentDate = new Date()
    let selectedDate = null
    let currentEventData = null

    // Datos de eventos
    const events = {
        "2025-01-15": [
            {
                id: 1,
                time: "09:00",
                description: "Reunión de equipo",
                location: "Sala de conferencias A",
                participants: "Juan, María, Carlos, Ana",
                notes: "Revisar avances del proyecto Q2. Traer reportes de progreso.",
            },
            {
                id: 2,
                time: "14:00",
                description: "Almuerzo de trabajo",
                location: "Restaurante El Jardín",
                participants: "Cliente ABC Corp",
                notes: "Discutir propuesta de contrato anual. Llevar documentos.",
            },
        ],
        "2025-01-20": [
            {
                id: 3,
                time: "10:00",
                description: "Cita médica",
                location: "Hospital Central - Consulta 205",
                participants: "Dr. González",
                notes: "Chequeo anual. Llevar exámenes de laboratorio previos.",
            },
            {
                id: 4,
                time: "16:00",
                description: "Llamada importante",
                location: "Oficina (videollamada)",
                participants: "Equipo de desarrollo",
                notes: "Revisión de bugs críticos. Preparar lista de issues.",
            },
        ],
        "2025-01-10": [
            {
                id: 5,
                time: "09:00",
                description: "Yoga matutino",
                location: "Gimnasio FitLife",
                participants: "Entrenador personal",
                notes: "Rutina de cardio y pesas. Llevar toalla y botella de agua.",
            },
            {
                id: 6,
                time: "18:30",
                description: "Clase de cocina",
                location: "Escuela Culinaria Gourmet",
                participants: "Chef instructor y 8 estudiantes",
                notes: "Clase de cocina italiana. Aprenderemos a hacer pasta fresca.",
            },
        ],
    }

    // Agregar eventos para hoy
    const today = new Date()
    const todayString = formatDateString(today)
    if (!events[todayString]) {
        events[todayString] = [
            {
                id: 100,
                time: "10:00",
                description: "Cita importante de hoy",
                location: "Oficina principal",
                participants: "Equipo directivo",
                notes: "Reunión estratégica importante para definir objetivos.",
            },
            {
                id: 101,
                time: "14:30",
                description: "Reunión urgente",
                location: "Sala de juntas",
                participants: "Departamento de ventas",
                notes: "Revisar métricas del mes y planificar estrategias.",
            },
        ]
    }

    const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ]

    // Función para formatear fecha como string
    function formatDateString(date) {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const day = String(date.getDate()).padStart(2, "0")
        return `${year}-${month}-${day}`
    }

    // Inicialización cuando se carga la página
    document.addEventListener("DOMContentLoaded", () => {
        initializeApp()
    })

    function initializeApp() {
        // Event listeners principales
        document.getElementById("login-form").addEventListener("submit", handleLogin)
        document.getElementById("logout-btn").addEventListener("click", handleLogout)
        document.getElementById("prev-month").addEventListener("click", previousMonth)
        document.getElementById("next-month").addEventListener("click", nextMonth)

        // Modal event listeners
        document.getElementById("close-modal").addEventListener("click", closeModal)
        document.getElementById("close-modal-btn").addEventListener("click", closeModal)
        document.getElementById("delete-event-modal").addEventListener("click", deleteEventFromModal)
        document.getElementById("edit-event").addEventListener("click", editEvent)

        // Cerrar modal al hacer clic fuera
        document.getElementById("event-modal").addEventListener("click", function (e) {
            if (e.target === this) {
                closeModal()
            }
        })

        // Cerrar modal con Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeModal()
            }
        })
    }

    // Función de login
    function handleLogin(e) {
        e.preventDefault()

        const username = document.getElementById("username").value
        const password = document.getElementById("password").value

        if (username.trim() && password.trim()) {
            document.getElementById("login-container").style.display = "none"
            document.getElementById("calendar-app").style.display = "block"
            renderCalendar()
            showTodayEvents()
        } else {
            alert("Por favor completa todos los campos")
        }
    }

    // Función de logout
    function handleLogout() {
        document.getElementById("calendar-app").style.display = "none"
        document.getElementById("login-container").style.display = "flex"
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
        selectedDate = null
    }

    // Navegación del calendario
    function previousMonth() {
        currentDate.setMonth(currentDate.getMonth() - 1)
        renderCalendar()
    }

    function nextMonth() {
        currentDate.setMonth(currentDate.getMonth() + 1)
        renderCalendar()
    }

    // Renderizar calendario
    function renderCalendar() {
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()
        const today = new Date()

        // Actualizar título del mes
        document.getElementById("month-year").textContent = `${monthNames[month]} ${year}`

        const firstDay = new Date(year, month, 1)
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const startingDayOfWeek = firstDay.getDay()

        const calendarGrid = document.getElementById("calendar-grid")

        // Limpiar días anteriores (mantener headers)
        const dayHeaders = calendarGrid.querySelectorAll(".day-header")
        calendarGrid.innerHTML = ""
        dayHeaders.forEach((header) => calendarGrid.appendChild(header))

        // Crear días del mes anterior
        const prevMonth = new Date(year, month - 1, 0)
        const daysInPrevMonth = prevMonth.getDate()

        for (let i = startingDayOfWeek - 1; i >= 0; i--) {
            const dayElement = createDayElement(daysInPrevMonth - i, true)
            calendarGrid.appendChild(dayElement)
        }

        // Crear días del mes actual
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = createDayElement(day, false)
            const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`

            // Verificar si es hoy
            if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
                dayElement.classList.add("today")
            }

            // Verificar si tiene eventos
            if (events[dateString]) {
                dayElement.classList.add("has-events")
            }

            // Agregar evento click
            dayElement.addEventListener("click", () => selectDate(dateString, dayElement))

            calendarGrid.appendChild(dayElement)
        }

        // Completar con días del mes siguiente
        const totalCells = calendarGrid.children.length - 7 // -7 por los headers
        const remainingCells = 42 - totalCells

        for (let day = 1; day <= remainingCells; day++) {
            const dayElement = createDayElement(day, true)
            calendarGrid.appendChild(dayElement)
        }
    }

    function createDayElement(day, isOtherMonth) {
        const dayElement = document.createElement("div")
        dayElement.className = "calendar-day"
        dayElement.textContent = day

        if (isOtherMonth) {
            dayElement.classList.add("other-month")
        }

        return dayElement
    }

    function selectDate(dateString, dayElement) {
        // Remover selección anterior
        document.querySelectorAll(".calendar-day").forEach((day) => {
            day.classList.remove("selected")
        })

        // Agregar selección actual
        dayElement.classList.add("selected")
        selectedDate = dateString
        showEvents(dateString)
    }

    function showTodayEvents() {
        const todayString = formatDateString(today)

        // Seleccionar el día actual
        setTimeout(() => {
            const todayCell = document.querySelector(".calendar-day.today")
            if (todayCell) {
                selectDate(todayString, todayCell)
            }
        }, 100)
    }

    function showEvents(dateString) {
        const date = new Date(dateString)
        const formattedDate = `${date.getDate()} de ${monthNames[date.getMonth()]} de ${date.getFullYear()}`

        const today = new Date()
        const isToday = dateString === formatDateString(today)

        document.getElementById("selected-date").textContent = isToday
            ? `📅 Citas de HOY - ${formattedDate}`
            : `📅 Citas del ${formattedDate}`

        const eventsContainer = document.getElementById("events-container")
        const dayEvents = events[dateString] || []

        if (dayEvents.length === 0) {
            eventsContainer.innerHTML = '<div class="no-events-message">No hay citas programadas para este día</div>'
            return
        }

        const sortedEvents = dayEvents.sort((a, b) => a.time.localeCompare(b.time))

        let eventsHTML = ""
        sortedEvents.forEach((event) => {
            eventsHTML += `
            <div class="event-item" onclick="openModal(${event.id}, '${dateString}')">
                <div class="event-time">${event.time}</div>
                <div class="event-description">${event.description}</div>
                <button class="btn-delete-event" onclick="event.stopPropagation(); deleteEvent('${dateString}', ${event.id})">🗑️</button>
            </div>
        `
        })

        eventsContainer.innerHTML = eventsHTML
    }

    // Funciones del modal
    function openModal(eventId, dateString) {
        const eventData = events[dateString].find((event) => event.id === eventId)
        if (!eventData) return

        currentEventData = { ...eventData, dateString }

        const date = new Date(dateString)
        const formattedDate = `${date.getDate()} de ${monthNames[date.getMonth()]} de ${date.getFullYear()}`

        document.getElementById("modal-date").textContent = formattedDate
        document.getElementById("modal-time").textContent = eventData.time
        document.getElementById("modal-description").textContent = eventData.description
        document.getElementById("modal-location").textContent = eventData.location || "No especificada"
        document.getElementById("modal-participants").textContent = eventData.participants || "No especificados"
        document.getElementById("modal-notes").textContent = eventData.notes || "Sin notas adicionales"

        document.getElementById("event-modal").style.display = "block"
        document.body.style.overflow = "hidden"
    }

    function closeModal() {
        document.getElementById("event-modal").style.display = "none"
        document.body.style.overflow = "auto"
        currentEventData = null
    }

    function deleteEventFromModal() {
        if (currentEventData) {
            deleteEvent(currentEventData.dateString, currentEventData.id)
            closeModal()
        }
    }

    function editEvent() {
        alert("Función de editar en desarrollo")
        closeModal()
    }

    function deleteEvent(dateString, eventId) {
        if (confirm("¿Estás seguro de que quieres eliminar este evento?")) {
            events[dateString] = events[dateString].filter((event) => event.id !== eventId)

            if (events[dateString].length === 0) {
                delete events[dateString]
            }

            showEvents(dateString)
            renderCalendar()
        }
    }
}
