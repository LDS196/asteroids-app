export function formatDateWithTime(inputString: string) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  try {
    const inputDateTime = new Date(inputString.replace(/-/g, ' '))
    const day = inputDateTime.getDate()
    const month = months[inputDateTime.getMonth()]
    const year = inputDateTime.getFullYear()
    const time = inputDateTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })

    const outputStr = `${day} ${month} ${year} ${time}`
    return outputStr
  } catch (error) {
    return 'Неверный формат входной строки.'
  }
}
