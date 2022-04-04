import { warningModal } from '../../components/commons/Modal'

export const checkFileValidation = (file: File | undefined) => {
  if (!file?.size) {
    warningModal('파일이 없습니다.')
    return false
  }

  if (
    !file.type.includes('jpeg') &&
    !file.type.includes('png') &&
    !file.type.includes('jpg') &&
    !file.type.includes('webp')
  ) {
    warningModal('jpeg, png, jpg, webp 파일만 업로드 가능합니다.')
    return false
  }

  return true
}
