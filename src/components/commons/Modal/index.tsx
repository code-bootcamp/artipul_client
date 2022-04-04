const Swal = require('sweetalert2')

export function errorModal(title: string, message: string) {
  Swal.fire({
    title: 'Error!',
    text: title,
    icon: 'error',
    confirmButtonText: message
  })
}

export function successModal(message: string) {
  Swal.fire({
    title: 'Success!',
    icon: 'success',
    confirmButtonText: message
  })
}

export function warningModal(message: string) {
  Swal.fire({
    title: 'Warning!',
    icon: 'warning',
    confirmButtonText: message
  })
}

export function infoModal(title: string, message: string) {
  Swal.fire({
    title: 'Info!',
    text: title,
    icon: 'info',
    confirmButtonText: message
  })
}

export function questionModal(title: string, message: string) {
  Swal.fire({
    title: 'Question!',
    text: title,
    icon: 'question',
    confirmButtonText: message
  })
}
