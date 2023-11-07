export const formatPhoneNumber = (phone: string | number): string => {
  const phonNumber = typeof phone === 'number' ? structuredClone(String(phone)) : structuredClone(phone)
  return `+${phonNumber[0]} (${phonNumber.slice(1, 4)}) ${phonNumber.slice(4, 7)} - ${phonNumber.slice(7, 9)} - ${phonNumber.slice(9)}`
}