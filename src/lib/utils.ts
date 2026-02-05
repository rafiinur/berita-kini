export const formatDate = (iso: string) => {
  const date = new Date(iso)
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
